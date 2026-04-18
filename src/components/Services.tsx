import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, SERVICE_COMPARISON } from '@/data/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Minus, Smartphone, Zap, ShieldCheck } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Platform</h2>
          <h3 className="text-4xl font-bold mb-6">Built for Community Growth</h3>
          <p className="text-lg text-muted-foreground">
            Helloopass provides the technology (Hpass OS) to turn your community into a thriving digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden border-border bg-card">
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 text-primary-foreground rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Accessible to Everyone & Ways to Pay */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Smartphone className="text-primary w-6 h-6" /> Accessible to Everyone
              </h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold">Works on Any Phone</h5>
                    <p className="text-sm text-muted-foreground">Smartphone or basic phone – everyone can access the platform via app or USSD.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold">No Expensive Equipment</h5>
                    <p className="text-sm text-muted-foreground">Members can start transacting immediately with the device they already have.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Updated Illustration: US couple of truck drivers with a large truck in the background */}
            <div className="flex-1 order-1 md:order-2 w-full max-w-[280px]">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/us-trucker-couple-with-semi-truck-e5f862b2-1776543981862.webp" 
                alt="US couple of truck drivers standing in front of their large semi-truck" 
                className="rounded-2xl shadow-lg border border-primary/20 w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-primary w-6 h-6" /> Simple Rules
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg flex items-center justify-between">
                <span className="font-medium">Points backed by real cash</span>
                <ShieldCheck className="text-green-600 w-5 h-5" />
              </div>
              <div className="p-4 bg-muted/50 rounded-lg flex items-center justify-between">
                <span className="font-medium">Money stays in the community</span>
                <Check className="text-primary w-5 h-5" />
              </div>
              <div className="p-4 bg-muted/50 rounded-lg flex items-center justify-between">
                <span className="font-medium">Merchants CAN cash out</span>
                <Check className="text-primary w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          <div className="p-8 border-b border-border bg-muted/50">
            <h4 className="text-2xl font-bold">Payment Methods & Access</h4>
            <p className="text-muted-foreground">Find the right tools for your role in the community.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/30">
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Feature</th>
                  {SERVICE_COMPARISON.tiers.map((tier) => (
                    <th key={tier} className="p-6 text-sm font-bold uppercase tracking-wider text-primary">{tier}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {SERVICE_COMPARISON.features.map((feature) => (
                  <tr key={feature.name} className="hover:bg-muted/20 transition-colors">
                    <td className="p-6 font-medium text-foreground">{feature.name}</td>
                    {feature.values.map((val, i) => (
                      <td key={i} className="p-6">
                        {typeof val === 'boolean' ? (
                          val ? <Check className="w-5 h-5 text-green-600" /> : <Minus className="w-5 h-5 text-muted-foreground/30" />
                        ) : (
                          <span className="text-muted-foreground">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;