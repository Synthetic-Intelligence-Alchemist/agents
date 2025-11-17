export default function SignupPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col gap-6 px-6 py-16">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-moss-900">Create your family account</h1>
        <p className="text-moss-700">Google and email authentication will be wired through Supabase soon.</p>
      </header>
      <form className="card space-y-4 p-6">
        <label className="space-y-1">
          <span className="text-sm font-medium text-moss-700">Email</span>
          <input
            type="email"
            className="w-full rounded-2xl border border-moss-200 px-4 py-3 focus:border-bloom-400 focus:outline-none"
            placeholder="you@example.com"
          />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium text-moss-700">Password</span>
          <input
            type="password"
            className="w-full rounded-2xl border border-moss-200 px-4 py-3 focus:border-bloom-400 focus:outline-none"
            placeholder="Create a secure password"
          />
        </label>
        <button type="button" className="btn-primary w-full">
          Continue (mock)
        </button>
        <button type="button" className="w-full rounded-2xl border border-moss-200 px-4 py-3 font-semibold text-moss-700">
          Sign in with Google (mock)
        </button>
      </form>
    </main>
  );
}
