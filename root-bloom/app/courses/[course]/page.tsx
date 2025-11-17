import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCourses } from "@/lib/learning-paths";
import { LessonList } from "@/components/lesson-list";

interface CoursePageProps {
  params: { course: string };
}

export default function CoursePage({ params }: CoursePageProps) {
  const courses = getAllCourses();
  const course = courses.find((item) => item.id === params.course);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-16">
      <Link href="/courses" className="text-sm text-moss-600">
        ← Back to courses
      </Link>
      <article className="card space-y-6 p-8">
        <header className="space-y-3">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-moss-500">
            <span>{course.path}</span>
            <span>{course.tier}</span>
          </div>
          <h1 className="text-3xl font-semibold text-moss-900">{course.title}</h1>
          <p className="text-moss-700">{course.description}</p>
        </header>

        <LessonList lessons={course.lessons} />
      </article>
    </main>
  );
}
