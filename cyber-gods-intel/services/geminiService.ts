
import { GoogleGenAI } from "@google/genai";
import { ResearchResult } from "../types";

const MODEL_NAME = 'gemini-3-pro-preview';

export const performResearch = async (query: string): Promise<ResearchResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are a world-class Cybersecurity Intelligence Expert. 
    The user is asking about 'GODS' or 'God' in cybersecurity. 
    Since 'GODS' can be an obscure acronym (e.g., Graph-based Outlier Detection System, Go-based Open Data Security) 
    or refer to 'God Mode' (extreme privilege), use Google Search grounding to find the most accurate current context.
    
    Structure your response:
    1. Direct Answer: What 'GODS' refers to in the specific context of their query.
    2. Variations: List other potential meanings of GODS in InfoSec (e.g. academic papers, specific tools).
    3. Technical Deep Dive: Explain the mechanics of the most relevant meaning.
    4. Security Implications: How it affects threat landscape or defense.
    
    Format in professional Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: query,
      config: {
        systemInstruction,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No research found.";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const sources = groundingChunks
      .filter(chunk => chunk.web)
      .map(chunk => ({
        title: chunk.web?.title || 'Source',
        uri: chunk.web?.uri || '#'
      }));

    const concepts = text
      .split(/[#*_\s]+/)
      .filter(word => word.length > 5 && /^[A-Z]{2,}$/.test(word))
      .slice(0, 5);

    return {
      text,
      sources,
      concepts: [...new Set<string>(concepts)]
    };
  } catch (error) {
    console.error("Research error:", error);
    throw error;
  }
};
