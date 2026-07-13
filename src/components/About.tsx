export default function About() {
  return (
    <section id="about" className="py-16 border-b-[5px] border-ink">
      <h2 className="font-display text-4xl sm:text-6xl mb-6">ABOUT</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <p className="font-mono text-lg sm:text-xl leading-relaxed">
          Im a Full-Stack developer and Systems Administrator from Andalusia, Spain.
          I work on infrastructure automation and full-stack projects,
          with a strong interest in low-level systems programming and cybersecurity tooling.
        </p>
      </div>
    </section>
  );
}