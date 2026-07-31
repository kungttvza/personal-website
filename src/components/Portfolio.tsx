import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import voicerrImg from '../assets/voicerr.jpg';
import zencallImg from '../assets/zencall.jpg';
import addaiImg from '../assets/addai.jpg';
import orqImg from '../assets/orqai.jpg';
import syncrentImg from '../assets/syncrent.jpg';
import sportanoImg from '../assets/sportano.jpg';
import vervoeImg from '../assets/vervoe.jpg';
import holibobImg from '../assets/holibob.jpg';
import buildiumImg from '../assets/buildium.jpg';
import totaldmsImg from '../assets/totaldms.jpg';

const TABS = ['All', 'AI Platform', 'Voice Intelligence', 'AI Operations', 'Health Tech'];

const PROJECTS = [
  {
    id: '01',
    title: 'Voicerr.ai',
    desc: 'White-label AI voice agents for retail and commerce — build, deploy, and scale branded voice experiences for sales, support, and customer engagement.',
    image: voicerrImg,
    link: 'https://voicerr.ai',
    category: 'AI Platform'
  },
  {
    id: '02',
    title: 'Zencall.ai',
    desc: 'Intelligent call analytics and coaching experience that enhances sales performance with AI-driven recommendations.',
    image: zencallImg,
    link: 'https://zencall.ai',
    category: 'Voice Intelligence'
  },
  {
    id: '03',
    title: 'Orq.ai',
    desc: 'Adaptive orchestration workspace for AI workflows, connecting teams and models with seamless automation.',
    image: orqImg,
    link: 'https://orq.ai',
    category: 'AI Operations'
  },
  {
    id: '04',
    title: 'Addai.life',
    desc: 'Personalized wellness platform using AI to deliver health insights, coaching, and life optimization tools.',
    image: addaiImg,
    link: 'https://addai.life',
    category: 'Health Tech'
  }
];

const MORE_PROJECTS = [
  {
    title: 'Buildium',
    link: 'https://www.buildium.com/',
    image: buildiumImg
  },
  {
    title: 'Syncrent',
    link: 'https://syncrent.io/',
    image: syncrentImg
  },
  {
    title: 'TotalDMS',
    link: 'https://totaldms.com/',
    image: totaldmsImg
  },
  {
    title: 'Sportano',
    link: 'https://sportano.com',
    image: sportanoImg
  },
  {
    title: 'Vervoe',
    link: 'https://vervoe.com/',
    image: vervoeImg
  },
  {
    title: 'Holibob',
    link: 'https://www.holibob.tech/',
    image: holibobImg
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const filteredProjects = activeTab === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === activeTab);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-primary" />
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Portfolio</h2>
            <div className="h-[1px] w-8 bg-primary" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Featured Works
          </motion.h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                  : 'bg-card text-muted-foreground hover:bg-white/5 border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-32">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
              >
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <span className="text-6xl md:text-8xl font-bold text-white/5 mb-6 select-none transition-colors duration-500 group-hover:text-primary/10">
                    {project.id}
                  </span>
                  <h4 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                    {project.desc}
                  </p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-medium group/link">
                    Visit Site 
                    <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Mockup Image */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-2xl overflow-hidden bg-card border border-white/10 shadow-2xl aspect-[4/3] transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 bg-[#0f172a]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 600'><rect fill='%230a1120' width='800' height='600'/><text fill='%23ffffff' font-family='sans-serif' font-size='32' font-weight='bold' x='50%' y='50%' text-anchor='middle' dominant-baseline='middle'>Image Unavailable</text></svg>`;
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <button className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-[0_0_30px_rgba(79,70,229,0.6)]">
                        <ExternalLink size={24} />
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* More featured works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-4">Additional Works</p>
            <h4 className="text-3xl md:text-4xl font-bold text-white">
              Other real deployments and product experiences
            </h4>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {MORE_PROJECTS.map((project) => (
              <a
                key={project.link}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/10 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_15px_30px_-15px_rgba(79,70,229,0.5)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-primary">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <h5 className="text-xl font-semibold text-white">{project.title}</h5>
                </div>
                <div className="h-64 rounded-3xl overflow-hidden bg-[#0f172a] border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 500 300"><rect fill="%230b1220" width="500" height="300"/><text fill="%23ffffff" font-family="sans-serif" font-size="22" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Logo Not Found</text></svg>`;
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
