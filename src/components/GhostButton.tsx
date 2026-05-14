import React from 'react';
import { motion } from 'framer-motion';

interface GhostButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const GhostButton: React.FC<GhostButtonProps> = ({
  onClick,
  children = 'View Projects',
  icon,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        backgroundColor: 'rgba(45, 212, 191, 0.05)',
        borderColor: 'var(--accent)',
        color: 'var(--text-primary)',
      }}
      className="px-6 py-3 text-sm font-medium rounded-full border border-[var(--border)] text-[var(--text-muted)] flex items-center gap-2"
      transition={{ duration: 0.2 }}
    >
      {children}
      {icon}
    </motion.button>
  );
};
