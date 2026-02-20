const links = [
  { label: "Home", href: "#home" },
  { label: "Metrics", href: "#metrics" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight text-secondary">
          Sales<span className="text-primary">Portfolio</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="text-sm font-medium text-slate-600 transition hover:text-primary" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}
