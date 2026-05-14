import React, { useState } from 'react';
import { Trophy, Award } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface Award {
  id: number;
  name: string;
  detail: string;
  year: number;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
}

const awards: Award[] = [
  {
    id: 1,
    name: "Astra'26 Project Expo – SIMAT",
    detail: '3rd Prize',
    year: 2026,
  },
  {
    id: 2,
    name: 'Python Quiz Challenge',
    detail: '1st Prize',
    year: 2025,
  },
  {
    id: 3,
    name: 'Cepheus Hackathon – Atria University',
    detail: 'Selected Project',
    year: 2025,
  },
];

const certifications: Certification[] = [
  { id: 1, name: 'Deep Learning with Keras & TensorFlow', issuer: 'IBM' },
  { id: 2, name: 'Deep Learning with PyTorch', issuer: 'IBM' },
  { id: 3, name: 'RAG & LangChain Fundamentals', issuer: 'IBM' },
  { id: 4, name: 'Generative AI Architecture', issuer: 'IBM' },
  { id: 5, name: 'Advanced Fine-Tuning for LLMs', issuer: 'IBM' },
  { id: 6, name: 'Language Modeling with Transformers', issuer: 'IBM' },
  { id: 7, name: 'Engineering Fine-Tuning of LLMs', issuer: 'IBM' },
  { id: 8, name: 'Gen AI Foundational NLP', issuer: 'IBM' },
  { id: 9, name: 'Neural Networks with PyTorch', issuer: 'IBM' },
  { id: 10, name: 'Deep Learning with Keras', issuer: 'IBM' },
  { id: 11, name: 'Cloud Envisioning Essentials', issuer: 'IBM' },
  { id: 12, name: 'GenAI Data Analytics', issuer: 'Tata Forage' },
  { id: 13, name: 'Cyber Security Fundamentals', issuer: 'Deloitte Forage' },
  { id: 14, name: 'Technology Essentials', issuer: 'Deloitte Forage' },
  { id: 15, name: 'Python & Web Development', issuer: 'L&T EduTech' },
  { id: 16, name: 'Joy of Computing with Python', issuer: 'NPTEL' },
  { id: 17, name: 'English for Competitive Exams', issuer: 'NPTEL' },
];

export const AchievementsSection: React.FC = () => {
  const [expandCerts, setExpandCerts] = useState(false);

  return (
    <section
      data-section="achievements"
      className="bg-[var(--surface)] border-b border-[var(--border)] px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <p className="terminal-label mb-6">// achievements</p>
        </FadeIn>

        {/* Awards and Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <FadeIn delay={0.1} y={40} duration={0.7}>
              <h3 className="font-bold text-2xl text-[var(--white)] mb-8 font-space">
                Awards
              </h3>
            </FadeIn>

            <div className="space-y-0">
              {awards.map((award, idx) => (
                <FadeIn key={award.id} delay={0.2 + idx * 0.1} y={20} duration={0.7}>
                  <div className="flex gap-4 py-5 border-b border-[var(--border)]">
                    {/* Icon Box */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[rgba(245,158,11,0.1)] flex items-center justify-center">
                      <Trophy size={24} className="text-[var(--accent-3)]" />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="font-semibold text-[var(--white)] text-base">
                        {award.name}
                      </p>
                      <p className="text-[var(--text-muted)] text-sm mt-1">
                        {award.detail}
                      </p>
                      <span className="inline-block text-xs font-mono text-[var(--text-muted)] mt-2">
                        {award.year}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <FadeIn delay={0.1} y={40} duration={0.7}>
              <h3 className="font-bold text-2xl text-[var(--white)] mb-4 font-space">
                Certifications
              </h3>
            </FadeIn>

            <FadeIn delay={0.15} y={20} duration={0.7}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-[var(--accent-2)] bg-[rgba(129,140,248,0.1)] border border-[rgba(129,140,248,0.2)] mb-6">
                14+ Certifications
              </span>
            </FadeIn>

            <div className={`border border-[var(--border)] rounded-xl overflow-hidden ${expandCerts ? '' : 'max-h-64'}`}>
              <div className={`divide-y divide-[var(--border)] ${expandCerts ? '' : 'overflow-y-auto max-h-64'}`}>
                {certifications.map((cert, idx) => (
                  <FadeIn
                    key={cert.id}
                    delay={0.2 + (idx % 5) * 0.05}
                    y={10}
                    duration={0.5}
                  >
                    <div className="flex gap-3 py-3 px-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                      <Award size={16} className="text-[var(--accent-2)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[var(--text-muted)] text-sm">{cert.name}</p>
                        <p className="text-xs text-[var(--text-muted)] opacity-60 font-mono">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <button
              onClick={() => setExpandCerts(!expandCerts)}
              className="mt-3 text-xs text-[var(--accent)] hover:text-[var(--accent)] transition-colors font-mono"
            >
              {expandCerts ? '▲ View Less' : '▼ View All'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
