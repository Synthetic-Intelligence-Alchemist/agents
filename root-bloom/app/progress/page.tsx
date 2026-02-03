import { MontessoriGoldenStair } from "@/components/progress/montessori-golden-stair";
import { WaldorfOakTree } from "@/components/progress/waldorf-oak-tree";
import { ReggioWeb } from "@/components/progress/reggio-web";

export default function ProgressPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-moss-900">Family Progress</h1>
        <p className="text-moss-700">
          Visualize learning journeys across each pedagogical path. These components will sync with Supabase tracking
          data for each child profile.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <MontessoriGoldenStair completion={0.6} />
        <WaldorfOakTree season="autumn" growth={0.45} />
        <ReggioWeb nodes={8} connections={18} />
      </section>
    </main>
  );
}
