import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Shield, Zap } from 'lucide-react';

const GlobalReach = () => {
  return (
    <section id="global-reach" className="py-24 bg-card relative overflow-hidden">
      {/* Background Decorative Map */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover text-primary"
          fill="currentColor"
        >
          <path d="M150,150 L160,140 L170,150 L160,160 Z M300,200 L310,190 L320,200 L310,210 Z M450,250 L460,240 L470,250 L460,260 Z M600,300 L610,290 L620,300 L610,310 Z M750,350 L760,340 L770,350 L760,360 Z M100,400 L110,390 L120,400 L110,410 Z M800,100 L810,90 L820,100 L810,110 Z" />
          {/* Simplified World Map Silhouette (Conceptual) */}
          <path d="M100,100 Q150,50 200,100 T300,150 T400,100 T500,150 T600,100 T700,150 T800,100 T900,150 V350 Q850,400 800,350 T700,300 T600,350 T500,300 T400,350 T300,300 T200,350 T100,300 Z" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                <Globe className="w-4 h-4" /> Global Accessibility
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Empowering Communities <span className="text-primary">Anywhere on Earth.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Helloopass isn't just for local cooperatives. Our platform is built to scale globally, allowing associations, unions, and cooperatives from any corner of the world to build their own digital economies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Universal Access",
                    desc: "Works on any phone, anywhere, bridging the global digital divide."
                  },
                  {
                    icon: Shield,
                    title: "Secure Everywhere",
                    desc: "Enterprise-grade security standards applied to every community."
                  },
                  {
                    icon: Zap,
                    title: "Instant Setup",
                    desc: "Deploy your digital economy in minutes, regardless of geography."
                  },
                  {
                    icon: Globe,
                    title: "Global Standards",
                    desc: "Compliant with international financial and data protection norms."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] bg-primary/5 rounded-3xl border border-primary/20 p-8 overflow-hidden group"
            >
              {/* Animated World Map Visualization */}
              <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-2xl">
                {/* Simplified World Outline */}
                <path
                  d="M150,150 Q170,130 190,150 T230,170 T270,150 T310,170 T350,150 T390,170 T430,150 T470,170 T510,150 T550,170 T590,150 T630,170 T670,150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary/20"
                />
                
                {/* Dots representing communities */}
                {[
                  { x: 180, y: 140, label: 'Nairobi' },
                  { x: 320, y: 220, label: 'Lagos' },
                  { x: 550, y: 160, label: 'Mumbai' },
                  { x: 120, y: 180, label: 'New York' },
                  { x: 650, y: 280, label: 'Sydney' },
                  { x: 400, y: 100, label: 'London' },
                  { x: 450, y: 300, label: 'Johannesburg' },
                  { x: 250, y: 120, label: 'Cairo' },
                ].map((point, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      className="fill-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    />
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="8"
                      className="stroke-primary fill-transparent opacity-30"
                      animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                    />
                    {/* Connection lines to Africa (Central Hub) */}
                    <motion.path
                      d={`M${point.x},${point.y} Q${(point.x + 350) / 2},${(point.y + 220) / 2 - 50} 350,220`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      className="text-primary/30"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </g>
                ))}
                
                {/* Center Hub (Africa Representation) */}
                <circle cx="350" cy="220" r="12" className="fill-primary" />
                <circle cx="350" cy="220" r="20" className="stroke-primary fill-transparent animate-ping" />
              </svg>

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/80 backdrop-blur-md rounded-xl border border-primary/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider">Global Status</div>
                  <div className="text-lg font-bold text-foreground">Operational Worldwide</div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                    +15k
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;