import { motion } from "framer-motion";

interface WaldorfOakTreeProps {
  season: "spring" | "summer" | "autumn" | "winter";
  growth: number; // 0-1
}

const seasonalColors = {
  spring: "from-green-200 via-lime-200 to-emerald-300",
  summer: "from-emerald-300 via-green-300 to-teal-300",
  autumn: "from-amber-300 via-orange-300 to-rose-300",
  winter: "from-slate-200 via-blue-200 to-indigo-200"
};

export function WaldorfOakTree({ season, growth }: WaldorfOakTreeProps) {
  return (
    <div className="card space-y-4 p-6">
      <header className="space-y-1">
        <h3 className="text-lg font-semibold text-moss-900">Waldorf Oak Tree Growth</h3>
        <p className="text-sm text-moss-600">A watercolor-inspired tree that shifts with seasonal rhythms.</p>
      </header>
      <div className="relative mx-auto h-56 w-56">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: Math.sin(growth * Math.PI) * 3 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-8 rounded-full bg-gradient-to-tr ${seasonalColors[season]} opacity-80 blur-xl`}
        />
        <motion.div
          className="absolute inset-0"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: growth }}
          transition={{ duration: 0.8 }}
        >
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <path
              d="M100 180 C 90 150, 80 130, 85 110 C 60 90, 65 60, 95 55 C 100 45, 120 45, 125 55 C 155 60, 150 90, 125 110 C 130 130, 120 150, 110 180"
              stroke="#5b4e3d"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
