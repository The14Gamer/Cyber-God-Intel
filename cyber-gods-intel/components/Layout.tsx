
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen cyber-gradient flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-5xl mb-12 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-slate-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-100 mono">
            CYBER<span className="text-emerald-400">GODS</span>.INTEL
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm text-slate-400 uppercase tracking-widest mono">
          <span className="hover:text-emerald-400 cursor-pointer transition-colors">Analyzer</span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors">Glossary</span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors">Threat Map</span>
        </nav>
      </header>
      
      <main className="w-full max-w-5xl flex-grow">
        {children}
      </main>

      <footer className="w-full max-w-5xl mt-12 py-6 border-t border-slate-800 text-center text-xs text-slate-500 mono uppercase tracking-widest">
        LETS HACK ETHICAL HACK
      </footer>
    </div>
  );
};
