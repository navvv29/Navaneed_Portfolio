import React, { useState, useEffect } from 'react';

interface TerminalWindowProps {
  lines: string[];
  title?: string;
  delayPerChar?: number;
  delayBetweenLines?: number;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  lines,
  title = 'navaneed@portfolio:~',
  delayPerChar = 30,
  delayBetweenLines = 100,
}) => {
  const [lineCharCounts, setLineCharCounts] = useState<number[]>([]);

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentLine >= lines.length) return;

      const line = lines[currentLine];
      if (currentChar < line.length) {
        currentChar++;
        setLineCharCounts((prev) => {
          const newCounts = [...prev];
          newCounts[currentLine] = currentChar;
          return newCounts;
        });
        timeoutId = setTimeout(typeNextChar, delayPerChar);
      } else {
        currentLine++;
        currentChar = 0;
        if (currentLine < lines.length) {
          timeoutId = setTimeout(typeNextChar, delayBetweenLines);
        }
      }
    };

    timeoutId = setTimeout(typeNextChar, 500);
    return () => clearTimeout(timeoutId);
  }, [lines, delayPerChar, delayBetweenLines]);

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
      {/* Window Chrome */}
      <div className="bg-[#1e1e1e] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
        <div className="flex-1 text-center">
          <p className="font-mono text-xs text-[var(--text-muted)]">{title}</p>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-sm space-y-0">
        {lines.map((line, idx) => {
          const displayedChars = lineCharCounts[idx] || 0;
          const isCurrentLine = lineCharCounts.length === idx;

          return (
            <div key={idx} className="h-6 flex items-center">
              <span>
                {line.startsWith('$') && (
                  <>
                    <span className="text-[var(--accent)]">$ </span>
                    <span className="text-[var(--text-primary)]">
                      {line.slice(2).slice(0, displayedChars)}
                    </span>
                  </>
                )}
                {line.startsWith('>') && (
                  <>
                    <span className="text-[var(--text-muted)]">&gt; </span>
                    <span className="text-[var(--text-primary)]">
                      {line.slice(2).slice(0, displayedChars)}
                    </span>
                  </>
                )}
                {!line.startsWith('$') && !line.startsWith('>') && (
                  <span className="text-[var(--text-primary)]">
                    {line.slice(0, displayedChars)}
                  </span>
                )}
              </span>
              {isCurrentLine && displayedChars < line.length && (
                <span className="animate-blink">|</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
