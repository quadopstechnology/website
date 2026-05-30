import dynamic from "next/dynamic";
import ParallaxProvider from "@/src/components/ParallaxProvider";

// Load above-the-fold components
const Header = dynamic(() => import("@/src/components/Header"), { ssr: true });
const Hero = dynamic(() => import("@/src/components/Hero"), { ssr: true });
const Stats = dynamic(() => import("@/src/components/Stats"), { ssr: true });
const Services = dynamic(() => import("@/src/components/Services"), {
  ssr: true,
});

// Lazy-load below-the-fold components with specific loading skeletons to prevent layout shift
const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: true,
  loading: () => (
    <div className="py-28 max-w-[1280px] mx-auto animate-pulse px-margin-mobile md:px-margin-desktop">
      <div className="h-6 bg-surface-variant/30 w-32 rounded-full mb-4" />
      <div className="h-10 bg-surface-variant/30 w-96 rounded-lg mb-16" />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="h-[420px] bg-surface-container rounded-2xl border border-outline-variant/20" />
        <div className="h-[420px] bg-surface-container rounded-2xl border border-outline-variant/20" />
        <div className="h-[420px] bg-surface-container rounded-2xl border border-outline-variant/20" />
      </div>
    </div>
  ),
});

const ProjectPlanner = dynamic(
  () => import("@/src/components/ProjectPlanner"),
  {
    ssr: true,
    loading: () => (
      <div className="py-28 px-margin-mobile md:px-margin-desktop max-w-[1000px] mx-auto">
        <div className="h-[600px] bg-surface-container rounded-3xl border border-outline-variant/20 animate-pulse" />
      </div>
    ),
  },
);

const Team = dynamic(() => import("@/src/components/Team"), {
  ssr: true,
  loading: () => (
    <div className="py-28 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto animate-pulse">
      <div className="h-6 bg-surface-variant/30 w-32 rounded-full mx-auto mb-4" />
      <div className="h-10 bg-surface-variant/30 w-80 rounded-lg mx-auto mb-16" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-80 bg-surface-container rounded-2xl border border-outline-variant/20"
          />
        ))}
      </div>
    </div>
  ),
});

const Testimonials = dynamic(() => import("@/src/components/Testimonials"), {
  ssr: true,
  loading: () => (
    <div className="py-28 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto animate-pulse">
      <div className="h-[300px] bg-surface-container rounded-3xl border border-outline-variant/20" />
    </div>
  ),
});

const Contact = dynamic(() => import("@/src/components/Contact"), {
  ssr: true,
  loading: () => (
    <div className="py-28 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto animate-pulse">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="h-6 bg-surface-variant/30 w-24 rounded-full" />
          <div className="h-16 bg-surface-variant/30 w-full rounded-lg" />
          <div className="h-32 bg-surface-variant/30 w-3/4 rounded-lg" />
        </div>
        <div className="h-[450px] bg-surface-container rounded-3xl border border-outline-variant/20" />
      </div>
    </div>
  ),
});

const Footer = dynamic(() => import("@/src/components/Footer"), {
  ssr: true,
  loading: () => (
    <div className="w-full bg-on-background/10 h-80 animate-pulse mt-auto" />
  ),
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-on-background">
      {/* Background Ambient Decorative Lights */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] aspect-square rounded-full blur-[140px] opacity-40 select-none pointer-events-none bg-radial from-tertiary-fixed-dim to-[#fdf8ff] animate-float-1"></div>
      <div className="absolute top-[40%] right-[-10%] w-[45%] aspect-square rounded-full blur-[150px] opacity-45 select-none pointer-events-none bg-radial from-[#ebe6ee] to-[#fdf8ff] animate-float-2"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[40%] aspect-square rounded-full blur-[130px] opacity-35 select-none pointer-events-none bg-radial from-primary-container to-[#fdf8ff] animate-float-1"></div>

      {/* Global Parallax Card Interaction Handler */}
      <ParallaxProvider />

      {/* Sticky Header Nav Bar */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        {/* <Stats /> */}

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}
        {/* <Portfolio /> */}

        {/* Interactive Estimator / Project Planner */}
        <ProjectPlanner />

        {/* Team Section */}
        <Team />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Form & Project Submission Section */}
        <Contact />

        {/* CTA Bottom Banner */}
        <section className="mx-margin-mobile md:mx-margin-desktop my-28 rounded-3xl bg-on-background overflow-hidden relative group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-tertiary/20 via-transparent to-transparent"></div>
          <div className="px-10 py-20 md:p-24 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-primary max-w-2xl leading-tight font-bold">
              Ready to Accelerate Growth with Expert Web, App, DevOps &amp; SEO
              Deliveries?
            </h2>
            <a
              href="#estimator"
              className="whitespace-nowrap bg-surface-container-lowest text-on-background px-10 py-5 rounded-xl font-label-md text-label-md hover:bg-tertiary-container transition-all shadow-xl active:scale-95 text-center block"
            >
              Get Custom Blueprint
            </a>
          </div>
        </section>
      </main>

      {/* Footer (Shared Component) */}
      <Footer />
    </div>
  );
}
