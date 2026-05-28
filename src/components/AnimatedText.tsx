import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Map index to a normalized scroll segment
  const start = index / total;
  const end = (index + 1) / total;

  // Use transform to animate opacity from 0.2 to 1 based on scroll progress
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to preserve layout/width */}
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      {/* Animated character aligned absolutely over placeholder */}
      <motion.span style={{ opacity }} className="absolute left-0 top-0 select-none">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll progress of the paragraph
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  
  // Pre-calculate indexes for correct global character indexing
  let charIndexCounter = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} style={style} className={`flex flex-wrap justify-center content-center ${className}`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char) => {
              const globalIndex = charIndexCounter++;
              return (
                <Character
                  key={globalIndex}
                  char={char}
                  index={globalIndex}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
            {/* Account for space between words */}
            {wordIdx < words.length - 1 && (
              <Character
                char=" "
                index={charIndexCounter++}
                total={totalChars}
                progress={scrollYProgress}
              />
            )}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
