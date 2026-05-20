import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface Project {
  id: number;
  name: string;
  year: number;
  type: 'Hackathon' | 'Personal' | 'Client' | 'Academic';
  tech: string[];
  description: string[];
  live?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'AppForge AI',
    year: 2026,
    type: 'Personal',
    tech: ['Node.js', 'TypeScript', 'Express.js', 'Groq', 'OpenAI', 'Anthropic', 'Zod'],
    description: [
      'Orchestrated a multi-LLM pipeline (Groq, OpenAI, Anthropic) with schema-constrained generation to automate conversion of natural language into structurally correct application code.',
      'Implemented a self-correction engine using contextual feedback loops to iteratively repair structural hallucinations across model outputs.',
    ],
    live: 'appforge-ai-hvco.onrender.com',
    github: 'github.com/navvv29/AppForge-AI',
  },
  {
    id: 2,
    name: 'CivicResolve AI',
    year: 2026,
    type: 'Hackathon',
    tech: ['Python', 'LangChain', 'FastAPI', 'NLP', 'RAG', 'Transformers'],
    description: [
      'Built for Digital University Kerala Hackathon 2026 — auto-routed 100% of test grievance submissions to correct government departments via NLP classification.',
      'Cut grievance categorisation time from ~5 minutes (manual) to under 3 seconds using RAG pipelines and transformer-based text classification.',
    ],
    github: 'github.com/navvv29/Civic_Resolve',
  },
  {
    id: 3,
    name: 'CompIntel',
    year: 2026,
    type: 'Personal',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    description: [
      'Applied intelligent data-matching algorithms to normalise fragmented global compensation records into high-fidelity benchmarks, inspired by Levels.fyi.',
      'Engineered a processing pipeline with algorithmic level-matching to anchor salary insights to standardised engineering tiers.',
    ],
    live: 'compensation-intelligence.onrender.com',
    github: 'github.com/navvv29/compensation-intelligence',
  },
  {
    id: 4,
    name: 'LumiCity AI',
    year: 2026,
    type: 'Academic',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'Satellite Data'],
    description: [
      'Designed an AI street-light dimming system using real-time pedestrian detection via YOLOv8; demonstrated up to 35% simulated energy savings vs. always-on baseline.',
      'Integrated OpenCV motion detection with satellite data fusion, achieving sub-second dynamic light intensity adjustment.',
    ],
  },
  {
    id: 5,
    name: 'SyncEdu',
    year: 2026,
    type: 'Personal',
    tech: ['Python', 'Agentic AI', 'LLMs', 'NLP', 'Multi-Agent Orchestration'],
    description: [
      'Built an AI-enabled campus ERP unifying academic, administrative, and operational workflows using multi-agent orchestration and LLM pipelines.',
    ],
    live: 'sync-edu-five.vercel.app',
  },
  {
    id: 6,
    name: 'FishKart',
    year: 2025,
    type: 'Hackathon',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'ML'],
    description: [
      'Selected at Cepheus Hackathon (Atria University). Built a fish marketplace with an ML freshness-classification model achieving 85%+ accuracy on test set.',
      'Implemented geospatial fishing-zone mapping and real-time seller filtering.',
    ],
    github: 'github.com/navvv29/fishkart',
  },
];

export const ProjectsSection: React.FC = () => {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return 'bg-[rgba(45,212,191,0.1)] text-[var(--accent)]';
      case 'Personal':
        return 'bg-[rgba(129,140,248,0.1)] text-[var(--accent-2)]';
      case 'Client':
        return 'bg-[rgba(245,158,11,0.1)] text-[var(--accent-3)]';
      case 'Academic':
        return 'bg-[rgba(236,72,153,0.1)] text-[var(--accent-3)]'; // Pinkish hue for Academic
      default:
        return 'bg-[rgba(129,140,248,0.1)] text-[var(--accent-2)]';
    }
  };

  return (
    <section
      data-section="projects"
      className="bg-[var(--bg)] border-b border-[var(--border)] px-5 sm:px-8 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <p className="terminal-label mb-6">// projects</p>
        </FadeIn>

        <FadeIn delay={0.1} y={40} duration={0.7}>
          <h2 className="gradient-heading font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-4">
            What I've Built
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20} duration={0.7}>
          <p className="text-[var(--text-muted)] mb-16 font-space">
            End-to-end AI and engineering projects — from hackathons to production.
          </p>
        </FadeIn>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.1} y={20} duration={0.7}>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 md:p-8 hover:border-[var(--accent)] hover:shadow-[0_0_30px_rgba(45,212,191,0.06)] transition-all duration-300">
                {/* Top Row */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl font-bold text-[var(--border)] font-mono">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  <div className="bg-[var(--surface)] border border-[var(--border)] rounded-full px-3 py-1 text-xs text-[var(--text-muted)] font-mono">
                    {project.year}
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="font-bold text-[clamp(1.3rem,2.5vw,1.8rem)] text-[var(--white)] mb-3 font-space">
                  {project.name}
                </h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[rgba(129,140,248,0.1)] border border-[rgba(129,140,248,0.2)] text-[var(--accent-2)] rounded-full px-3 py-1 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-2 mb-6">
                  {project.description.map((bullet, i) => (
                    <p
                      key={i}
                      className="text-[var(--text-muted)] text-sm leading-relaxed font-space"
                    >
                      <span className="text-[var(--accent)] mr-2">▸</span>
                      {bullet}
                    </p>
                  ))}
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center pt-4 border-t border-[var(--border)]">
                  <span className={`rounded-sm px-2 py-1 text-xs font-mono flex-shrink-0 ${getTypeStyles(project.type)}`}>
                    {project.type}
                  </span>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                        title="View Source Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={`https://${project.live}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                        title="View Live Site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
