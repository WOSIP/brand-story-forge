import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { CONTACT_INFO } from '@/data/mock-data';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! Our support team will respond within 24 hours.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Support & Inquiries</h2>
            <h3 className="text-4xl font-bold mb-8">Have Questions? We're Here to Help.</h3>
            <p className="text-background/70 text-lg mb-12">
              For general inquiries, technical support, or to learn more about our platform features, please reach out to our team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Our Regional Hubs</h4>
                  <p className="text-background/60">
                    {CONTACT_INFO.hubs.join(' | ')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Us</h4>
                  <p className="text-background/60">
                    {CONTACT_INFO.emails.map((email, idx) => (
                      <React.Fragment key={email}>
                        {email}{idx < CONTACT_INFO.emails.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Call Us</h4>
                  <div className="space-y-2">
                    {CONTACT_INFO.phones.map((phone) => (
                      <p key={phone.number} className="text-background/60 flex flex-col sm:flex-row sm:gap-2 sm:items-baseline">
                        <span className="font-semibold text-primary/90 text-sm whitespace-nowrap">{phone.label}:</span>
                        <span className="tabular-nums">{phone.number}</span>
                      </p>
                    ))}
                    <p className="text-background/40 text-xs mt-2">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70">Your Name</label>
                  <Input placeholder="John Doe" className="h-12 border-border text-foreground focus:ring-primary" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12 border-border text-foreground focus:ring-primary" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70">Subject</label>
                <Input placeholder="How can we help?" className="h-12 border-border text-foreground focus:ring-primary" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70">Message</label>
                <Textarea 
                  placeholder="Your message..." 
                  className="min-h-[120px] border-border text-foreground focus:ring-primary" 
                  required 
                />
              </div>

              <Button className="w-full h-14 text-lg gap-2 bg-primary hover:bg-primary/90">
                Send Message <Send className="w-5 h-5" />
              </Button>
              <p className="text-center text-xs text-foreground/50">
                For formal SACCO registration, please use the <a href="#registration" className="text-primary font-bold hover:underline">Registration Form</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;