export type Achievement = {
  label: string;
  value: string;
  context: string;
};

export type CaseStudy = {
  title: string;
  challenge: string;
  solution: string;
  results: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const achievements: Achievement[] = [
  { label: "Annual Revenue Closed", value: "$8.4M", context: "Across SaaS and enterprise accounts" },
  { label: "Quota Attainment", value: "147%", context: "Average over the last 6 quarters" },
  { label: "Sales Cycle Reduction", value: "-31%", context: "By implementing consultative workflows" },
  { label: "Enterprise Deals", value: "42", context: "Contracts valued at $100k+ ARR" }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Global Logistics Platform",
    challenge: "Pipeline quality was inconsistent and deals were stalling in late-stage procurement.",
    solution:
      "Introduced account-tiering, multi-threaded stakeholder mapping, and a tailored ROI business case for each champion.",
    results: "Increased win-rate by 23% and closed a 3-year $780k ARR expansion in 90 days."
  },
  {
    title: "HR Tech Scale-Up",
    challenge: "The team had strong product-market fit but lacked a repeatable outbound motion for enterprise prospects.",
    solution:
      "Built an outbound framework with intent scoring, personalized messaging templates, and weekly coaching sprints.",
    results: "Generated 112 qualified meetings and drove a 2.7x increase in enterprise pipeline value."
  },
  {
    title: "Cybersecurity Vendor",
    challenge: "Renewal and expansion opportunities were missed due to limited customer success-sales alignment.",
    solution:
      "Created joint QBR cadences and usage-trigger alerts to surface expansion opportunities earlier.",
    results: "Lifted net revenue retention from 104% to 126% in two quarters."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Dana Kim",
    role: "VP of Revenue",
    company: "NexaCloud",
    quote:
      "One of the most strategic sales leaders I have worked with—consistently turns complex buying committees into closed revenue."
  },
  {
    name: "Marcus Patel",
    role: "Chief Commercial Officer",
    company: "Axiom Systems",
    quote:
      "Brought structure, urgency, and executive presence to our pipeline. The quality of deals improved almost immediately."
  },
  {
    name: "Elena Rossi",
    role: "Founder & CEO",
    company: "OrbitIQ",
    quote:
      "Combined empathy and data beautifully. Helped us scale enterprise sales without losing our customer-first approach."
  }
];
