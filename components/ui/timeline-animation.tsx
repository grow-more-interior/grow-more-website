"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: string;
  animationNum: number;
  timelineRef: React.RefObject<Element | null>;
  customVariants: unknown;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

export const TimelineContent = ({
  as = "div",
  animationNum,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps) => {
  const motionComponents = motion as unknown as Record<string, typeof motion.div>;
  const Component = motionComponents[as] || motion.div;
  const show = useInView(timelineRef, { once: true, amount: 0.1 });

  return (
    <Component
      variants={customVariants as Parameters<typeof motion.div>[0]["variants"]}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      custom={animationNum}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
};
