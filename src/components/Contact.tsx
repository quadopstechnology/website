"use client";

import { useState } from "react";
import { SITE_METADATA } from "@/src/constants";

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [projectType, setProjectType] = useState("Web & Mobile App Development");
  const [brief, setBrief] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          name: contactName,
          email: contactEmail,
          projectType,
          brief,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit request.");
      }

      setContactSubmitted(true);
      setTimeout(() => {
        setContactSubmitted(false);
        setContactName("");
        setContactEmail("");
        setBrief("");
      }, 6000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-surface-container-low px-margin-mobile md:px-margin-desktop relative"
    >
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-label-md font-label-md uppercase tracking-wider text-xs">
            Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
            Let&apos;s Build Something Premium Together
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Whether you need a full-scale mobile app, automated DevOps
            orchestration, or a speed-optimized search engine presence, our
            freelance hub is ready to deliver.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-2xl">
                mail
              </span>
              <div>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant block">
                  Email Us
                </span>
                <a
                  href={`mailto:${SITE_METADATA.email}`}
                  className="font-bold text-on-surface hover:text-tertiary transition-colors"
                >
                  {SITE_METADATA.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-2xl">
                location_on
              </span>
              <div>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant block">
                  Location
                </span>
                <span className="font-bold text-on-surface">
                  {SITE_METADATA.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface p-8 md:p-12 rounded-3xl border border-outline-variant/30 shadow-2xl relative">
          {contactSubmitted ? (
            <div className="py-16 text-center space-y-4 animate-fade-in">
              <span className="material-symbols-outlined text-6xl text-tertiary">
                check_circle
              </span>
              <h3 className="text-2xl font-bold text-on-surface">
                Request Received!
              </h3>
              <p className="text-on-surface-variant text-sm max-w-sm mx-auto">
                Thanks {contactName ? contactName : "there"}. We will review
                your freelancing requirements and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-6">
              {submitError && (
                <div className="p-4 bg-error-container text-on-error-container border border-error/20 rounded-xl text-sm font-semibold animate-fade-in">
                  ⚠️ {submitError}
                </div>
              )}
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Aarav V."
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface">
                  Project Type
                </label>
                <select 
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all text-on-surface-variant"
                >
                  <option>Web &amp; Mobile App Development</option>
                  <option>DevOps &amp; Cloud Infrastructure</option>
                  <option>Technical SEO &amp; Performance</option>
                  <option>Other Custom Freelance Project</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface">
                  Project Brief
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your tech stack, goals, and delivery constraints..."
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-on-background text-on-primary py-4 rounded-xl font-semibold text-sm hover:bg-tertiary disabled:bg-on-background/50 disabled:cursor-not-allowed transition-all shadow-lg active:scale-98 cursor-pointer"
              >
                {isSubmitting ? "Sending Freelance Request..." : "Submit Freelance Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
