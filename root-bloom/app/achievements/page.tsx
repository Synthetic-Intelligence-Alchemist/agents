import { Trophy, Share2 } from "lucide-react";

const achievements = [
  {
    id: "golden-bead-explorer",
    title: "Golden Bead Explorer",
    description: "Completed five Montessori math lessons with focused attention.",
    date: "May 12"
  },
  {
    id: "story-weaver",
    title: "Story Weaver",
    description: "Created a Waldorf puppet show and shared it with the learning circle.",
    date: "May 18"
  }
];

export default function AchievementsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-moss-900">Achievements</h1>
        <p className="text-moss-700">Celebrate milestones and share them with friends and family.</p>
      </header>

      <section className="space-y-4">
        {achievements.map((achievement) => (
          <article key={achievement.id} className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <Trophy className="h-10 w-10 text-bloom-500" />
              <div>
                <h2 className="text-xl font-semibold text-moss-900">{achievement.title}</h2>
                <p className="text-sm text-moss-600">{achievement.description}</p>
                <span className="text-xs uppercase tracking-wide text-moss-500">{achievement.date}</span>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-moss-200 px-4 py-2 text-sm font-semibold text-moss-700">
              <Share2 className="h-4 w-4" /> Share
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
