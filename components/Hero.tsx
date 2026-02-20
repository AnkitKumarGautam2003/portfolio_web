export default function Hero() {
  return (
    <section id="home" className="section-shell grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          B2B Sales Leader • Enterprise Growth Specialist
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-secondary sm:text-5xl">
          Driving predictable revenue growth with strategic, customer-first sales execution.
        </h1>
        <p className="max-w-xl text-lg text-slate-600">
          I help high-growth B2B teams build pipeline quality, accelerate deal velocity, and close high-value enterprise
          contracts with confidence.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Let&apos;s Connect
          </a>
          <a
            href="#case-studies"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
          >
            View Case Studies
          </a>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
        <h2 className="text-lg font-semibold text-secondary">What I Deliver</h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li>• Revenue strategy aligned to ICP and buyer journey</li>
          <li>• Repeatable outbound and expansion playbooks</li>
          <li>• Executive-level deal support and coaching</li>
          <li>• Forecast accuracy and process discipline</li>
        </ul>
      </div>
    </section>
  );
}
