"use client";

import { useState } from "react";
import { PROJECTS } from "@/src/constants";

export default function Portfolio() {
  const [portfolioFilter, setPortfolioFilter] = useState<
    "All" | "Web/App Dev" | "DevOps" | "SEO"
  >("All");

  const filteredProjects =
    portfolioFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === portfolioFilter);

  return (
    <section
      id="portfolio"
      className="py-28 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-label-md font-label-md mb-4 uppercase tracking-wider">
            Work Showcase
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-on-surface font-bold tracking-tight">
            Projects We Have Delivered
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 bg-surface-container-high/40 p-1.5 rounded-xl border border-outline-variant/20">
          {(["All", "Web/App Dev", "DevOps", "SEO"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setPortfolioFilter(filter)}
              className={`px-4 py-2 rounded-lg font-label-md text-xs font-semibold transition-all cursor-pointer ${
                portfolioFilter === filter
                  ? "bg-tertiary text-on-tertiary shadow"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="group relative h-[420px] rounded-2xl overflow-hidden border border-outline-variant/20 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-tertiary/20"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={project.alt}
              src={project.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/95 via-on-background/45 to-transparent flex flex-col justify-end p-8 transition-colors duration-300 group-hover:from-on-background/100">
              <span className="text-tertiary-fixed font-bold text-xs uppercase tracking-wider mb-2">
                {project.category}
              </span>
              <h3 className="text-on-primary font-headline-sm text-2xl mb-4 font-bold tracking-tight">
                {project.title}
              </h3>
              <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                <span className="text-tertiary-fixed-dim font-semibold text-sm">
                  {project.metric}
                </span>
                <span className="material-symbols-outlined text-on-primary bg-white/10 p-2 rounded-full transition-all duration-300 group-hover:bg-tertiary group-hover:text-on-tertiary group-hover:rotate-45">
                  arrow_outward
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
