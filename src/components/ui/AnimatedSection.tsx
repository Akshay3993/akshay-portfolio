
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-right' | 'fade-in-left' | 'scale-in';
  delay?: number;
  once?: boolean;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0 transition-all duration-700',
        isVisible && `animate-${animation}`,
        isVisible && delay > 0 && `animate-delay-${delay}`,
        className
      )}
      style={{
        animationFillMode: 'forwards',
        animationDelay: delay > 800 ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
