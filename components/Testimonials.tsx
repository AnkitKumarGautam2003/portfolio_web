"use client";

import { useMemo, useState } from "react";
import { testimonials } from "@/data/mockData";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const activeTestimonial = useMemo(() => testimonials[index], [index]);

  return (
    <section id="testimonials" className="section-shell py-20">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-secondary">Testimonials</h2>
        <p className="text-slate-600">What leaders say about my impact on their teams and revenue outcomes.</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
        <p className="text-xl leading-relaxed text-slate-700">“{activeTestimonial.quote}”</p>
        <div className="mt-6">
          <p className="font-semibold text-secondary">{activeTestimonial.name}</p>
          <p className="text-sm text-slate-500">
            {activeTestimonial.role}, {activeTestimonial.company}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {testimonials.map((testimonial, testimonialIndex) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(testimonialIndex)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                testimonialIndex === index
                  ? "bg-primary text-white"
                  : "border border-slate-300 bg-white text-slate-600 hover:border-slate-400"
              }`}
              aria-label={`View testimonial from ${testimonial.name}`}
            >
              {testimonial.company}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
