import React, { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: ReactNode;
  animation: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'zoom-in';
  delay?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const baseClasses = 'transition-all duration-700 ease-out';
    const delayClass = delay ? `delay-${delay}` : '';
    
    switch (animation) {
      case 'fade-up':
        return `${baseClasses} ${delayClass} opacity-100 transform translate-y-0`;
      case 'fade-in':
        return `${baseClasses} ${delayClass} opacity-100`;
      case 'slide-in-right':
        return `${baseClasses} ${delayClass} opacity-100 transform translate-x-0`;
      case 'slide-in-left':
        return `${baseClasses} ${delayClass} opacity-100 transform translate-x-0`;
      case 'zoom-in':
        return `${baseClasses} ${delayClass} opacity-100 transform scale-100`;
      default:
        return `${baseClasses} ${delayClass} opacity-100`;
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'transform translate-y-10 opacity-0';
      case 'fade-in':
        return 'opacity-0';
      case 'slide-in-right':
        return 'transform translate-x-10 opacity-0';
      case 'slide-in-left':
        return 'transform -translate-x-10 opacity-0';
      case 'zoom-in':
        return 'transform scale-95 opacity-0';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getInitialClass()} ${isVisible ? getAnimationClass() : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;