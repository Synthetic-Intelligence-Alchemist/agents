"use client";

import { motion } from "framer-motion";

interface ReggioWebProps {
  nodes: number;
  connections: number;
}

export function ReggioWeb({ nodes, connections }: ReggioWebProps) {
  const dots = Array.from({ length: nodes }, (_, index) => index);

  return (
    <div className="card space-y-4 p-6">
      <header className="space-y-1">
        <h3 className="text-lg font-semibold text-moss-900">Reggio Emilia Web of Discovery</h3>
        <p className="text-sm text-moss-600">A network of ideas showing collaborative threads and documentation.</p>
      </header>
      <div className="relative mx-auto h-64 w-full max-w-lg">
        <svg viewBox="0 0 400 400" className="h-full w-full">
          {Array.from({ length: connections }).map((_, idx) => {
            const from = dots[idx % dots.length];
            const to = dots[(idx * 3 + 1) % dots.length];
            const angleFrom = (from / dots.length) * Math.PI * 2;
            const angleTo = (to / dots.length) * Math.PI * 2;
            const radius = 150;
            const center = 200;
            return (
              <motion.line
                key={`line-${idx}`}
                x1={center + Math.cos(angleFrom) * radius}
                y1={center + Math.sin(angleFrom) * radius}
                x2={center + Math.cos(angleTo) * radius}
                y2={center + Math.sin(angleTo) * radius}
                stroke="#b2c4aa"
                strokeWidth={1.5}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              />
            );
          })}
          {dots.map((dot, idx) => {
            const angle = (idx / dots.length) * Math.PI * 2;
            const radius = 150;
            const center = 200;
            return (
              <motion.circle
                key={`dot-${dot}`}
                cx={center + Math.cos(angle) * radius}
                cy={center + Math.sin(angle) * radius}
                r={8}
                fill="#6f8e51"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.04, type: "spring", stiffness: 120 }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
