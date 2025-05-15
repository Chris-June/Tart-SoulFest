import React, { useState, useEffect, CSSProperties } from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  duration?: number; // Duration for the animation in seconds
  colors?: string[]; // Custom gradient colors (array of color strings)
  angle?: number; // Angle for the gradient in degrees
  pauseOnHover?: boolean; // If true, pause the animation on hover
  disableAnimation?: boolean; // Manually disable animation if needed
  delay?: number; // Animation delay in seconds
  ease?: string | number[]; // Custom easing function
}

const defaultVariants: Record<string, { colors: string[]; angle: number }> = {
  // Default variants (kept for backward compatibility)
  primary: {
    colors: ['#F5DEB3', '#D2B48C', '#B8860B', '#F5DEB3'],
    angle: 45
  },
  secondary: {
    colors: ['#D4A76A', '#B87333', '#8B4513', '#D4A76A'],
    angle: -30
  },
  accent: {
    colors: ['#FFE4B5', '#FFD39B', '#CD853F', '#FFE4B5'],
    angle: 90
  },
  // Butter tart themed variants
  crust: {
    colors: ['#F5DEB3', '#D2B48C', '#B8860B', '#F5DEB3'],
    angle: 45
  },
  caramel: {
    colors: ['#D4A76A', '#B87333', '#8B4513', '#D4A76A'],
    angle: -30
  },
  glaze: {
    colors: ['#FFE4B5', '#FFD39B', '#CD853F', '#FFE4B5'],
    angle: 90
  },
  brownSugar: {
    colors: ['#D2B48C', '#A0522D', '#8B4513', '#D2B48C'],
    angle: 135
  },
  maple: {
    colors: ['#DAA520', '#B8860B', '#8B4513', '#DAA520'],
    angle: -60
  },
  cinnamon: {
    colors: ['#D2691E', '#A0522D', '#8B4513', '#D2691E'],
    angle: 0
  },
  vanilla: {
    colors: ['#F5F5DC', '#F5DEB3', '#FFE4B5', '#F5F5DC'],
    angle: 180
  }
};

const buildGradient = (colors: string[], angle: number) => {
  return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
};

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  variant = 'primary',
  duration = 30,
  colors,
  angle,
  pauseOnHover = true,
  disableAnimation = false,
  delay = 0,
  ease = 'linear',
  ...props
}) => {
  // Check if the user prefers reduced motion
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const handler = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // State for hover if pauseOnHover is enabled
  const [isHovered, setIsHovered] = useState(false);

  // Determine the gradient colors and angle to use
  const effectiveColors = colors || defaultVariants[variant].colors;
  const effectiveAngle = angle ?? defaultVariants[variant].angle;

  // Build the gradient background style
  const gradientBg = buildGradient(effectiveColors, effectiveAngle);
  
  // Base styles for the wrapper
  const wrapperStyle: CSSProperties = {
    display: 'inline-block',
    position: 'relative',
    background: gradientBg,
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  // Determine if we should animate (disable animation if user prefers reduced motion, 
  // if manually disabled, or if paused on hover)
  const shouldAnimate = !disableAnimation && !reduceMotion && !(pauseOnHover && isHovered);

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <motion.span
        className={className}
        style={{
          ...wrapperStyle,
          position: 'relative',
          zIndex: 1,
          ...(shouldAnimate ? {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            transition: {
              duration,
              ease,
              delay,
              repeat: Infinity,
            }
          } : {})
        } as any}
        onHoverStart={() => pauseOnHover && setIsHovered(true)}
        onHoverEnd={() => pauseOnHover && setIsHovered(false)}
        {...props}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default GradientText;