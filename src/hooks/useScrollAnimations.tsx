'use client';

import { useEffect, useRef, useState } from 'react';

// Hook for scroll-triggered animations
export function useScrollAnimation(threshold: number = 0.1) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          element.classList.add('animate');
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, isVisible]);

  return { elementRef, isVisible };
}

// Hook for number counter animation
export function useCounter(
  target: number,
  duration: number = 2000,
  startOnVisible: boolean = true
) {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(!startOnVisible);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnVisible) {
      setIsStarted(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStarted) {
          setIsStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [startOnVisible, isStarted]);

  useEffect(() => {
    if (!isStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(target * easeOutCubic);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, isStarted]);

  return { count, elementRef, isStarted };
}

// Hook for staggered animations
export function useStaggeredAnimation(itemCount: number, delay: number = 150) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animation
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setAnimatedItems((prev) => new Set(prev).add(i));

              const item = container.children[i] as HTMLElement;
              if (item) {
                item.classList.add('animate');
              }
            }, i * delay);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [itemCount, delay]);

  return { containerRef, animatedItems };
}

// Component for animated statistics
interface AnimatedStatProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
}

export function AnimatedStat({ value, label, suffix = '', className = '' }: AnimatedStatProps) {
  const { count, elementRef } = useCounter(value);

  return (
    <div ref={elementRef} className={`text-center ${className}`}>
      <div className="text-3xl font-bold text-neutral-darkest mb-1 counter">
        {count}
        {suffix}
      </div>
      <div className="text-xs text-neutral-gray">{label}</div>
    </div>
  );
}

// Component for staggered card animations
interface StaggeredCardsProps {
  children: React.ReactNode[];
  delay?: number;
  className?: string;
}

export function StaggeredCards({ children, delay = 150, className = '' }: StaggeredCardsProps) {
  const { containerRef } = useStaggeredAnimation(children.length, delay);

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div key={index} className="stagger-item">
          {child}
        </div>
      ))}
    </div>
  );
}
