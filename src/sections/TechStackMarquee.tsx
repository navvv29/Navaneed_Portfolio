import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Python', icon: '🐍' },
  { name: 'PyTorch', icon: '⚙️' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Hugging Face', icon: '🤗' },
  { name: 'LangChain', icon: '🔗' },
  { name: 'scikit-learn', icon: '📊' },
  { name: 'YOLOv8', icon: '🎯' },
  { name: 'OpenCV', icon: '📷' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Next.js', icon: '▲' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Prisma', icon: '🔮' },
  { name: 'React', icon: '⚛️' },
  { name: 'RAG Pipelines', icon: '🔍' },
  { name: 'Fine-Tuning', icon: '🎚️' },
  { name: 'Prompt Eng.', icon: '💬' },
  { name: 'Git', icon: '🌳' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Vercel', icon: '▪️' },
  { name: 'Jupyter', icon: '📓' },
];

export const TechStackMarquee: React.FC = () => {
  // Repeat the list 3 times for seamless looping
  const extendedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="bg-[var(--bg)] py-20 pb-16 overflow-hidden border-b border-[var(--border)]">
      {/* Section Label */}
      <div className="px-6 md:px-10 mb-8">
        <p className="terminal-label">// tech stack</p>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden flex w-full">
        <motion.div
          className="flex gap-4 min-w-max will-change-transform"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            duration: 80,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }}
        >
          {extendedTechs.map((tech, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 flex items-center gap-2 hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-all duration-200"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="font-mono text-sm text-[var(--text-muted)] whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
