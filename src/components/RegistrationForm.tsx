import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  Users, 
  FileText, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Upload, 
  Send, 
  Building2, 
  Globe, 
  MapPin 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';
import { ORGANIZATION_TYPES, COUNTRIES } from '@/data/mock-data';

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log('Registration submission:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Registration submitted successfully!', {
      description: 'Our evaluation team will review your details and contact you at infor@belcash.com.',
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="registration" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/registration-bg-40952f3a-1776543060496.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wider uppercase">Partner Onboarding</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Cooperative & Union Registration
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
            >
              Join the Helloopass ecosystem. Provide your details below for evaluation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="border-border shadow-2xl overflow-hidden bg-card/50 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-primary p-8 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Evaluation Criteria</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Legitimacy</p>
                          <p className="text-xs opacity-80">Valid operating license and registration</p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Community Impact</p>
                          <p className="text-xs opacity-80">Number of members and socio-economic activities</p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Digital Readiness</p>
                          <p className="text-xs opacity-80">Commitment to digital transformation</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 relative z-10">
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <p className="text-xs opacity-80 mb-2">Submit documentation to:</p>
                      <p className="text-sm font-bold">infor@belcash.com</p>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                </div>

                <div className="md:col-span-2 p-8 md:p-10 bg-background/40">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold flex items-center gap-2 text-primary">
                        <FileText className="w-5 h-5" /> Organization Details
                      </h4>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cooperativeName">Cooperative / Union Name</Label>
                          <Input id="cooperativeName" name="organizationName" placeholder="Official Registered Name" className="bg-background/50" required />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="organizationType">Type of Organization</Label>
                            <Select name="organizationType" required>
                              <SelectTrigger className="bg-background/50">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                {ORGANIZATION_TYPES.map((type) => (
                                  <SelectItem key={type} value={type.toLowerCase()}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select name="country" required>
                              <SelectTrigger className="bg-background/50">
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                {COUNTRIES.map((country) => (
                                  <SelectItem key={country} value={country.toLowerCase()}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Physical Address</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input id="address" name="address" placeholder="Street, City, Building..." className="pl-10 bg-background/50" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="description">Description of Activities</Label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Textarea 
                              id="description" 
                              name="description"
                              placeholder="Describe your core activities, mission, and services offered..." 
                              className="min-h-[100px] pl-10 bg-background/50"
                              required 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="memberCount">Number of Members</Label>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input id="memberCount" name="memberCount" type="number" className="pl-10 bg-background/50" placeholder="e.g. 1500" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="creationDate">Date of Creation</Label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input id="creationDate" name="creationDate" type="date" className="pl-10 bg-background/50" required />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="license">Upload Operating License (PDF/JPG)</Label>
                          <div className="border-2 border-dashed border-border rounded-xl p-6 transition-colors hover:border-primary/50 group bg-background/30">
                            <input type="file" id="license" name="license" className="hidden" required />
                            <label htmlFor="license" className="flex flex-col items-center gap-2 cursor-pointer">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Upload className="w-6 h-6" />
                              </div>
                              <span className="text-sm font-medium">Click to upload or drag and drop</span>
                              <span className="text-xs text-muted-foreground">Max file size: 10MB</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border">
                      <h4 className="text-lg font-bold flex items-center gap-2 text-primary">
                        <User className="w-5 h-5" /> Management Contact
                      </h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="managerName">Manager Full Name</Label>
                        <Input id="managerName" name="managerName" placeholder="Name of the person in charge" className="bg-background/50" required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="managerEmail">Manager Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input id="managerEmail" name="managerEmail" type="email" className="pl-10 bg-background/50" placeholder="manager@belcash.com" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="managerPhone">Manager Phone</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input id="managerPhone" name="managerPhone" type="tel" className="pl-10 bg-background/50" placeholder="+254 ..." required />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold gap-2 shadow-xl shadow-primary/30 bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing Application...' : (
                        <>Submit for Evaluation <Send className="w-5 h-5" /></>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;