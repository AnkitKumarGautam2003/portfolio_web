import { CaseStudy } from "@/data/mockData";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel">
      <h3 className="text-xl font-semibold text-secondary">{study.title}</h3>
      <dl className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
        <div>
          <dt className="font-semibold text-slate-900">Challenge</dt>
          <dd>{study.challenge}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Solution</dt>
          <dd>{study.solution}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Results</dt>
          <dd className="font-medium text-accent">{study.results}</dd>
        </div>
      </dl>
    </article>
  );
}
