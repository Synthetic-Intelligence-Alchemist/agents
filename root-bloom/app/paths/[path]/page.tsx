import { notFound } from "next/navigation";
import Link from "next/link";
import { LessonList } from "@/components/lesson-list";
import { getPathDetail } from "@/lib/learning-paths";

interface PathPageProps {
  params: { path: string };
}

export default function PathPage({ params }: PathPageProps) {
  const detail = getPathDetail(params.path);

  if (!detail) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16">
      <header className="space-y-4">
        <Link href="/dashboard" className="text-sm text-moss-600">
          ← Back to dashboard
        </Link>
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-moss-600">{detail.philosophy}</p>
          <h1 className="text-4xl font-semibold">{detail.title}</h1>
          <p className="text-moss-700">{detail.description}</p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
        <LessonList lessons={detail.lessons} />
        <aside className="card space-y-4 p-6">
          <h2 className="text-xl font-semibold text-moss-900">Child Profiles</h2>
          <p className="text-sm text-moss-700">
            Family Mode supports up to three child profiles. Link progress to each profile and let them bloom at their
            own pace.
          </p>
          <Link className="btn-primary block text-center" href="/family">
            Manage Profiles
          </Link>
        </aside>
      </section>
    </main>
  );
}
