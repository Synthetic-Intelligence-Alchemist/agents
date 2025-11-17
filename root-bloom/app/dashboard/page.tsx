import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Sprout, TreePine } from "lucide-react";

const paths = [
  {
    slug: "montessori",
    title: "Montessori Golden Path",
    description: "Sequential sensorial lessons and practical life invitations.",
    icon: Compass
  },
  {
    slug: "waldorf",
    title: "Waldorf Story Grove",
    description: "Seasonal rhythms, watercolor tales, and handcraft journeys.",
    icon: TreePine
  },
  {
    slug: "reggio",
    title: "Reggio Emilia Atelier",
    description: "Project-based provocations with collaborative documentation.",
    icon: Sprout
  }
];

export default function DashboardPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-moss-600">Family Dashboard</p>
        <h1 className="text-4xl font-semibold text-moss-900">Choose your learning path</h1>
        <p className="text-moss-700">
          Each journey is tuned to your child profiles. Continue exploring or spark a new activity with the AI garden.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {paths.map((path) => (
          <Link key={path.slug} href={`/paths/${path.slug}`}>
            <motion.article
              whileHover={{ y: -4 }}
              className={`card flex h-full flex-col gap-4 bg-gradient-to-br from-white via-white/90 to-white/70 p-6 text-moss-900 shadow-md`}
            >
              <path.icon className="h-10 w-10" />
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{path.title}</h2>
                <p className="text-moss-700">{path.description}</p>
              </div>
              <span className="mt-auto text-sm font-semibold text-moss-600">View Path</span>
            </motion.article>
          </Link>
        ))}
      </section>
    </main>
  );
}
