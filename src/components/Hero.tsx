import { SITE_METADATA } from "@/src/constants";

export default function Hero() {
  return (
    <section className="hero-gradient pt-44 pb-28 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">
        <div className="space-y-8 text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-tertiary-container text-on-tertiary-container rounded-full text-label-md font-label-md uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">
              rocket_launch
            </span>{" "}
            {SITE_METADATA.hero.badge}
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[56px] lg:text-[64px] text-on-surface leading-tight font-bold tracking-tight">
            {SITE_METADATA.hero.titleLines[0]}
            <br />
            {SITE_METADATA.hero.titleLines[1]}
            <br />
            {SITE_METADATA.hero.titleLines[2]}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            {SITE_METADATA.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#estimator"
              className="inline-flex justify-center items-center gap-2 bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-on-background transition-all shadow-lg hover:shadow-tertiary/20 cursor-pointer"
            >
              Plan Your Project{" "}
              <span className="material-symbols-outlined text-sm">
                calculate
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center gap-2 border-2 border-outline-variant text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-all cursor-pointer"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative w-full aspect-square max-w-[480px] mx-auto md:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/20 to-primary/10 rounded-3xl transform rotate-3 scale-102 blur-sm"></div>
          <div className="relative w-full h-full rounded-3xl bg-primary-container overflow-hidden border border-outline-variant/30 parallax-card shadow-2xl transition-all duration-300 ease-out">
            <img
              className="w-full h-full object-cover"
              alt="A sophisticated 3D abstract digital sculpture representing fluid innovation, using a palette of soft lavender, deep charcoal, and glowing white. The scene is illuminated with professional studio lighting, creating soft shadows and a high-end editorial aesthetic suitable for a modern tech agency."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiqrjKC7hpol-mKI2i4iDm6_es1XaVGpMgBzky9pSDtPG31OOEaiW7L-5Y6X3w0o9dsXzUpzCPHzDjZGn-8LikROIqz9E-kukFq3CUzGevQLDGn_IbSnX8HUts4koQk54JLeJ8yk_sLE4TsvL11flCXE4XM9GQmJcIoPDwpCX8I9esmTTyvHt5kpExB9x_348dkiayqolx7ncspgydIvUEUOvilorqIxGNjJ6QXPtM47EUsMbAwSDw4y4LTbQuEiXAjhP8HMdd6sU"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
