import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Course } from "@/data/curriculum";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.article whileHover={{ y: -6 }} className="card flex h-full flex-col overflow-hidden">
      <div className="relative h-48 w-full bg-moss-100">
        <Image
          src={`https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80&sat=-100&blend=fff5f7&blend-mode=screen`}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-moss-500">
          <span>{course.path}</span>
          <span>{course.tier}</span>
        </div>
        <h3 className="text-xl font-semibold text-moss-900">{course.title}</h3>
        <p className="text-sm text-moss-700">{course.description}</p>
        <div className="mt-auto flex items-center justify-between text-sm text-moss-600">
          <span>Age {course.ageRange}</span>
          <Link className="font-semibold text-bloom-600" href={`/courses/${course.id}`}>
            View Course
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
