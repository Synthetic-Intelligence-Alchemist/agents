import { notFound } from "next/navigation";
import Link from "next/link";
import { getLessonById } from "@/lib/learning-paths";
import { AIActivityModal } from "@/components/modals/ai-activity-modal";

interface LessonPageProps {
  params: { lesson: string };
}

export default function LessonPage({ params }: LessonPageProps) {
  const lesson = getLessonById(params.lesson);

  if (!lesson) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-16">
      <Link href={`/paths/${lesson.path}`} className="text-sm text-moss-600">
        ← Back to path
      </Link>
      <article className="card space-y-6 p-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-moss-500">{lesson.path}</p>
          <h1 className="text-3xl font-semibold text-moss-900">{lesson.title}</h1>
          <div className="flex flex-wrap gap-3 text-sm text-moss-600">
            <span className="rounded-full bg-moss-100 px-3 py-1">Age {lesson.ageRange}</span>
            <span className="rounded-full bg-bloom-100 px-3 py-1">Duration {lesson.duration}</span>
          </div>
        </header>
        <p className="text-lg text-moss-700">{lesson.summary}</p>
        <section className="rounded-3xl bg-moss-50/80 p-6 text-sm text-moss-700">
          <h2 className="text-xl font-semibold text-moss-900">Lesson Flow</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Set up the environment with calm music and natural materials.</li>
            <li>Invite your child with a warm gesture and observe their interest.</li>
            <li>Demonstrate the activity slowly and silently, focusing on intentional movement.</li>
            <li>Offer the turn and step back, honoring concentration.</li>
            <li>Close with reflection, gratitude, or documentation in your learning journal.</li>
          </ol>
        </section>
        <AIActivityModal lesson={lesson} />
      </article>
    </main>
  );
}
