import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { TerminalWindow } from '../components/TerminalWindow';

export const AboutSection: React.FC = () => {
  const terminalLines = [
    '$ whoami',
    '> navaneed_p — AI Engineer in training',
    '',
    '$ cat interests.txt',
    '> LLM Pipelines | Agentic AI | Computer Vision',
    '> NLP | Full-Stack | Research',
    '',
    '$ ls projects/',
    '> AppForge_AI/  CompIntel/  CivicResolve_AI/',
    '> LumiCity_AI/  SyncEdu/    FishKart/',
    '',
    '$ cat status.txt',
    '> Open to internships & collaborations',
    '> Available for freelance AI projects',
    '> Based in Kerala, India 🇮🇳',
    '',
    '$ _',
  ];

  return (
    <section
      data-section="about"
      className="min-h-screen bg-[var(--bg)] border-b border-[var(--border)] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <p className="terminal-label mb-6">// about.md</p>
        </FadeIn>

        <FadeIn delay={0.1} y={40} duration={0.7}>
          <h2 className="gradient-heading font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-12">
            About Me
          </h2>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <FadeIn delay={0.2} y={20} duration={0.7}>
              <p className="text-[var(--text-muted)] font-light leading-relaxed text-[clamp(0.95rem,1.5vw,1.1rem)] font-space">
                I'm Navaneed — a pre-final year B.Tech student in Artificial Intelligence and Data Science at APJ Abdul Kalam Technological University, graduating in May 2027. I have a CGPA of 7.92 and I genuinely care about building systems that work in the real world, not just on paper.
              </p>
            </FadeIn>

            <FadeIn delay={0.35} y={20} duration={0.7}>
              <p className="text-[var(--text-muted)] font-light leading-relaxed text-[clamp(0.95rem,1.5vw,1.1rem)] font-space">
                My core interest lies at the intersection of LLM engineering and applied AI — RAG pipelines, fine-tuning, agentic systems, and multi-model orchestration. I've shipped end-to-end projects across ML, computer vision, NLP, and full-stack web, and I read research papers to implement, not just cite.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={20} duration={0.7}>
              <p className="text-[var(--text-muted)] font-light leading-relaxed text-[clamp(0.95rem,1.5vw,1.1rem)] font-space">
                I've completed 3 internships in R&D, AI analytics, and front-end engineering. I hold 14+ IBM AI/ML certifications. I compete in hackathons and build things that solve actual problems.
              </p>
            </FadeIn>

            {/* CGPA Badge */}
            <FadeIn delay={0.65} y={20} duration={0.7}>
              <div className="mt-8 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 w-fit">
                <p className="font-mono text-[var(--accent)] font-bold">CGPA: 7.92 / 10.0</p>
                <p className="text-[var(--text-muted)] text-xs mt-1">APJ Abdul Kalam Technological University</p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Terminal */}
          <FadeIn delay={0.3} y={40} duration={0.7}>
            <div className="h-full flex items-center">
              <TerminalWindow
                lines={terminalLines}
                title="navaneed@portfolio:~"
                delayPerChar={20}
                delayBetweenLines={50}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
