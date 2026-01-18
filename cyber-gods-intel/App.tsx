
import React from 'react';
import { Layout } from './components/Layout';
import { ResearchTerminal } from './components/ResearchTerminal';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-12">
        <section className="text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] mono uppercase tracking-widest mb-2 animate-pulse">
            Deep Search Enabled
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Demystify <span className="text-emerald-500">Security Complexities</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From "God Mode" malware to Graph-based Outlier Detection Systems (GODS), 
            use AI-driven intelligence to analyze cybersecurity terminologies and threat vectors.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ResearchTerminal />
          </div>

          <aside className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 glow-border">
              <h3 className="text-emerald-400 font-bold mb-4 mono text-sm uppercase tracking-widest flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Key Concept: GODS
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                In cybersecurity research, <strong className="text-slate-200">GODS</strong> often refers to 
                <em className="text-emerald-400">Graph-based Outlier Detection System</em>, a method for identifying 
                malicious actors by analyzing connection patterns in network traffic.
              </p>
              <div className="bg-slate-800/50 rounded p-3 text-[11px] text-slate-500 mono leading-tight">
                PRO TIP: In exploitation contexts, "God Mode" implies full kernel-level access or administrative bypass.
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-slate-100 font-bold mb-4 mono text-sm uppercase tracking-widest">
                Trending Topics
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Zero Trust Architecture', trend: '+12%' },
                  { label: 'Quantum Cryptography', trend: '+45%' },
                  { label: 'Post-Quantum SSL', trend: '+8%' },
                  { label: 'Evasion Techniques', trend: '+22%' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-slate-400 group-hover:text-emerald-400 transition-colors text-sm">{item.label}</span>
                    <span className="text-xs mono text-emerald-500/50">{item.trend}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-800">
          <div className="space-y-3">
            <div className="text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-200">AI Grounding</h4>
            <p className="text-sm text-slate-500">Responses are grounded in real-time Google Search data to ensure accuracy for niche acronyms.</p>
          </div>
          <div className="space-y-3">
            <div className="text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-200">Multifaceted Analysis</h4>
            <p className="text-sm text-slate-500">Explores technical, academic, and practical security contexts of every search term.</p>
          </div>
          <div className="space-y-3">
            <div className="text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-200">Source Verification</h4>
            <p className="text-sm text-slate-500">Links directly to intelligence sources, white papers, and security documentation.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default App;
