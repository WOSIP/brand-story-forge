import { motion } from "framer-motion";
import { PRICING_PACKAGES, PRICING_ICONS, PRICING_COMPARISON, HOW_TO_CHOOSE, FAQS } from "@/data/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle, ShieldCheck, Zap } from "lucide-react";
import { showComingSoon } from "@/lib/util";
const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-4"
          >
            Packages for Communities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Choose the perfect fit for your community
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From small associations to national unions, HellOOpass provides the tools you need to grow your digital economy.
          </motion.p>
        </div>

        {/* Package Comparison Table */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold">Full Feature Comparison</h4>
          </div>
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[300px] font-bold text-foreground py-6">Feature</TableHead>
                    {PRICING_COMPARISON.tiers.map((tier) => (
                      <TableHead key={tier} className="font-bold text-primary text-center py-6">
                        {tier}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PRICING_COMPARISON.features.map((feature, idx) => (
                    <TableRow key={feature.name} className={idx % 2 === 0 ? "bg-transparent" : "bg-muted/10"}>
                      <TableCell className="font-medium py-4">{feature.name}</TableCell>
                      {feature.values.map((val, i) => (
                        <TableCell key={i} className="text-center py-4">
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-semibold text-muted-foreground">{val}</span>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Detailed Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col transition-all duration-300 hover:shadow-2xl border-2 ${pkg.id === "standard" ? "border-primary shadow-lg ring-4 ring-primary/10" : "border-border"}`}
              >
                {pkg.id === "standard" && (
                  <div className="bg-primary text-primary-foreground text-center text-xs font-bold py-1 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-3xl font-black mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{pkg.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-8">
                  <div className="space-y-5">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-primary">Key Details</h5>
                    <div className="rounded-xl border border-border/50 bg-muted/30 overflow-hidden">
                      {pkg.details.map((detail, i) => {
                        const Icon = PRICING_ICONS[detail.label];

                        return (
                          <div
                            key={i}
                            className="flex items-center justify-between gap-4 px-4 py-3 border-b border-border/30 last:border-0"
                          >
                            {/* Left side */}
                            <div className="flex items-center gap-2">
                              {Icon && <Icon className="w-4 h-4 text-primary" />}
                              <span className="text-xs text-muted-foreground font-medium">{detail.label}</span>
                            </div>

                            {/* Right side */}
                            <span className="text-xs font-semibold text-right text-foreground">{detail.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-primary">Included Features</h5>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-xl">
                    <p className="text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider">Best For:</p>
                    <p className="text-sm">{pkg.bestFor}</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <div className="w-full">
                    <Button
                      variant={pkg.id === "standard" ? "default" : "outline"}
                      className="w-full py-6 text-base font-bold rounded-xl"
                      onClick={() => showComingSoon(`${pkg.name} Plan`, "Subscriptions are coming soon.")}
                    >
                      {pkg.action}
                    </Button>
                    <p className="text-[10px] text-center mt-3 text-muted-foreground uppercase font-bold tracking-tighter">
                      {pkg.actionDetail}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How to Choose */}
        <div className="bg-primary rounded-3xl p-10 mb-24 text-primary-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold mb-4">How to Choose?</h4>
              <p className="text-primary-foreground/80 mb-8">
                Find the package that matches your current stage of growth and community scale.
              </p>
              <div className="space-y-4">
                {HOW_TO_CHOOSE.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10"
                  >
                    <span className="font-medium">{item.group}</span>
                    <span className="font-black bg-white text-primary px-3 py-1 rounded-lg text-sm">{item.package}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                <Zap className="w-10 h-10" />
              </div>
              <h5 className="text-2xl font-bold mb-4">Still not sure?</h5>
              <p className="text-primary-foreground/80 mb-8">
                Our community success managers can help you assess your needs and select the best plan.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-xl font-semibold px-6 py-5 text-sm shadow-md hover:shadow-lg transition-all"
                onClick={() => showComingSoon("Talk to an Expert", "Expert consultations will be available soon.")}
              >
                Speak with an Expert
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-full mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-bold">Frequently Asked Questions</h4>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 py-2">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Summary Table */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm text-center">
          <h4 className="text-2xl font-bold mb-8">Quick Summary</h4>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold">Package</TableHead>
                  <TableHead className="text-center font-bold">Members</TableHead>
                  <TableHead className="text-center font-bold">Monthly Transactions</TableHead>
                  <TableHead className="text-center font-bold">Setup</TableHead>
                  <TableHead className="text-center font-bold">Annual Fee</TableHead>
                  <TableHead className="text-center font-bold">Trans. Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PRICING_PACKAGES.map((pkg) => (
                  <TableRow key={pkg.id}>
                    <TableCell className="font-bold text-primary">{pkg.name}</TableCell>
                    <TableCell>{pkg.details.find((d) => d.label === "Maximum Members")?.value}</TableCell>
                    <TableCell>{pkg.details.find((d) => d.label === "Monthly Transactions")?.value || "Not specified"}</TableCell>
                    <TableCell>{pkg.details.find((d) => d.label === "Setup Fee")?.value.split(" ")[0]}</TableCell>
                    <TableCell>{pkg.details.find((d) => d.label === "Annual Fee")?.value.split(" ")[0]}</TableCell>
                    <TableCell>{pkg.details.find((d) => d.label === "Transaction Fee")?.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="italic text-muted-foreground font-medium">HellOOpass – Empowering Communities Through Digital Trade</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
