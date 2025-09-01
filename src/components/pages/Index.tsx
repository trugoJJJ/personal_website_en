"use client";

import React from "react";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { BigTypeCTA } from "@/components/home/BigTypeCTA";
import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ArticlesSection } from "@/components/home/ArticlesSection"; 
import { CTASection } from "@/components/home/CTASection";
import { FooterSection } from "@/components/home/FooterSection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Portfolio – Adam Gałęcki – Digital Marketing Manager"
        description="Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych w firmach B2B i B2C."
        canonical="https://galecki.website"
        ogImage="/og_cover.png"
      />
      <Header />
      <HeroSection />
      <PortfolioSection />
      <BigTypeCTA />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <TechStackSection />
      <ArticlesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;