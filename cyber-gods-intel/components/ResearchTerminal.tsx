
import React, { useState, useRef, useEffect } from 'react';
import { performResearch } from '../services/geminiService';
import { ResearchResult } from '../types';

export const ResearchTerminal: React.FC = () => {
  const [query, setQuery] = useState('what is Gods in cyber security');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setError(null);
    try {
      const data = await performResearch(query);
      setResult(data);
    } catch (err) {
      setError("Failed to fetch intelligence. Check connection and API status.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [result, loading, error]);

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="relative group">
        <form onSubmit={handleSearch} className="relative z-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter term, acronym, or question..."
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600 mono text-lg"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-6 rounded-lg transition-all flex items-center space-x-2 disabled:opacity-50"
          >
            {loading ? (
              <span className="animate-pulse">ANALYZING...</span>
            ) : (
              <>
                <span>SCAN</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </>
            )}
          </button>
        </form>
        <div className="absolute -inset-0.5 bg-emerald-500/20 rounded-xl blur opacity-30 group-focus-within:opacity-100 transition duration-1000"></div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[500px]">
        <div className="bg-slate-800/50 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
          </div>
          <span className="text-[10px] text-slate-500 mono uppercase tracking-tighter">Status: {loading ? 'Busy' : 'Idle'} // System: v4.2-Secure</span>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
          {!result && !loading && !error && (
            <div className="flex flex-col items-center justify-center h-full text-slate-600 space-y-4 py-20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 opacity-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <p className="mono animate-pulse">Waiting for query input...</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['GODS meaning', 'Privilege Escalation', 'SIEM GODS', 'God Mode Malware'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => {setQuery(tag); handleSearch();}}
                    className="text-[10px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 transition-colors mono"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {loading && (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-400">
                <span className="animate-spin h-5 w-5 border-2 border-emerald-500 border-t-transparent rounded-full"></span>
                <span className="mono text-sm">Querying distributed knowledge graphs...</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 animate-progress"></div>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 mono text-sm flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {result && (
            <div className="space-y-8 prose prose-invert prose-emerald max-w-none">
              <div className="bg-emerald-500/5 p-4 border-l-2 border-emerald-500 text-emerald-300 text-sm mono">
                <p className="font-bold mb-1 uppercase tracking-widest text-[10px]">Analysis Report Generated</p>
                <p>Knowledge depth: Standard High-Confidence // Reference Sources: {result.sources.length}</p>
              </div>
              
              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                {result.text.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) return <h2 key={i} className="text-2xl font-bold text-slate-100 mt-6 mb-4">{line.replace('# ', '')}</h2>;
                  if (line.startsWith('## ')) return <h3 key={i} className="text-xl font-semibold text-emerald-400 mt-5 mb-3">{line.replace('## ', '')}</h3>;
                  if (line.startsWith('### ')) return <h4 key={i} className="text-lg font-medium text-slate-200 mt-4 mb-2">{line.replace('### ', '')}</h4>;
                  if (line.trim().startsWith('- ')) return <li key={i} className="ml-4 mb-1 list-disc text-slate-400">{line.replace('- ', '')}</li>;
                  return <p key={i} className="mb-4">{line}</p>;
                })}
              </div>

              {result.sources.length > 0 && (
                <div className="pt-8 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 mono">Verified Intelligence Sources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {result.sources.map((source, idx) => (
                      <a 
                        key={idx} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all group"
                      >
                        <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                          </svg>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-xs font-bold text-slate-200 truncate">{source.title}</p>
                          <p className="text-[10px] text-slate-500 truncate mono uppercase">{new URL(source.uri).hostname}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};
