import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GlobalReach from "./components/GlobalReach";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Timeline from "./components/Timeline";
import Team from "./components/Team";
import CaseStudies from "./components/CaseStudies";
import Blog from "./components/Blog";
import RegistrationForm from "./components/RegistrationForm";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IncomeGeneration from "./components/IncomeGeneration";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { countryStore } from "@/services/country.store";
import { useLocation } from "react-router-dom";

const sectionMap: Record<string, string> = {
  "/services": "services",
  "/global-reach": "global-reach",
  "/pricing": "pricing",
  "/results": "case-studies",
  "/registration": "registration",
};

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = sectionMap[location.pathname];
    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="global-reach">
        <GlobalReach />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="case-studies">
        <CaseStudies />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="registration">
        <RegistrationForm />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  useEffect(() => {
    countryStore.init();
  }, []);

  // Smooth scroll implementation for hash links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        // If we are not on the home page, let the router handle it
        if (window.location.pathname !== "/") return;

        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          const offset = 80; // Navbar height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("click", handleAnchorClick);
    return () => window.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        {/* Global Theme Overrides for Warm African Palette */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --background: oklch(0.98 0.02 85) !important;
            --foreground: oklch(0.25 0.05 45) !important;
            --card: oklch(0.99 0.01 85) !important;
            --card-foreground: oklch(0.25 0.05 45) !important;
            --popover: oklch(0.99 0.01 85) !important;
            --popover-foreground: oklch(0.25 0.05 45) !important;
            --primary: oklch(0.55 0.18 45) !important;
            --primary-foreground: oklch(0.99 0.01 85) !important;
            --secondary: oklch(0.75 0.2 75) !important;
            --secondary-foreground: oklch(0.25 0.05 45) !important;
            --muted: oklch(0.94 0.03 85) !important;
            --muted-foreground: oklch(0.45 0.05 45) !important;
            --accent: oklch(0.45 0.15 145) !important;
            --accent-foreground: oklch(0.99 0.01 85) !important;
            --border: oklch(0.9 0.05 45 / 0.2) !important;
            --input: oklch(0.9 0.05 45 / 0.2) !important;
            --ring: oklch(0.55 0.18 45) !important;
          }
          .dark {
            --background: oklch(0.2 0.03 45) !important;
            --foreground: oklch(0.98 0.02 85) !important;
            --card: oklch(0.22 0.03 45) !important;
            --card-foreground: oklch(0.98 0.02 85) !important;
            --popover: oklch(0.22 0.03 45) !important;
            --popover-foreground: oklch(0.98 0.02 85) !important;
            --primary: oklch(0.65 0.15 45) !important;
            --primary-foreground: oklch(0.2 0.03 45) !important;
            --secondary: oklch(0.7 0.15 75) !important;
            --secondary-foreground: oklch(0.2 0.03 45) !important;
            --muted: oklch(0.28 0.03 45) !important;
            --muted-foreground: oklch(0.7 0.03 85) !important;
            --accent: oklch(0.55 0.12 145) !important;
            --accent-foreground: oklch(0.2 0.03 45) !important;
            --border: oklch(0.35 0.03 45) !important;
            --input: oklch(0.35 0.03 45) !important;
            --ring: oklch(0.65 0.15 45) !important;
          }
        `,
          }}
        />

        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<LandingPage />} />
            <Route path="/global-reach" element={<LandingPage />} />
            <Route path="/pricing" element={<LandingPage />} />
            <Route path="/results" element={<LandingPage />} />
            <Route path="/registration" element={<LandingPage />} />
            <Route path="/income-generation" element={<IncomeGeneration />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
