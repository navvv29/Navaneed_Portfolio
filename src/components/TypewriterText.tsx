import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  speed = 50,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let index = 0;

    const startTyping = () => {
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => clearTimeout(timeoutId);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className={`inline-block ml-1 ${isComplete ? 'animate-blink' : ''}`}>|</span>
    </span>
  );
};

// Add blink animation
const style = document.createElement('style');
style.textContent = `
  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  .animate-blink {
    animation: blink 1s infinite;
  }
`;
document.head.appendChild(style);
