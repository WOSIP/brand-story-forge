import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '@/data/mock-data';

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">The Helloopass Journey</h2>
          <h3 className="text-4xl font-bold mb-6">Our Path to Empowerment</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>

          <div className="space-y-24">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-foreground z-10 hidden md:block">
                  <div className="absolute inset-0 animate-ping bg-primary rounded-full opacity-75"></div>
                </div>

                <div className="w-full md:w-1/2 px-8">
                  <div className={`p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors ${
                    idx % 2 === 0 ? 'text-left' : 'md:text-right'
                  }`}>
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-lg text-lg font-bold mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                    <p className="text-background/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-8 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;