import { SERVICES } from "@/src/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-surface-container-low px-margin-mobile md:px-margin-desktop relative"
    >
      <div className="max-w-[1280px] mx-auto text-center mb-16 space-y-4">
        <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-label-md font-label-md mb-2 uppercase tracking-wider">
          Freelance Expertise
        </span>
        <h2 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-on-surface font-bold tracking-tight">
          Our High-Performance Offerings
        </h2>
        <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Transforming specifications into sleek, functional, and highly
          optimized digital assets. No overhead. Just pixel-perfect execution.
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-8 items-stretch">
        {SERVICES.map((service, index) => {
          const isMiddle = index === 1;
          return (
            <div
              key={service.id}
              className={`p-10 rounded-2xl border transition-all duration-300 group flex flex-col justify-between ${
                isMiddle
                  ? "bg-on-background border-on-background text-on-primary md:scale-105 z-10 shadow-2xl hover:-translate-y-3 hover:shadow-tertiary/20"
                  : "bg-surface border-outline-variant/30 hover:border-tertiary/40 hover:-translate-y-2.5 hover:shadow-xl hover:shadow-tertiary/5"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      isMiddle
                        ? "bg-tertiary text-on-tertiary"
                        : "bg-primary-container text-on-tertiary-container group-hover:bg-tertiary group-hover:text-on-tertiary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[32px]">
                      {service.icon}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-label-md text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      isMiddle
                        ? "bg-white/10 text-tertiary-fixed group-hover:bg-white/20"
                        : "bg-tertiary-container text-on-tertiary-container group-hover:bg-tertiary/10 group-hover:text-tertiary"
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>
                <h3
                  className={`font-headline-sm text-2xl mb-4 font-bold tracking-tight ${
                    isMiddle ? "text-on-primary" : "text-on-surface"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-8 ${
                    isMiddle
                      ? "text-surface-variant/70"
                      : "text-on-surface-variant"
                  }`}
                >
                  {service.description}
                </p>
              </div>
              {/* <a
                className={`inline-flex items-center gap-2 font-label-md text-label-md transition-all group-hover:gap-4 ${
                  isMiddle ? "text-tertiary-fixed font-bold" : "text-tertiary font-bold"
                }`}
                href={service.exploreLink}
              >
                + Explore projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
