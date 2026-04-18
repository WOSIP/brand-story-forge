import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Globe, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background World Map showing Interconnected Communities */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/interconnected-communities-map-hero-31614f32-1776543823589.webp"
          alt="World map illustrating interconnected global communities via Helloopass"
          className="w-full h-full object-cover"
        />
        {/* Warm theme overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <Network className="w-3.5 h-3.5" /> Interconnected Communities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Connecting <span className="text-primary">Every Community</span> To The Global Trade.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Helloopass bridges the gap between local associations and the global digital economy. 
              Our platform interlinks cooperatives, unions, and member groups through a secure, 
              borderless payment network accessible on any device.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                Join the Network <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg gap-2 border-primary/50 text-primary hover:bg-primary/5 bg-background/50 backdrop-blur-sm">
                <Globe className="w-5 h-5" /> Explore Global Reach
              </Button>
            </div>
          </motion.div>

          {/* Key Metrics with floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Linked Communities', value: '5,000+' },
              { label: 'Countries Active', value: '190+' },
              { label: 'Network Stability', value: '99.9%' },
              { label: 'Member Growth', value: '+240%' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="border-l-2 border-primary/50 pl-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Connectivity Hint */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0 pointer-events-none"
      />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;