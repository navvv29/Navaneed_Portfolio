import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowDown } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { TypewriterText } from '../components/TypewriterText';
import { HireButton } from '../components/HireButton';
import { GhostButton } from '../components/GhostButton';
import { CountUp } from '../components/CountUp';

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.querySelector(`[data-section="${section.toLowerCase()}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <section data-section="hero" className="relative min-h-screen bg-[var(--bg)] overflow-x-clip">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(7,9,15,0.85)] backdrop-blur-xl">
        <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <FadeIn delay={0}>
            <div className="flex items-center gap-2">
              <div className="border border-[var(--accent)] px-2 py-0.5 rounded-sm font-mono font-bold text-[var(--accent)]">
                NP
              </div>
              <span className="text-[var(--accent)] font-mono text-sm animate-pulse">|</span>
            </div>
          </FadeIn>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm font-medium font-space transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Button */}
            <div className="hidden md:block">
              <HireButton>Hire Me</HireButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg)] border-b border-[var(--border)] p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm font-medium font-space text-left"
                >
                  {link}
                </button>
              ))}
              <HireButton>Hire Me</HireButton>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-8 px-5 pt-20 pb-32 min-h-[calc(100vh-80px)]">
        {/* Eyebrow */}
        <FadeIn delay={0.3} duration={0.7}>
          <div className="terminal-label">
            <TypewriterText
              text="> AI Engineer & ML Researcher"
              delay={500}
              speed={40}
            />
          </div>
        </FadeIn>

        {/* Main Heading */}
        <div className="overflow-hidden">
          <FadeIn delay={0.6} y={40} duration={0.7}>
            <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-bold leading-none whitespace-nowrap text-[var(--white)] uppercase tracking-tight font-space">
              Navaneed P.
            </h1>
          </FadeIn>
        </div>

        <div className="overflow-hidden">
          <FadeIn delay={0.75} y={40} duration={0.7}>
            <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-bold leading-none whitespace-nowrap gradient-heading uppercase tracking-tight font-space">
              AI Engineer
            </h1>
          </FadeIn>
        </div>

        {/* Subheading */}
        <FadeIn delay={0.9} y={20} duration={0.7}>
          <div className="text-center max-w-[600px] mx-auto space-y-4">
            <p className="text-[var(--text-muted)] font-light leading-relaxed font-space text-base md:text-lg">
              Pre-final year B.Tech AI & DS student at APJ Abdul Kalam Technological University. I build LLM pipelines, agentic AI systems, and production ML applications and I do it end-to-end.
            </p>
            <div className="inline-block mt-2">
              <span className="bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.3)] text-[var(--accent)] px-4 py-2 rounded-full font-mono text-sm shadow-[0_0_15px_rgba(45,212,191,0.15)] animate-pulse inline-flex whitespace-normal max-w-full text-center leading-relaxed">
                🟢 Actively seeking Internships: AI/ML, Data Science, Data Analysis, Python, & Full Stack
              </span>
            </div>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={1.1} y={20} duration={0.7}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HireButton>Let's Work Together</HireButton>
            <GhostButton icon={<ArrowDown size={16} />}>
              View Projects
            </GhostButton>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn delay={1.3} y={20} duration={0.7}>
          <div className="flex gap-8 md:gap-16 mt-8 flex-col sm:flex-row items-center justify-center">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] font-mono">
                <CountUp target={6} suffix="+" />
              </div>
              <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest font-mono mt-2">
                AI/ML Projects
              </p>
            </div>

            <div className="hidden sm:block w-px h-12 bg-[var(--border)]" />

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] font-mono">
                <CountUp target={3} />
              </div>
              <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest font-mono mt-2">
                Internships
              </p>
            </div>

            <div className="hidden sm:block w-px h-12 bg-[var(--border)]" />

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] font-mono">
                <CountUp target={14} suffix="+" />
              </div>
              <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest font-mono mt-2">
                Certifications
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p className="terminal-label text-xs">Scroll</p>
          <ArrowDown size={16} className="text-[var(--accent)]" />
        </motion.div>
      </div>
    </section>
  );
};
