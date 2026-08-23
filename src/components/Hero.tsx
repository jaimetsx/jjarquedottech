export default function Hero() {
  return (
    <section className="py-16 sm:py-28 border-b-[5px] border-ink">
      <h1 className="font-display leading-[0.95] text-[14vw] sm:text-[9vw] md:text-[7vw] break-words">
        <span className="inline-block transition-transform duration-150 hover:-rotate-2 hover:text-accent">
          JAIME
        </span>
        <br />
        <span className="inline-block transition-transform duration-150 hover:rotate-2 hover:text-accent">
          JARQUE
        </span>
      </h1>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
        <span className="brutal-border bg-accent text-bg font-display px-4 py-2 text-sm sm:text-base w-fit shadow-brutalSm hover-punch">
          FULL-STACK DEVELOPER
        </span>
        <p className="font-mono max-w-md text-sm sm:text-base">
          Based in Cadiz, Spain.
        </p>
      </div>
    </section>
  );
}