import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Users, FileText, User, Mail, Phone, Upload, Building2, MapPin, ChevronsUpDown, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { validateFullName, validatePhone, validateEmail, validateFile } from "@/services/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { ORGANIZATION_TYPES, getFlagEmoji } from "@/data/mock-data";
import { countryStore } from "@/services/country.store";

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const countries = countryStore.getAll();

  const [countryOpen, setCountryOpen] = useState(false);
  const [dialOpen, setDialOpen] = useState(false);

  const [orgTypeOpen, setOrgTypeOpen] = useState(false);
  const [selectedOrgType, setSelectedOrgType] = useState("");

  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");
  const [selectedDialCode, setSelectedDialCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [licenseError, setLicenseError] = useState("");
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [orgTypeError, setOrgTypeError] = useState("");

  useEffect(() => {
    const ethiopia = countries.find((c) => c.countryCode === "ET");
    if (ethiopia) {
      setSelectedCountryCode("ET");
      setSelectedDialCode(ethiopia.dialCode);
    }
  }, [countries]);

  const dialListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!dialOpen || !selectedDialCode) return;

    setTimeout(() => {
      requestAnimationFrame(() => {
        const list = dialListRef.current;
        if (!list) return;

        const selected = list.querySelector(`[data-value="${selectedDialCode}"]`) ?? list.querySelector('[aria-selected="true"]');

        selected?.scrollIntoView({ block: "center", behavior: "instant" });
      });
    }, 100);
  }, [dialOpen, selectedDialCode]);

  const countryListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!countryOpen || !selectedCountryCode) return;

    setTimeout(() => {
      requestAnimationFrame(() => {
        const list = countryListRef.current;
        if (!list) return;

        const selected = list.querySelector(`[data-value="${selectedCountryCode}"]`) ?? list.querySelector('[aria-selected="true"]');

        selected?.scrollIntoView({ block: "center", behavior: "instant" });
      });
    }, 100);
  }, [countryOpen, selectedCountryCode]);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [orgNameError, setOrgNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [memberError, setMemberError] = useState("");
  const [descError, setDescError] = useState("");
  const [countryError, setCountryError] = useState("");

  // When country select changes, sync the dial code
  const handleCountryChange = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    const match = countries.find((c) => c.countryCode === countryCode);
    if (match) setSelectedDialCode(match.dialCode);
  };

  // When dial code select changes, sync the country
  const handleDialCodeChange = (dialCode: string) => {
    setSelectedDialCode(dialCode);
    const match = countries.find((c) => c.dialCode === dialCode);
    if (match) setSelectedCountryCode(match.countryCode);
  };

  const handleFile = (file: File | null) => {
    setLicenseError("");

    const error = validateFile(file);

    if (error) {
      setLicenseError(error);
      setLicenseFile(null);
      return;
    }

    setLicenseFile(file);
  };

  const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0] || null;
    handleFile(file);
  };

  // const fileToBase64 = (file: File): Promise<string> => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       const result = reader.result as string;

  //       // remove "data:application/pdf;base64,"
  //       const base64 = result.split(",")[1];
  //       resolve(base64);
  //     };

  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result as string;

        if (!result) {
          reject("Invalid file");
          return;
        }

        resolve(result);
      };

      reader.onerror = reject;
    });
  };

  const generateProjectName = (name: string) => {
    return name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "") // remove spaces
      .replace(/[^a-z0-9]/g, ""); // remove special chars
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // reset all errors
    setNameError("");
    setPhoneError("");
    setEmailError("");
    setLicenseError("");
    setOrgTypeError("");

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const name = (data.managerName as string)?.trim();
    const email = (data.managerEmail as string)?.trim();
    const orgName = (data.organizationName as string)?.trim();
    const address = (data.address as string)?.trim();
    const memberCount = Number(data.memberCount);
    const description = (data.description as string)?.trim();

    let valid = true;

    // -----------------------
    // 1. Full Name
    // -----------------------
    if (!validateFullName(name)) {
      setNameError("Enter first and last name (minimum 2 words).");
      valid = false;
    }

    // -----------------------
    // 2. Phone normalization + validation
    // -----------------------
    if (!validatePhone(phoneNumber)) {
      setPhoneError("Phone must be 6 to 15 digits, numbers only.");
      valid = false;
    }

    let cleanedPhone = phoneNumber.replace(/\D/g, "");
    const dial = selectedDialCode.replace("+", "");
    const isCI = selectedCountryCode === "CI" || selectedDialCode === "+225";

    if (cleanedPhone.startsWith(dial)) {
      cleanedPhone = cleanedPhone.slice(dial.length);
    }

    if (!isCI && cleanedPhone.startsWith("0")) {
      cleanedPhone = cleanedPhone.slice(1);
    }

    if (cleanedPhone.length < 6 || cleanedPhone.length > 15) {
      setPhoneError("Invalid phone number format.");
      valid = false;
    }

    // -----------------------
    // 3. Email
    // -----------------------
    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email address.");
      valid = false;
    }

    // -----------------------
    // 4. REQUIRED FIELDS (NOW ALL WITH UI ERRORS)
    // -----------------------

    if (!orgName) {
      setOrgNameError("Organization name is required.");
      valid = false;
    }

    if (!selectedCountryCode) {
      setCountryError("Country is required.");
      valid = false;
    }

    if (!selectedOrgType) {
      setOrgTypeError("Organization type is required.");
      valid = false;
    }

    if (!address) {
      setAddressError("Address is required.");
      valid = false;
    }

    if (!memberCount || memberCount < 1) {
      setMemberError("Member count must be at least 1.");
      valid = false;
    } else if (memberCount > 500) {
      setMemberError("Member count cannot exceed 500.");
      valid = false;
    }

    if (!description) {
      setDescError("Description is required.");
      valid = false;
    }

    // -----------------------
    // 5. FILE VALIDATION
    // -----------------------
    if (!licenseFile) {
      setLicenseError("Operating license is required.");
      valid = false;
    } else {
      const fileError = validateFile(licenseFile);
      if (fileError) {
        setLicenseError(fileError);
        valid = false;
      }
    }

    if (!valid) return;

    // -----------------------
    // 6. PHONE FINAL FORMAT
    // -----------------------
    const managerPhone = `${selectedDialCode}${cleanedPhone}`;

    // -----------------------
    // 7. SUBMIT
    // -----------------------
    setIsSubmitting(true);

    try {
      // convert file
      const encodedBusinessLicense = await fileToBase64(licenseFile!);
      const businessLicenseFilename = licenseFile.name;

      // build API payload
      const payload = {
        projectName: generateProjectName(orgName),
        mobile: managerPhone,
        countryCode: selectedCountryCode,
        settlementAccount: "",
        settlementBank: "",
        feePercentage: "0",
        debitFeePercentage: "0",
        projectModel: "marketplace",
        fullName: name,
        email: email || "",
        city: address,
        businessName: orgName,
        businessType: selectedOrgType,
        memberCount,
        description,
        encodedBusinessLicense,
        businessLicenseFilename,
      };

      const res = await fetch("https://helloomarket.com/api/dube/international/registerproject.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.message || "Failed to submit");
      }

      // ✅ SUCCESS TOAST
      toast.custom((t) => (
        <div className="flex items-start gap-4 rounded-xl border bg-card p-4 shadow-xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
            <Check className="w-5 h-5" />
          </div>

          <div className="flex flex-col flex-1">
            <span className="text-sm font-semibold">Registration Submitted</span>
            <span className="text-sm text-muted-foreground mb-2">Our evaluation team will review your details and contact you soon.</span>

            <button onClick={() => toast.dismiss(t)} className="text-xs font-medium text-primary hover:underline self-start">
              Got it
            </button>
          </div>
        </div>
      ));

      // reset
      setSelectedOrgType("");
      setPhoneNumber("");
      setLicenseFile(null);
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      console.error(err);

      let message = "Something went wrong. Please try again.";

      if (err instanceof Error) {
        message = err.message;
      }

      toast.custom((t) => (
        <div className="flex items-start gap-4 rounded-xl border bg-card p-4 shadow-xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-600">
            <span>!</span>
          </div>

          <div className="flex flex-col flex-1">
            <span className="text-sm font-semibold">Submission Failed</span>
            <span className="text-sm text-muted-foreground mb-2">{message}</span>

            <button onClick={() => toast.dismiss(t)} className="text-xs font-medium text-primary hover:underline self-start">
              Close
            </button>
          </div>
        </div>
      ));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-24 relative overflow-hidden">
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
              Join the HellOOpass ecosystem. Provide your details below for evaluation.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
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
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                </div>

                <div className="md:col-span-2 p-8 md:p-10 bg-background/40">
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold flex items-center gap-2 text-primary">
                        <FileText className="w-5 h-5" /> Organization Details
                      </h4>

                      <div className="grid grid-cols-1 gap-4">
                        {/* Cooperative / Union Name */}
                        <div className="space-y-2">
                          <Label htmlFor="cooperativeName">
                            Cooperative / Union Name <span className="text-destructive">*</span>
                          </Label>

                          <Input
                            id="cooperativeName"
                            name="organizationName"
                            placeholder="Official registered name"
                            className={`bg-background/50 ${orgNameError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                            onChange={() => orgNameError && setOrgNameError("")}
                            required
                          />

                          {orgNameError && <p className="text-xs text-destructive">{orgNameError}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Country */}
                          <div className="space-y-2">
                            <Label>
                              Country <span className="text-destructive">*</span>
                            </Label>
                            <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                              <PopoverTrigger asChild>
                                <button
                                  type="button"
                                  className="w-full flex items-center justify-between gap-2 h-10 px-3 rounded-md border border-input bg-background/50 text-sm hover:bg-muted/60 active:bg-muted transition-colors"
                                >
                                  {selectedCountryCode ? (
                                    <span className="flex items-center gap-2">
                                      <span className="text-base leading-none w-6 text-center">{getFlagEmoji(selectedCountryCode)}</span>
                                      <span className="leading-none">
                                        {countries.find((c) => c.countryCode === selectedCountryCode)?.country}
                                      </span>
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground">Select country</span>
                                  )}
                                  <ChevronsUpDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                </button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[280px] p-0 mx-2" align="start">
                                <Command
                                  filter={(value, search) => {
                                    const country = countries.find((c) => c.countryCode === value);
                                    if (!country) return 0;
                                    const q = search.toLowerCase();
                                    if (
                                      country.country.toLowerCase().includes(q) ||
                                      country.countryCode.toLowerCase().includes(q) ||
                                      country.dialCode.includes(q)
                                    )
                                      return 1;
                                    return 0;
                                  }}
                                >
                                  <CommandInput placeholder="Search by name, code, dial..." />
                                  <CommandList ref={countryListRef}>
                                    <CommandEmpty>No country found.</CommandEmpty>
                                    <CommandGroup>
                                      {countries.map((c) => (
                                        <CommandItem
                                          key={c.countryCode}
                                          value={c.countryCode}
                                          onSelect={(val) => {
                                            handleCountryChange(val);
                                            setCountryOpen(false);
                                          }}
                                          className="relative hover:bg-muted/60 aria-selected:!bg-muted/60 data-[selected=true]:!bg-muted/60 data-[highlighted]:!bg-muted/60 hover:text-foreground aria-selected:!text-foreground data-[selected=true]:!text-foreground"
                                        >
                                          {selectedCountryCode === c.countryCode && (
                                            <Check className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                                          )}
                                          <span className="text-base leading-none w-6 text-center flex-shrink-0">
                                            {getFlagEmoji(c.countryCode)}
                                          </span>
                                          <span className="text-xs leading-none pr-6">{c.country}</span>
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>

                            {countryError && <p className="text-xs text-destructive">{countryError}</p>}
                          </div>
                          {/* Type of Organization */}
                          <div className="space-y-2">
                            <Label htmlFor="organizationType">
                              Type of Organization <span className="text-destructive">*</span>
                            </Label>

                            <Popover open={orgTypeOpen} onOpenChange={setOrgTypeOpen}>
                              <PopoverTrigger asChild>
                                <button
                                  type="button"
                                  className={`w-full flex items-center justify-between gap-2 h-10 px-3 rounded-md border text-sm transition-colors ${orgTypeError ? "border-destructive" : "border-input"} bg-background/50 hover:bg-muted/60 active:bg-muted`}
                                >
                                  {selectedOrgType ? (
                                    <span className="leading-none">{selectedOrgType}</span>
                                  ) : (
                                    <span className="text-muted-foreground">Select organization type</span>
                                  )}

                                  <ChevronsUpDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                </button>
                              </PopoverTrigger>

                              <PopoverContent className="w-[280px] p-0 mx-2" align="start">
                                <Command>
                                  <CommandList>
                                    <CommandEmpty>No type found.</CommandEmpty>

                                    <CommandGroup>
                                      {ORGANIZATION_TYPES.map((type) => (
                                        <CommandItem
                                          key={type}
                                          value={type}
                                          onSelect={() => {
                                            setSelectedOrgType(type);
                                            setOrgTypeOpen(false);
                                            setOrgTypeError("");
                                          }}
                                          className="relative hover:bg-muted/60 aria-selected:!bg-muted/60 data-[selected=true]:!bg-muted/60 data-[highlighted]:!bg-muted/60 hover:text-foreground aria-selected:!text-foreground data-[selected=true]:!text-foreground"
                                        >
                                          {selectedOrgType === type && (
                                            <Check className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                                          )}

                                          <span className="text-xs leading-none pr-6">{type}</span>
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>

                            {/* Hidden submit field */}
                            <input type="hidden" name="organizationType" value={selectedOrgType} />

                            {/* Error message */}
                            {orgTypeError && <p className="text-xs text-destructive">{orgTypeError}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Physical Address */}
                          <div className="space-y-2">
                            <Label htmlFor="address">
                              Physical Address <span className="text-destructive">*</span>
                            </Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />

                              <Input
                                id="address"
                                name="address"
                                placeholder="Street, city, building..."
                                className={`pl-10 bg-background/50 ${addressError ? "ring-2 ring-destructive border-input" : ""}`}
                                onChange={() => addressError && setAddressError("")}
                                required
                              />
                            </div>

                            {addressError && <p className="text-xs text-destructive">{addressError}</p>}
                          </div>

                          {/* Number of Members */}
                          <div className="space-y-2">
                            <Label htmlFor="memberCount">
                              Number of Members <span className="text-destructive">*</span>
                            </Label>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />

                              <Input
                                id="memberCount"
                                name="memberCount"
                                type="number"
                                min={0}
                                max={500}
                                className={`pl-10 bg-background/50 ${memberError ? "ring-2 ring-destructive border-input" : ""}`}
                                placeholder="e.g. 100"
                                onChange={(e) => {
                                  const value = Number(e.target.value);
                                  if (value > 500) return;
                                  if (memberError) setMemberError("");
                                }}
                                required
                              />
                            </div>

                            {memberError && <p className="text-xs text-destructive">{memberError}</p>}
                          </div>
                        </div>

                        {/* Description of Activities */}
                        <div className="space-y-2">
                          <Label htmlFor="description">
                            Description of Activities <span className="text-destructive">*</span>
                          </Label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Textarea
                              id="description"
                              name="description"
                              placeholder="Describe your core activities, mission, and services offered..."
                              className={`min-h-[100px] pl-10 bg-background/50 ${descError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                              onChange={() => descError && setDescError("")}
                              required
                            />

                            {descError && <p className="text-xs text-destructive">{descError}</p>}
                          </div>
                        </div>

                        {/* Upload License */}
                        <div className="space-y-2">
                          <Label htmlFor="license">
                            Upload Operating License (PDF) <span className="text-destructive">*</span>
                          </Label>

                          <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`
      border-2 border-dashed rounded-xl p-6 transition-all cursor-pointer
      ${isDragging ? "border-primary bg-primary/10" : "border-muted-foreground/50 hover:border-primary/60 hover:bg-background/40"}
    `}
                          >
                            <input
                              type="file"
                              id="license"
                              name="license"
                              className="hidden"
                              accept="application/pdf"
                              required
                              onChange={handleLicenseChange}
                            />

                            <label htmlFor="license" className="flex flex-col items-center gap-2 cursor-pointer">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Upload className="w-6 h-6" />
                              </div>

                              {licenseFile ? (
                                <div className="text-center">
                                  <p className="text-sm font-medium text-foreground">{licenseFile.name}</p>
                                  <p className="text-xs text-muted-foreground">{(licenseFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                                </div>
                              ) : (
                                <>
                                  <span className="text-sm font-medium">Drag & drop or click to upload</span>
                                  <span className="text-xs text-muted-foreground">PDF only · Max 10MB</span>
                                </>
                              )}
                            </label>
                          </div>

                          {licenseError && <p className="text-xs text-destructive">{licenseError}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border">
                      <h4 className="text-lg font-bold flex items-center gap-2 text-primary">
                        <User className="w-5 h-5" /> Management Contact
                      </h4>

                      <div className="space-y-4">
                        {/* Full Name */}
                        <div className="space-y-2">
                          <Label htmlFor="managerName">
                            Full Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="managerName"
                            name="managerName"
                            placeholder="e.g. John Doe"
                            className={`bg-background/50 ${nameError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                            onChange={() => nameError && setNameError("")}
                            required
                          />
                          {nameError && <p className="text-xs text-destructive">{nameError}</p>}
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label htmlFor="managerPhone">
                            Phone Number <span className="text-destructive">*</span>
                          </Label>
                          <div
                            className={`flex items-center h-10 rounded-md border bg-background/50 overflow-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-0 transition-all ${phoneError ? "border-destructive focus-within:ring-destructive" : "border-input"}`}
                          >
                            {/* Dial Code Trigger */}
                            <Popover open={dialOpen} onOpenChange={setDialOpen}>
                              <PopoverTrigger asChild>
                                <button
                                  type="button"
                                  className="flex items-center gap-2 h-full px-3 hover:bg-muted/60 active:bg-muted transition-colors flex-shrink-0"
                                >
                                  {selectedDialCode ? (
                                    <>
                                      <span className="text-base leading-none w-6 text-center">{getFlagEmoji(selectedCountryCode)}</span>
                                      <span className="text-sm leading-none">{selectedDialCode}</span>
                                    </>
                                  ) : (
                                    <>
                                      <Phone className="w-4 h-4 text-muted-foreground" />
                                      <span className="text-xs text-muted-foreground">Code</span>
                                    </>
                                  )}
                                  <ChevronsUpDown className="w-3 h-3 text-muted-foreground" />
                                </button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[270px] p-0 mx-2" align="start">
                                <Command
                                  filter={(value, search) => {
                                    const country = countries.find((c) => c.dialCode === value);
                                    if (!country) return 0;
                                    const q = search.toLowerCase();
                                    if (
                                      country.country.toLowerCase().includes(q) ||
                                      country.countryCode.toLowerCase().includes(q) ||
                                      country.dialCode.includes(q)
                                    )
                                      return 1;
                                    return 0;
                                  }}
                                >
                                  <CommandInput placeholder="Search by name, code, dial..." />
                                  <CommandList ref={dialListRef}>
                                    <CommandEmpty>No result found.</CommandEmpty>
                                    <CommandGroup>
                                      {countries.map((c) => (
                                        <CommandItem
                                          key={c.countryCode}
                                          value={c.dialCode}
                                          onSelect={(val) => {
                                            handleDialCodeChange(val);
                                            setDialOpen(false);
                                          }}
                                          className="relative hover:bg-muted/60 aria-selected:!bg-muted/60 data-[selected=true]:!bg-muted/60 data-[highlighted]:!bg-muted/60 hover:text-foreground aria-selected:!text-foreground data-[selected=true]:!text-foreground"
                                        >
                                          {selectedDialCode === c.dialCode && (
                                            <Check className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                                          )}
                                          <span className="text-base leading-none w-6 text-center flex-shrink-0">
                                            {getFlagEmoji(c.countryCode)}
                                          </span>
                                          <span className="text-xs leading-none flex-shrink-0">{c.dialCode}</span>
                                          <span className="ml-auto text-xs text-muted-foreground text-right pr-6">{c.country}</span>
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>

                            <span className="w-[1.5px] h-5 bg-foreground/20 flex-shrink-0" />

                            <input
                              id="managerPhone"
                              type="tel"
                              inputMode="numeric"
                              value={phoneNumber}
                              onChange={(e) => {
                                const digits = e.target.value.replace(/\D/g, "");
                                setPhoneNumber(digits);
                                if (phoneError) setPhoneError("");
                              }}
                              className="flex-1 h-full px-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                              placeholder="000 000 000"
                              maxLength={15}
                              required
                            />
                          </div>
                          {phoneError && <p className="text-xs text-destructive">{phoneError}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          {/* <Label htmlFor="managerEmail">Email Address</Label> */}
                          <Label htmlFor="managerEmail">
                            Email Address <span className="text-destructive">*</span>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="managerEmail"
                              name="managerEmail"
                              type="email"
                              required
                              className={`pl-10 bg-background/50 ${emailError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                              placeholder="john@organization.com"
                              onChange={() => emailError && setEmailError("")}
                            />
                          </div>
                          {emailError && <p className="text-xs text-destructive">{emailError}</p>}
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-10 text-sm font-bold gap-2 shadow-xl shadow-primary/30 bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing Registration..." : <>Submit for Evaluation</>}
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
