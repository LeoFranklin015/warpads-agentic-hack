"use client";

import Timeline from "@/components/sections/Timeline";
import NavSection from "@/components/sections/NavSection";
import CallToValue from "@/components/sections/CallToValue";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Problem from "@/components/sections/Problem";

export default function HomePage() {
    return <div className="relative bg-slate-950">
        <NavSection />
        <HeroSection />
        <Problem />
        <CallToValue />
        <Vision />
        <Timeline />
        <Footer />
    </div>
}
