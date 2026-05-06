import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import illustration1 from "@/assets/illustration-1.svg";
import illustration2 from "@/assets/illustration-2.svg";
import illustration3 from "@/assets/illustration-5.svg";
import illustration4 from "@/assets/illustration-4.svg";

const illustrations = [
  {
    src: illustration1,
    title: "Community Registration",
    description: "Cooperatives and unions register and onboard their members into the HellOOpass network seamlessly.",
  },
  {
    src: illustration2,
    title: "Borderless Payments",
    description: "Members send and receive payments across borders with zero friction using their community wallet.",
  },
  {
    src: illustration3,
    title: "Merchant Integration",
    description: "Local merchants accept HellOOpass payments and get instant settlement directly to their account.",
  },
  {
    src: illustration4,
    title: "Real-Time Analytics",
    description: "Community leaders track transactions, member activity, and growth through a live dashboard.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20"
          >
            <span className="text-sm font-bold tracking-wider uppercase">See It In Action</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            How <span className="text-primary">HellOOpass</span> Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From onboarding to cross-border payments, see exactly how our platform connects communities to the global economy.
          </motion.p>
        </div>

        {/* Illustrations Grid -- full space, no padding container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {illustrations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center justify-center shadow-md">
                {idx + 1}
              </div>

              {/* Illustration -- full bleed, no padding */}
              <div className="w-full aspect-square bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text below */}
              <div className="p-5">
                <h3 className="text-base font-bold mb-1 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left -- illustration detail link */}
            <div className="p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase border border-primary/20 mb-6">
                  System Illustration
                </span>
                <h3 className="text-2xl md:text-3xl font-black mb-4">See How HellOOpass Works in Detail</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The illustrations above give you a snapshot. Open the full interactive diagram to explore the complete HellOOpass system
                  flow step by step.
                </p>
              </div>
              <a
                href="https://a0c853ef.mydala.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/80 active:scale-95 transition-all duration-200 w-fit shadow-lg shadow-primary/25"
              >
                View Full Illustration
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right -- demo platform */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase border border-primary/20 mb-6">
                  Try It Yourself
                </span>
                <h3 className="text-2xl md:text-3xl font-black mb-4">Experience It Firsthand</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create your own personal account and demo merchant shop to see exactly how HellOOpass works from both sides of a
                  transaction. No commitment, just a real hands-on experience.
                </p>
              </div>
              <button
                onClick={() => window.open("https://hpassfinance.vercel.app", "_blank", "noopener,noreferrer")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/80 active:scale-95 transition-all duration-200 w-fit shadow-lg shadow-primary/25"
              >
                Open Demo Platform
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
