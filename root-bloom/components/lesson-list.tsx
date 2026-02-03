"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LessonSummary } from "@/data/curriculum";

interface LessonListProps {
  lessons: LessonSummary[];
}

export function LessonList({ lessons }: LessonListProps) {
  return (
    <div className="space-y-4">
      {lessons.map((lesson, index) => (
        <motion.article
          key={lesson.id}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className="card flex flex-col gap-3 p-5"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-moss-900">{lesson.title}</h3>
            <span className="rounded-full bg-moss-100 px-3 py-1 text-xs font-medium text-moss-700">
              Age {lesson.ageRange}
            </span>
          </div>
          <p className="text-sm text-moss-700">{lesson.summary}</p>
          <div className="flex items-center justify-between text-sm text-moss-600">
            <span>{lesson.duration}</span>
            <Link className="font-semibold text-bloom-600" href={`/lessons/${lesson.id}`}>
              Start Lesson →
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
