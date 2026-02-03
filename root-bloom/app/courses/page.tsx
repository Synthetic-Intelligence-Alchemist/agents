import { getAllCourses } from "@/lib/learning-paths";
import { CourseCard } from "@/components/course-card";

const filters = {
  ages: ["3-4", "4-6", "5-7", "6-9"],
  tiers: ["free", "starter", "educator"],
  paths: ["montessori", "waldorf", "reggio"]
};

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold text-moss-900">Course Library</h1>
        <p className="text-moss-700">
          Browse Montessori, Waldorf, and Reggio Emilia offerings. Filters will be connected to Supabase soon for
          personalized recommendations.
        </p>
      </header>

      <section className="card flex flex-wrap gap-4 p-6 text-sm text-moss-700">
        <span className="font-semibold text-moss-900">Filters</span>
        <div className="flex flex-wrap gap-2">
          {filters.ages.map((age) => (
            <span key={age} className="rounded-full bg-moss-100 px-3 py-1">
              Age {age}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.paths.map((path) => (
            <span key={path} className="rounded-full bg-bloom-100 px-3 py-1 capitalize">
              {path}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.tiers.map((tier) => (
            <span key={tier} className="rounded-full border border-moss-200 px-3 py-1 capitalize">
              {tier}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}
