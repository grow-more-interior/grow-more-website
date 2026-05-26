"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: string;
  animationNum: number;
  timelineRef: React.RefObject<Element | null>;
  customVariants: any;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
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
  // Use property indexing with any to avoid excessively deep type checking in framer-motion v12
  const Component = (motion as any)[as] || motion.div;
  const show = useInView(timelineRef, { once: true, amount: 0.1 });

  return (
    <Component
      variants={customVariants}
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
