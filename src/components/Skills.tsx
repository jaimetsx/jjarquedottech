import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-b-[5px] border-ink">
      <h2 className="font-display text-4xl sm:text-6xl mb-8">SKILLS</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="brutal-border p-4 bg-bg shadow-brutalSm hover-punch cursor-default"
          >
            <h3 className="font-display text-lg mb-3">{group.category}</h3>
            <ul className="font-mono text-sm space-y-1">
              {group.items.map((item) => (
                <li key={item}>// {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}