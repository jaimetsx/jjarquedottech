export default function Footer() {
  return (
    <footer className="py-8 flex flex-col sm:flex-row justify-between gap-4 font-mono text-sm border-t-[5px] border-ink mt-8">
      <p>© 2026 JAIME JARQUE. ALL RIGHTS RESERVED.</p>
      <div className="flex gap-4">
        <a href="https://github.com/jaimetsx" className="hover:text-accent hover:-translate-y-0.5 inline-block transition-all">GITHUB</a>
        <a href="https://www.linkedin.com/in/jjarque1/" className="hover:text-accent hover:-translate-y-0.5 inline-block transition-all">LINKEDIN</a>
        <a href="mailto:jaimejarquegutierrez1@gmail.com" className="hover:text-accent hover:-translate-y-0.5 inline-block transition-all">EMAIL</a>
      </div>
    </footer>
  );
}