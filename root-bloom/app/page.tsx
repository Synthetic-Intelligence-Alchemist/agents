import Link from "next/link";
import { motion } from "framer-motion";
import { Flower2, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Flower2,
    title: "Child-Led Journeys",
    description: "Curated Montessori, Waldorf, and Reggio Emilia learning paths that nurture curiosity."
  },
  {
    icon: Sparkles,
    title: "AI Activity Garden",
    description: "Token-efficient prompts generate safe, screen-light explorations tailored to each child."
  },
  {
    icon: Users,
    title: "Family Mode",
    description: "Invite up to three child profiles and keep progress in sync across the household."
  }
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Preview courses and explore the learning philosophy."
  },
  {
    name: "Starter",
    price: "$7/mo",
    description: "Unlock Montessori core sequences and printable activities."
  },
  {
    name: "Educator",
    price: "$99/mo",
    description: "Full library access, AI templates, and advanced analytics."
  }
];

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16">
      <section className="relative overflow-hidden rounded-[3rem] bg-white/80 p-10 shadow-lg backdrop-blur">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-bloom-100 px-4 py-2 text-sm font-semibold text-bloom-700">
            Root & Bloom
          </span>
          <h1 className="text-4xl font-bold text-moss-900 md:text-5xl">
            Where Montessori meets Waldorf with Reggio Emilia in your living room.
          </h1>
          <p className="max-w-2xl text-lg text-moss-700">
            Root & Bloom is a digital garden for intentional homeschooling. Plant seeds of wonder with hand-crafted
            lessons, soulful progress tracking, and AI helpers who honor screen-light learning.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary text-center" href="/dashboard">
              Enter the Garden
            </Link>
            <Link
              className="rounded-full border border-moss-200 px-6 py-3 text-center font-semibold text-moss-700"
              href="#pricing"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card flex flex-col gap-4 p-6"
          >
            <feature.icon className="h-10 w-10 text-bloom-500" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-moss-700">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      <section id="pricing" className="space-y-8">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="card flex flex-col gap-4 p-6">
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="text-4xl font-bold text-bloom-600">{tier.price}</p>
              <p className="text-moss-700">{tier.description}</p>
              <Link className="btn-primary mt-auto text-center" href="/signup">
                Choose {tier.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
