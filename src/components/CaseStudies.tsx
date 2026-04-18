import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES, TESTIMONIALS, TEAM } from '@/data/mock-data';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const featured = CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Community Impact</h2>
          <h3 className="text-4xl font-bold mb-6">Success Across Africa</h3>
        </div>

        {/* Before/After Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span> Featured Case Study
            </h4>
            <h3 className="text-3xl font-bold mb-6">{featured.title}</h3>
            <div className="space-y-6 text-muted-foreground mb-8">
              <div>
                <strong className="text-foreground">Challenge:</strong> {featured.challenge}
              </div>
              <div>
                <strong className="text-foreground">Solution:</strong> {featured.solution}
              </div>
              <div className="p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl italic text-foreground">
                "{featured.result}"
              </div>
            </div>
            <Button className="gap-2 bg-primary hover:bg-primary/90">Read Full Story <ArrowRight className="w-4 h-4" /></Button>
          </div>

          <div className="order-1 lg:order-2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl group select-none">
            <div className="absolute inset-0">
              <img src={featured.afterImage} alt="After" className="w-full h-full object-cover" />
            </div>
            <div 
              className="absolute inset-0 overflow-hidden" 
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img src={featured.beforeImage} alt="Before" className="w-full h-full object-cover" />
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-foreground text-xs px-3 py-1 rounded-full font-bold uppercase border border-border">Traditional Cash</div>
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs px-3 py-1 rounded-full font-bold uppercase">Digital Trade</div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-primary rounded-full"></div>
                  <div className="w-1 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-20"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full overflow-hidden">
                  <img src={TEAM[i % TEAM.length].image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;