import React from 'react';
import { Code2, Brain, Cpu, Server } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Languages & Web',
    icon: <Code2 size={24} />,
    skills: [
      'Python',
      'Java',
      'C',
      'C++',
      'R',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'SQL',
      'ReactJS',
    ],
  },
  {
    id: 2,
    title: 'AI / ML & DL',
    icon: <Brain size={24} />,
    skills: [
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Scikit-learn',
      'LangChain',
      'Hugging Face',
      'Transformers',
      'PEFT',
      'Datasets',
      'Evaluate',
      'Accelerate',
      'RAG',
      'YOLOv8',
      'OpenCV',
    ],
  },
  {
    id: 3,
    title: 'LLM Expertise',
    icon: <Cpu size={24} />,
    skills: [
      'Fine-Tuning',
      'Quantization',
      'RAG Pipelines',
      'Prompt Engineering',
      'LLM Evaluation',
      'Multi-Agent Orchestration',
      'Agentic AI',
    ],
  },
  {
    id: 4,
    title: 'Backend & Tools',
    icon: <Server size={24} />,
    skills: [
      'Node.js',
      'Express.js',
      'Next.js',
      'Prisma ORM',
      'PostgreSQL',
      'FastAPI',
      'Zod',
      'Git',
      'GitHub',
      'Jupyter',
      'VS Code',
      'Google Cloud',
      'Vercel',
      'Render',
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      data-section="skills"
      className="bg-[var(--bg)] border-b border-[var(--border)] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <p className="terminal-label mb-6">// skills.json</p>
        </FadeIn>

        <FadeIn delay={0.1} y={40} duration={0.7}>
          <h2 className="gradient-heading font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-4">
            Technical Skills
          </h2>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, idx) => (
            <FadeIn
              key={category.id}
              delay={idx * 0.1}
              y={20}
              duration={0.7}
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent-2)] transition-colors duration-200">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[var(--accent)] flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-[var(--text-muted)] font-space">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-3 py-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border)] transition-all duration-200 font-space"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
