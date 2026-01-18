
export interface ResearchResult {
  text: string;
  sources: { title: string; uri: string }[];
  concepts: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  sources?: { title: string; uri: string }[];
}
