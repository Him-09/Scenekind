import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import UseCases from "@/components/sections/UseCases";
import Packages from "@/components/sections/Packages";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import { siteDescription, siteTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Work />
        <Process />
        <WhyUs />
        <UseCases />
        <Packages />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
