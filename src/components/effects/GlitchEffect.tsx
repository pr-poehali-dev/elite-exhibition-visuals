
import { useEffect, useRef, useState } from 'react';

interface GlitchEffectProps {
  text: string;
}

export const GlitchEffect = ({ text }: GlitchEffectProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      
      // Сбрасываем glitch-эффект через 700ms
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setIsGlitching(false);
      }, 700);
    };
    
    // Начальный glitch эффект при загрузке
    triggerGlitch();
    
    // Запускаем glitch-эффект с рандомным интервалом
    const intervalId = setInterval(() => {
      // Случайный интервал между 3 и 8 секундами
      if (Math.random() > 0.7) {
        triggerGlitch();
      }
    }, 2000);
    
    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <span className="relative inline-block">
      <span className={`inline-block ${isGlitching ? 'glitch-text' : ''}`}>
        {text}
      </span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 w-full glitch-text glitch-text-r" aria-hidden="true">
            {text}
          </span>
          <span className="absolute top-0 left-0 w-full glitch-text glitch-text-g" aria-hidden="true">
            {text}
          </span>
          <span className="absolute top-0 left-0 w-full glitch-text glitch-text-b" aria-hidden="true">
            {text}
          </span>
        </>
      )}
    </span>
  );
};
