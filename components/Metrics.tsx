import { achievements } from "@/data/mockData";

export default function Metrics() {
  return (
    <section id="metrics" className="section-shell py-20">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-secondary">Sales Achievements</h2>
        <p className="text-slate-600">Snapshot of impact delivered across high-growth and enterprise teams.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((metric) => (
          <article key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel">
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-2 text-3xl font-bold text-primary">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-600">{metric.context}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
