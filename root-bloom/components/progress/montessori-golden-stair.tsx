"use client";

import { motion } from "framer-motion";

interface MontessoriGoldenStairProps {
  completion: number; // 0-1
}

export function MontessoriGoldenStair({ completion }: MontessoriGoldenStairProps) {
  const steps = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="card space-y-4 p-6">
      <header className="space-y-1">
        <h3 className="text-lg font-semibold text-moss-900">Montessori Golden Bead Stair</h3>
        <p className="text-sm text-moss-600">A visual homage to the decimal system building blocks.</p>
      </header>
      <div className="flex items-end gap-2">
        {steps.map((step) => (
          <motion.div
            key={step}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: Math.min(completion * 10, step) >= step ? 1 : completion }}
            transition={{ duration: 0.4, delay: step * 0.03 }}
            className="flex-1 origin-bottom rounded-t-full bg-gradient-to-tr from-amber-300 via-amber-200 to-yellow-100 p-2"
            style={{ minHeight: `${step * 12}px` }}
          >
            <span className="sr-only">Step {step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
