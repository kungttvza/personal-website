import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, MessageSquare, Zap, Mic } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'AI‑Powered SaaS Development',
    icon: Cpu,
    desc: 'End-to-end product development: React/Next frontends, Python backends, scalable infrastructure and production-ready deployments.'
  },
  {
    id: 2,
    title: 'LLM Integration & Prompting',
    icon: MessageSquare,
    desc: 'Design and implement LLM-based features, prompt engineering, chain-of-thought flows, and application-specific model orchestration.'
  },
  {
    id: 3,
    title: 'Intelligent Automation & Workflows',
    icon: Zap,
    desc: 'Build orchestration layers, automation pipelines, and intelligent workflows that connect systems, teams, and ML models.'
  },
  {
    id: 4,
    title: 'Voice & Conversational Interfaces',
    icon: Mic,
    desc: 'Voice agents, call analytics, and conversational UI — design and deploy voice experiences like IVR and branded assistants.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-primary" />
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Services</h2>
            <div className="h-[1px] w-8 bg-primary" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white max-w-2xl"
          >
            What I Bring To The Table
          </motion.h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative h-full bg-card rounded-2xl p-8 border border-white/5 group-hover:border-primary/30 transition-colors duration-500 flex flex-col items-start shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-background border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
