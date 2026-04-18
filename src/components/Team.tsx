import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '@/data/mock-data';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Leadership</h2>
          <h3 className="text-4xl font-bold mb-6">Empowering Communities Together</h3>
          <p className="text-lg text-muted-foreground">
            Our team brings together expertise in African fintech, community banking, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    <a href={member.socials.linkedin} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.socials.twitter} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.socials.instagram} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <div className="text-primary font-medium text-sm mb-3 uppercase tracking-wider">{member.role}</div>
                <p className="text-muted-foreground text-sm line-clamp-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;