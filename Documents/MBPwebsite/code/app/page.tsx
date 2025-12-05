/**
 * Homepage - Luxury perfume brand landing page
 * Features dramatic hero section with elegant typography and call-to-action
 */

import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-background via-background-secondary to-background" />

        {/* Subtle Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,47,167,0.15)_0%,transparent_70%)]" />

        {/* Accent Glow Effects */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-8 tracking-tight">
            Because perfume is{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary-light">
              emotion
            </span>
            {" "}transformed in molecules
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-text-secondary font-normal tracking-wide mb-12 max-w-2xl mx-auto">
            Artisanal fragrances crafted in Paris
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-primary" />
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" className="min-w-[200px]">
              Discover Collection
            </Button>
            <Button variant="secondary" className="min-w-[200px]">
              Our Story
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-text-muted"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
