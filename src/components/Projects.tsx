import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="font-display text-4xl sm:text-6xl mb-8">PROJECTS</h2>
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.repo ?? p.link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-border-thick p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-brutal hover-punch hover:bg-ink hover:text-bg transition-colors group"
          >
            <div>
              <h3 className="font-display text-2xl sm:text-3xl mt-1">{p.title}</h3>
              <p className="font-mono text-sm sm:text-base mt-2 max-w-xl">{p.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="brutal-border px-2 py-1 text-xs font-mono bg-bg text-ink transition-transform duration-150 group-hover:scale-110"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}