import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

/**
 * Reveal — a lightweight, accessible scroll-reveal wrapper.
 * - Animates once when the element enters the viewport.
 * - Automatically disables motion for users with prefers-reduced-motion.
 * - Use `stagger` on a parent + `Reveal` children (via RevealGroup) for
 *   staggered card grids.
 */

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Distance in px for the travel direction. */
  distance?: number;
  as?: 'div' | 'section' | 'span' | 'li';
};

const offsets: Record<NonNullable<RevealProps['from']>, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  from = 'up',
  distance,
  as = 'div',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = offsets[from];
  const scaled = distance !== undefined ? { x: offset.x ? distance : undefined, y: offset.y ? distance : undefined } : offset;

  const MotionTag = motion[as];

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...scaled }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

/**
 * RevealGroup — staggers its direct children in on scroll.
 * Children should be plain elements; stagger is applied via the parent
 * variants and each child inheriting `item` variants.
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const RevealGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}> = ({ children, className, stagger = 0.08 }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const RevealItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
);
