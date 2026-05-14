import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const ContactSection: React.FC = () => {
  const contactCards = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'navaneedp29@gmail.com',
      href: 'mailto:navaneedp29@gmail.com',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'navaneed-p',
      href: 'https://linkedin.com/in/navaneed-p-97169b299',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'navvv29',
      href: 'https://github.com/navvv29',
    },
  ];

  return (
    <section
      data-section="contact"
      className="bg-[var(--bg)] border-t border-[var(--border)] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <p className="terminal-label text-center mb-6">// contact</p>
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={0.1} y={40} duration={0.7}>
          <div className="text-center">
            <h2 className="text-[var(--white)] font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight font-space">
              Let's Build Something
            </h2>
            <h2 className="gradient-heading font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight font-space">
              Intelligent Together
            </h2>
          </div>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} y={20} duration={0.7}>
          <p className="text-[var(--text-muted)] text-center max-w-[480px] mx-auto leading-relaxed my-8 font-space">
            I'm open to AI/ML internships, research collaborations, and freelance projects. If you're working on something interesting, reach out.
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <FadeIn delay={0.3} y={20} duration={0.7}>
          <div className="flex flex-wrap gap-4 justify-center my-12">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--surface)] border border-[var(--border)] rounded-xl px-6 py-5 hover:border-[var(--accent)] cursor-pointer transition-all duration-200 text-center w-full sm:w-auto"
              >
                <div className="text-[var(--accent)] flex justify-center mb-2">
                  {card.icon}
                </div>
                <p className="text-[var(--text-muted)] text-sm">{card.label}</p>
                <p className="text-[var(--text-primary)] text-sm font-medium mt-1">
                  {card.value}
                </p>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Location */}
        <FadeIn delay={0.4} y={20} duration={0.7}>
          <div className="text-center my-8">
            <div className="flex items-center justify-center gap-2 text-[var(--text-muted)] text-sm mb-1">
              <MapPin size={16} />
              <span>Malappuram, Kerala, India</span>
            </div>
            <p className="text-[var(--text-muted)] text-xs">
              Available for remote work worldwide.
            </p>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <FadeIn delay={0.5} y={20} duration={0.7}>
          <div className="border-t border-[var(--border)] mt-16 pt-8 flex justify-between items-center flex-wrap gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="border border-[var(--accent)] px-2 py-0.5 rounded-sm font-mono font-bold text-[var(--accent)]">
                NP
              </div>
            </div>

            {/* Credit */}
            <p className="text-[var(--text-muted)] text-xs font-mono">
              Built with React, Framer Motion & TypeScript
            </p>

            {/* Copyright */}
            <p className="text-[var(--text-muted)] text-xs">
              © 2026 Navaneed P
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
