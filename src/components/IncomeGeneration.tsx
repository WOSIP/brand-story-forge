import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  ShieldCheck,
  Wallet,
  RefreshCw,
  Zap,
  Heart,
  GraduationCap,
  Store,
  ChevronRight,
  Calculator,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const IncomeGeneration = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const revenueSources = [
    {
      title: "Transaction Fees",
      works:
        "A small percentage (e.g., 1% on Standard package) on every payment, transfer, or loan repayment processed through the community.",
      who: "Merchants and/or users",
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
    },
    {
      title: "Setup & Annual Fees",
      works:
        "Fees paid by the association to HellOOpass ($5,000 setup + $5,000 annual). The association then determines how to recover this cost.",
      who: "Association (shared with members)",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    },
    {
      title: "Merchant Cash-Out Fees",
      works: "A small fee when merchants convert points to real cash and transfer to bank or mobile money.",
      who: "Merchants",
      icon: <Wallet className="w-5 h-5 text-primary" />,
    },
    {
      title: "Lending Facilitation Fees",
      works: "A small percentage of each peer-to-peer loan facilitated and de-risked by the platform.",
      who: "Borrowers or lenders",
      icon: <RefreshCw className="w-5 h-5 text-primary" />,
    },
    {
      title: "Currency Exchange Fees",
      works: "If trading occurs between communities in different countries or currencies.",
      who: "Users or merchants",
      icon: <Zap className="w-5 h-5 text-primary" />,
    },
    {
      title: "Premium Services",
      works: "Extra services like advanced reporting, dedicated support, or custom features.",
      who: "Association or large merchants",
      icon: <Users className="w-5 h-5 text-primary" />,
    },
  ];

  const redistributionMethods = [
    {
      title: "Reduced Member Fees",
      benefit: "Lower transaction costs for members because the association subsidizes fees from its earnings.",
      icon: <TrendingUp className="w-5 h-5 text-accent" />,
    },
    {
      title: "Member Dividends",
      benefit: "At the end of each period, the association distributes profits back to members as cash or points.",
      icon: <Wallet className="w-5 h-5 text-accent" />,
    },
    {
      title: "Community Projects",
      benefit: "Funding for shared infrastructure – marketplaces, storage facilities, or digital kiosks.",
      icon: <Store className="w-5 h-5 text-accent" />,
    },
    {
      title: "Merchant Support",
      benefit: "Subsidized POS devices, marketing support, or training programs for local businesses.",
      icon: <ChevronRight className="w-5 h-5 text-accent" />,
    },
    {
      title: "Emergency Funds",
      benefit: "A pool of points set aside to help members in crisis – illness or natural disaster.",
      icon: <Heart className="w-5 h-5 text-accent" />,
    },
    {
      title: "Youth & Women Programs",
      benefit: "Targeted funding for entrepreneurship training, startup loans, or mentorship.",
      icon: <GraduationCap className="w-5 h-5 text-accent" />,
    },
  ];

  const cycleSteps = [
    { step: 1, title: "Join HellOOpass", desc: "The association registers. Members get wallets. Trading begins." },
    { step: 2, title: "Activity Generates Income", desc: "Payments, cash-outs, and loans generate small fees." },
    { step: 3, title: "Sustainable Revenue", desc: "Fees accumulate into a recurring, predictable income stream." },
    { step: 4, title: "Income is Reinvested", desc: "Earnings redistributed as dividends, subsidies, and projects." },
    { step: 5, title: "Active Community", desc: "Lower fees and rewards encourage more transactions." },
    { step: 6, title: "Growth & Prosperity", desc: "Cycle repeats. More members join. Community becomes self-sustaining." },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/community-empowerment-and-sustainable-income-950c4699-1776544086882.webp"
            alt="Community Empowerment"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-4 py-1">Sustainable Prosperity</Badge>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              How the Association Generates Income & Empowers the Community
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              The association does not just serve the community. It earns from the community's activity and reinvests that income back into
              the community.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Simple Concept */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-black mb-6 text-foreground">The Simple Concept</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                This creates a <span className="text-primary font-bold italic">virtuous cycle</span> where the more the community uses
                HellOOpass, the more the association earns, and the more it can give back to its members.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Growth-Driven</h4>
                    <p className="text-sm text-muted-foreground">Income scales naturally with community adoption and transaction volume.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Circular Economy</h4>
                    <p className="text-sm text-muted-foreground">
                      Wealth is retained within the community rather than extracted by outside banks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Virtuous Cycle Visual */}
            <motion.div {...fadeInUp} className="relative p-8 bg-primary/5 rounded-[2rem] border-2 border-primary/10">
              <div className="text-center mb-8">
                <h3 className="text-xl font-black text-primary">The Virtuous Cycle</h3>
              </div>
              <div className="flex flex-col items-center gap-6">
                {[
                  { text: "Community trades more", sub: "(payments, loans, transfers)", color: "primary" },
                  { text: "Association earns more", sub: "(transaction & cash-out fees)", color: "accent" },
                  { text: "Association reinvests", sub: "(dividends, subsidies, projects)", color: "primary" },
                  { text: "Members benefit directly", sub: "(lower costs, cashback, support)", color: "accent" },
                ].map((item, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div
                      className={`w-full p-4 bg-white rounded-xl border border-${item.color}/20 text-center shadow-sm relative group hover:scale-105 transition-transform`}
                    >
                      <p className="font-bold text-foreground">{item.text}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                    {idx < arr.length - 1 && <ArrowRight className="w-6 h-6 text-primary/40 rotate-90" />}
                    {idx === arr.length - 1 && (
                      <div className="mt-2 flex flex-col items-center">
                        <ArrowRight className="w-6 h-6 text-primary/40 rotate-90" />
                        <div className="mt-4 p-3 bg-primary text-primary-foreground rounded-full text-sm font-bold animate-pulse">
                          Cycle Repeats & Grows
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How the Association Earns Income */}
        <section className="mb-32">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">How the Association Earns Income</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple revenue streams ensure stability and growth for the association's community fund.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revenueSources.map((source, idx) => (
              <Card key={idx} className="border-border hover:border-primary/50 transition-colors bg-card shadow-sm group">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                    {source.icon}
                  </div>
                  <CardTitle className="text-lg">{source.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{source.works}</p>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Who Pays</span>
                    <Badge variant="outline" className="text-[10px]">
                      {source.who}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How Income is Redistributed */}
        <section className="mb-32">
          <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <motion.div {...fadeInUp} className="relative z-10">
              <h2 className="text-3xl font-black mb-6 text-center text-white">How Income is Redistributed</h2>
              <p className="text-background/70 text-center max-w-2xl mx-auto mb-16">
                The association does not keep all the income. A portion is reinvested to benefit all members through various strategic
                methods.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {redistributionMethods.map((method, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white">{method.icon}</div>
                      <h4 className="font-bold text-white">{method.title}</h4>
                    </div>
                    <p className="text-sm text-background/60 leading-relaxed">{method.benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Self-Empowerment Cycle */}
        <section className="mb-32">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">The Self-Empowerment Cycle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core logic of why the community becomes stronger over time through 6 progressive steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {cycleSteps.map((step, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="relative flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                    {step.step}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-lg text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sustainability Comparison */}
        <section className="mb-32">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 italic">Why This is Sustainable</h2>
            <p className="text-muted-foreground">A shift from traditional dependency to community self-sufficiency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            <div className="bg-muted/30 p-8 md:p-12">
              <h3 className="text-xl font-black mb-8 flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-6 h-6" /> Traditional Funding
              </h3>
              <ul className="space-y-6">
                {[
                  "Donations run out over time.",
                  "Grants have fixed end dates.",
                  "External funding creates dependency.",
                  "Money leaves the community (paid to outsiders).",
                  "No direct link between effort and reward.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-muted-foreground">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 md:p-12">
              <h3 className="text-xl font-black mb-8 flex items-center gap-2 text-primary">
                <TrendingUp className="w-6 h-6" /> HellOOpass Model
              </h3>
              <ul className="space-y-6">
                {[
                  "Income grows with community activity.",
                  "Revenue is recurring and predictable.",
                  "Community generates its own resources.",
                  "Value circulates within the community first.",
                  "More trading = more income = more benefits.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-foreground">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Real Example */}
        <section className="mb-32">
          <div className="bg-primary/5 rounded-[3rem] p-8 md:p-16 border border-primary/10">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-primary/20">
                  <Calculator className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black mb-6">Real Example: A SACCO of 5,000 Members</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    <strong>Package:</strong> Standard ($5,000 setup + $5,000 annual)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Monthly Volume:</strong> $100,000
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Markup:</strong> Association charges 1.5% (keeps 0.5% above fee)
                  </p>
                </div>
                <div className="mt-10 p-6 bg-primary text-primary-foreground rounded-2xl shadow-lg">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Total Annual Income</p>
                  <p className="text-4xl font-black">$10,800</p>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-12">
                <div>
                  <h4 className="font-black text-xl mb-6 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-primary" /> Income Breakdown
                  </h4>
                  <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/50 border-b border-border">
                        <tr>
                          <th className="px-6 py-4 font-bold">Source</th>
                          <th className="px-6 py-4 font-bold text-right">Calculation</th>
                          <th className="px-6 py-4 font-bold text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="px-6 py-4">Transaction fees (association share)</td>
                          <td className="px-6 py-4 text-right text-muted-foreground">$100,000 × 12 × 0.5%</td>
                          <td className="px-6 py-4 text-right font-bold">$6,000</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Merchant cash-out fees</td>
                          <td className="px-6 py-4 text-right text-muted-foreground">$100,000 × 12 × 0.2%</td>
                          <td className="px-6 py-4 text-right font-bold">$2,400</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">Lending facilitation fees</td>
                          <td className="px-6 py-4 text-right text-muted-foreground">$20,000 × 12 × 1%</td>
                          <td className="px-6 py-4 text-right font-bold">$2,400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-black text-xl mb-6 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-accent" /> Redistribution Impact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Member dividends", amount: "$3,000", benefit: "5,000 members get cashback in points" },
                      { title: "Merchant POS subsidies", amount: "$2,000", benefit: "Free/discounted POS for 20 small businesses" },
                      { title: "Emergency fund", amount: "$2,000", benefit: "Points set aside for member crises" },
                      { title: "Youth business training", amount: "$2,000", benefit: "Workshops for 50 young entrepreneurs" },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-border shadow-sm">
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-bold text-foreground text-sm">{item.title}</p>
                          <p className="text-primary font-black">{item.amount}</p>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-12">Why the Community Empowers Itself</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
              {[
                { title: "Ownership", text: "The community owns its data, its members, and its economy. HellOOpass provides the tool." },
                { title: "Reciprocity", text: "The more members trade, the more the association earns and reinvests. Effort is rewarded." },
                { title: "Local Circulation", text: "Money stays within the community longer before leaving via cash-outs." },
                { title: "Transparency", text: "Every member can see how the association is reinvesting fees." },
                { title: "No Middleman Extraction", text: "Traditional banks take fees out of the community. HellOOpass returns value." },
                { title: "Scalable", text: "As the community grows, income grows proportionally." },
              ].map((principle, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-black text-primary flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" /> {principle.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary p-12 rounded-[2rem] text-primary-foreground shadow-2xl shadow-primary/30">
              <p className="text-2xl md:text-3xl font-black leading-tight">
                The association earns sustainable income from community transactions and reinvests that income directly into member benefits
                – funding its own growth and prosperity.
              </p>
              <Separator className="my-8 bg-white/20" />
              <p className="font-black tracking-widest uppercase text-sm opacity-80">
                HellOOpass – Empowering Communities Through Digital Trade
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const X = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Check = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default IncomeGeneration;
