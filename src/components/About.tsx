import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu } from 'lucide-react';

export default function About() {

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full" />

            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Key Skills</h4>
                    <p className="text-sm text-muted-foreground">Technologies & expertise I use daily</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">React</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <span className="text-sm">Next.js</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">TypeScript</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">Python</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <span className="text-sm">LLMs / Prompting</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-violet-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-rose-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l4 6-4 6-4-6 4-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">Docker</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-yellow-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">AWS</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">OpenAI API</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-fuchsia-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <span className="text-sm">LangChain</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-green-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <span className="text-sm">MongoDB</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l1.5 4.5L18 8l-4 3 1 4-4-2-4 2 1-4-4-3 4.5-1.5L12 2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">ChatGPT</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">JavaScript</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-sky-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <span className="text-sm">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#071029] rounded-md">
                  <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">GitHub</span>
                </div>
              </div>

              
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase">About Me</h2>
              <div className="h-[1px] w-12 bg-primary" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Engineering Intelligence into Digital Products.
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am a Senior AI Full-Stack Developer specializing in building AI-powered SaaS platforms, modern web applications, and intelligent automation systems. With expertise in React, Next.js, Python, and LLM technologies, I create scalable solutions that combine powerful backend architecture with seamless user experiences.
              <br /><br />
              From AI assistants and intelligent workflows to enterprise-grade applications, my focus is on developing production-ready software that solves real business challenges. I transform complex ideas into reliable, high-performance products designed for growth, efficiency, and long-term success.
            </p>

            <div className="flex flex-wrap gap-4" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
