"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  message: ""
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormValues> = {};

    if (!formValues.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (formValues.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setSubmitted(true);
    setFormValues(initialValues);
  };

  return (
    <section id="contact" className="section-shell py-20">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-secondary">Contact</h2>
        <p className="text-slate-600">Tell me about your goals, and I&apos;ll follow up with a tailored plan.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
            value={formValues.name}
            onChange={(event) => setFormValues((prev) => ({ ...prev, name: event.target.value }))}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
            value={formValues.email}
            onChange={(event) => setFormValues((prev) => ({ ...prev, email: event.target.value }))}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
            value={formValues.message}
            onChange={(event) => setFormValues((prev) => ({ ...prev, message: event.target.value }))}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>
        <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
          Send Message
        </button>
        {submitted && <p className="text-sm font-medium text-emerald-600">Thanks! Your message has been captured.</p>}
      </form>
    </section>
  );
}
