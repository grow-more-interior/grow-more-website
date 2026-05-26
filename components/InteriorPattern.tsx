"use client";

import { Sofa, Lamp, Armchair, Sprout, Home, Table } from "lucide-react";
import { motion } from "framer-motion";

const InteriorPattern = () => {
  const icons = [
    { Icon: Sofa, top: "15%", left: "5%", rotate: -15, size: 180 },
    { Icon: Lamp, top: "45%", left: "12%", rotate: 10, size: 140 },
    { Icon: Armchair, top: "75%", left: "8%", rotate: -5, size: 160 },
    { Icon: Sprout, top: "25%", right: "10%", rotate: 20, size: 120 },
    { Icon: Table, top: "55%", right: "15%", rotate: -10, size: 200 },
    { Icon: Home, top: "85%", right: "5%", rotate: 15, size: 150 },
    // More scattered pieces
    { Icon: Sofa, top: "10%", right: "35%", rotate: 30, size: 100 },
    { Icon: Armchair, top: "40%", left: "40%", rotate: -45, size: 120 },
    { Icon: Lamp, top: "70%", right: "45%", rotate: 15, size: 90 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05]">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="absolute text-foreground"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            rotate: `${item.rotate}deg`,
          }}
        >
          <item.Icon size={item.size} strokeWidth={0.5} />
        </motion.div>
      ))}
    </div>
  );
};

export default InteriorPattern;
