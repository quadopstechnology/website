export default function Stats() {
  return (
    <section className="py-12 border-y border-outline-variant/10 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">10+</span>
          <span className="font-label-md text-[13px] text-tertiary mt-2 uppercase tracking-wider">Early Launches</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">100%</span>
          <span className="font-label-md text-[13px] text-tertiary mt-2 uppercase tracking-wider">Devoted Focus</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">Modern</span>
          <span className="font-label-md text-[13px] text-tertiary mt-2 uppercase tracking-wider">Tech Stack Centric</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">4</span>
          <span className="font-label-md text-[13px] text-tertiary mt-2 uppercase tracking-wider">Hungry Specialists</span>
        </div>
      </div>
    </section>
  );
}
