const profiles = [
  { name: "Parent", role: "Guide", status: "Owner" },
  { name: "Aurora", role: "Child", status: "Age 5" },
  { name: "River", role: "Child", status: "Age 7" }
];

export default function FamilyPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-moss-900">Family Mode</h1>
        <p className="text-moss-700">Assign up to three child profiles. Supabase will store profile data and preferences.</p>
      </header>
      <section className="space-y-4">
        {profiles.map((profile) => (
          <div key={profile.name} className="card flex items-center justify-between p-5">
            <div>
              <h2 className="text-lg font-semibold text-moss-900">{profile.name}</h2>
              <p className="text-sm text-moss-600">{profile.role}</p>
            </div>
            <span className="rounded-full bg-moss-100 px-3 py-1 text-sm text-moss-700">{profile.status}</span>
          </div>
        ))}
        <button className="btn-primary">Add Child Profile (mock)</button>
      </section>
    </main>
  );
}
