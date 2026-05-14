import React from 'react';
import { motion } from 'framer-motion';

interface HireButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const HireButton: React.FC<HireButtonProps> = ({
  onClick,
  children = "Let's Work Together",
}) => {
  return (
    <motion.a
      href="mailto:navaneedp29@gmail.com"
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 32px rgba(45, 212, 191, 0.5)'
      }}
      whileTap={{ scale: 0.98 }}
      className="inline-block relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-white font-semibold text-sm md:text-base font-space uppercase tracking-wider text-center cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #0D9488 0%, #6366F1 100%)',
        boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)',
      }}
    >
      {children}
    </motion.a>
  );
};
