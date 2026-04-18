import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { TEAM } from '@/data/mock-data';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Image updated: Two Korean students sitting near each other looking at their phones */}
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/korean-students-with-phones-ae516614-1776543714748.webp"
                alt="Two Korean students from an elite school sitting and looking at their phones"
                className="rounded-2xl shadow-2xl relative z-10 group-hover:scale-[1.02] transition-all duration-500 w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-2xl -z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-primary rounded-tl-2xl -z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">What is Helloopass?</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Empowering Communities Through Digital Trade.
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Helloopass is a digital platform that helps **cooperatives, Unions, and Associations** turn their member communities into self-sufficient digital economies.
              Think of it like this: **Visa empowers banks. Helloopass empowers you.**
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { text: 'Digital Economy Enabler', icon: ShieldCheck },
                { text: 'Community-Only Spending', icon: TrendingUp },
                { text: 'Empowering Local Trade', icon: Users },
                { text: 'Secure & Transparent', icon: CheckCircle2 }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-muted/50 border border-border rounded-xl flex items-center gap-6">
              <div className="flex -space-x-3">
                {TEAM.slice(1, 4).map((member, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Trusted by 50+ Communities</div>
                <div className="text-xs text-muted-foreground">Empowering thousands of members across Africa.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;