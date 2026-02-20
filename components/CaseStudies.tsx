import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/mockData";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-shell py-20">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-secondary">Case Studies</h2>
        <p className="text-slate-600">Examples of how I solve pipeline, conversion, and retention challenges.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.title} study={study} />
        ))}
      </div>
    </section>
  );
}
