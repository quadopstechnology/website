"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/src/constants";

export default function Testimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section className="py-28 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-label-md font-label-md mb-2 uppercase tracking-wider text-xs">
            Feedback
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-on-surface font-bold tracking-tight">
            Reviews That Speak Volumes
          </h2>
        </div>

        {/* Slider triggers */}
        <div className="flex gap-2">
          <button
            onClick={() =>
              setTestimonialIndex(
                (TESTIMONIALS.length + testimonialIndex - 1) %
                  TESTIMONIALS.length,
              )
            }
            className="w-11 h-11 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-tertiary hover:border-tertiary transition-colors cursor-pointer bg-transparent"
            aria-label="Previous Testimonial"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            onClick={() =>
              setTestimonialIndex((testimonialIndex + 1) % TESTIMONIALS.length)
            }
            className="w-11 h-11 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-tertiary hover:border-tertiary transition-colors cursor-pointer bg-transparent"
            aria-label="Next Testimonial"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Testimonials Slider Wrapper */}
      <div className="overflow-hidden w-full rounded-3xl border border-outline-variant/20 shadow-xl bg-surface">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-full shrink-0 p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center bg-surface"
            >
              <div className="md:col-span-8 flex flex-col justify-between gap-6 min-h-[220px]">
                <div className="space-y-4">
                  <span className="text-6xl text-tertiary font-serif leading-none block">
                    “
                  </span>
                  <p className="font-headline-sm text-xl md:text-2xl text-on-surface italic font-medium leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                <div>
                  <h5 className="font-label-md text-base text-on-surface font-bold">
                    {testimonial.name}
                  </h5>
                  <p className="text-on-surface-variant text-sm mt-0.5">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 flex items-center justify-center md:border-l md:border-outline-variant/10 md:pl-8 w-full">
                {testimonial.metric ? (
                  <div className="text-center p-6 bg-tertiary-container/30 rounded-2xl w-full">
                    <span className="text-xs uppercase tracking-wider text-tertiary block mb-2 font-semibold">
                      Target Metric Achieved
                    </span>
                    <span className="text-4xl font-extrabold text-tertiary tracking-tight leading-none block">
                      {testimonial.metric}
                    </span>
                  </div>
                ) : testimonial.image ? (
                  <img
                    className="w-32 h-32 rounded-full object-cover border-4 border-tertiary"
                    alt={testimonial.name}
                    src={testimonial.image}
                  />
                ) : (
                  <div className="text-center p-6 bg-surface-container-high rounded-2xl w-full">
                    <span className="material-symbols-outlined text-5xl text-tertiary mb-2">
                      recommend
                    </span>
                    <span className="text-sm font-bold text-on-surface block">
                      Highly Recommended
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setTestimonialIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
              testimonialIndex === idx
                ? "bg-tertiary w-6"
                : "bg-outline-variant/40 hover:bg-outline-variant/75 w-2.5"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-outline-variant/20">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <div className="flex text-tertiary">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span
                key={idx}
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Dedicated to building outstanding digital assets for our early
            launch partners
          </span>
        </div>
        <a
          className="text-tertiary font-label-md text-label-md font-bold underline decoration-2 underline-offset-4 hover:text-on-background transition-colors"
          href="#contact"
        >
          Collaborate With Us
        </a>
      </div>
    </section>
  );
}
