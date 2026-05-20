import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface Experience {
  id: number;
  company: string;
  role: string;
  dateRange: string;
  location: string;
  type: 'Remote' | 'Onsite';
  bullets: string[];
  dotColor: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'IBM SkillsBuild – AICTE, Edunet Foundation',
    role: 'Front End Web Development Intern',
    dateRange: 'Aug–Sep 2025',
    location: 'Remote',
    type: 'Remote',
    dotColor: 'var(--accent-2)',
    bullets: [
      'Built responsive web applications over 6 weeks using HTML5, CSS3, and JavaScript.',
      'Integrated IBM Cloud APIs to replace all static content with live data.',
    ],
  },
  {
    id: 2,
    company: 'AICTE – Shell India Markets, Edunet Foundation',
    role: 'AI and Data Analytics Intern — Skills4Future',
    dateRange: 'Jul–Aug 2025',
    location: 'Remote',
    type: 'Remote',
    dotColor: 'var(--accent)',
    bullets: [
      'Built and compared ML models on NASA MODIS satellite data (50,000+ rows) to classify forest fire types.',
      'Ensemble model ranked #1 in F1-score among all candidate models.',
    ],
  },
  {
    id: 3,
    company: 'Envirotab Solutions',
    role: 'Research and Development Intern',
    dateRange: 'Jun 2025',
    location: 'Remote',
    type: 'Remote',
    dotColor: 'var(--accent-3)',
    bullets: [
      'Contributed to 2 R&D prototypes by reviewing technical literature, implementing findings into experiments, and producing structured reports for senior researchers.',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      data-section="experience"
      className="bg-[var(--bg)] border-b border-[var(--border)] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <p className="terminal-label mb-6">// experience.ts</p>
        </FadeIn>

        <FadeIn delay={0.1} y={40} duration={0.7}>
          <h2 className="gradient-heading font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-4">
            Experience
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20} duration={0.7}>
          <p className="text-[var(--text-muted)] mb-16 font-space">
            Where I've worked and what I've shipped.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[var(--border)]"
            style={{ width: '2px' }}
          />

          {/* Timeline Entries */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <FadeIn
                key={exp.id}
                delay={idx * 0.15}
                x={-20}
                y={0}
                duration={0.7}
              >
                <div className="relative ml-10 md:ml-16">
                  {/* Dot */}
                  <div
                    className="absolute -left-[28px] md:-left-[calc(2rem+6px)] top-2 w-3 h-3 rounded-full"
                    style={{ backgroundColor: exp.dotColor }}
                  />

                  <div className="space-y-2">
                    {/* Header Row */}
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="font-bold text-lg text-[var(--white)] font-space">
                        {exp.company}
                      </h3>
                      <span className="font-mono text-sm text-[var(--text-muted)]">
                        {exp.dateRange}
                      </span>
                    </div>

                    {/* Role Label */}
                    <p className="terminal-label text-[var(--accent)]">{exp.role}</p>

                    {/* Type Badge */}
                    <div className="flex items-center gap-2">
                      <span className={`rounded-sm px-2 py-0.5 text-xs font-mono ${
                        exp.type === 'Remote'
                          ? 'bg-[rgba(129,140,248,0.1)] text-[var(--accent-2)]'
                          : 'bg-[rgba(245,158,11,0.1)] text-[var(--accent-3)]'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Bullets */}
                    <div className="space-y-2 mt-3">
                      {exp.bullets.map((bullet, i) => (
                        <p
                          key={i}
                          className="text-[var(--text-muted)] text-sm leading-relaxed font-space"
                        >
                          <span className="text-[var(--accent)] mr-2">▸</span>
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
