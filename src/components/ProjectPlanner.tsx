"use client";

import { useState } from "react";

export default function ProjectPlanner() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Dev"]);
  const [projectSize, setProjectSize] = useState<"Small" | "Medium" | "Large">("Medium");
  const [timeline, setTimeline] = useState<"Expedited" | "Standard" | "Flexible">("Standard");
  const [estimatorSubmitted, setEstimatorSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleEstimatorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (clientEmail.trim() === "") return;
    setIsSubmitting(true);
    setSubmitError("");

    const estimatedEffort =
      projectSize === "Small"
        ? "Optimized MVP"
        : projectSize === "Medium"
        ? "Standard Blueprint"
        : "Scale Architecture";

    const teamAllocation =
      projectSize === "Small"
        ? "1 Dedicated Developer"
        : projectSize === "Medium"
        ? "2 Core Specialists"
        : "Full Collective (4 Experts)";

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "planner",
          email: clientEmail,
          selectedServices,
          projectSize,
          timeline,
          estimatedEffort,
          teamAllocation,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit blueprint.");
      }

      setEstimatorSubmitted(true);
      setTimeout(() => {
        setEstimatorSubmitted(false);
        setClientEmail("");
      }, 6000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimator" className="py-28 bg-surface-container-low px-margin-mobile md:px-margin-desktop relative">
      <div className="max-w-[1000px] mx-auto bg-surface rounded-3xl border border-outline-variant/30 overflow-hidden shadow-2xl relative z-10">
        <div className="grid md:grid-cols-12">
          {/* Calculator Settings */}
          <div className="p-8 md:p-12 md:col-span-7 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-label-md font-label-md mb-3 uppercase tracking-wider text-xs">
                Interactive Planner
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-on-surface">
                Configure Your Project Scope
              </h2>
              <p className="text-on-surface-variant text-sm mt-1">
                Select scope parameters below to compute an instant resource &amp; complexity estimate.
              </p>
            </div>

            {/* Services Toggles */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-on-surface uppercase tracking-wide">
                1. Select Freelance Capabilities Required
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "Web Dev", label: "Web Dev", icon: "html" },
                  { id: "App Dev", label: "Mobile Apps", icon: "smartphone" },
                  { id: "DevOps", label: "DevOps / Cloud", icon: "cloud" },
                  { id: "SEO", label: "SEO & Growth", icon: "trending_up" },
                ].map((serv) => {
                  const active = selectedServices.includes(serv.id);
                  return (
                    <button
                      type="button"
                      key={serv.id}
                      onClick={() => handleServiceToggle(serv.id)}
                      className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        active
                          ? "bg-tertiary/10 border-tertiary text-tertiary font-bold"
                          : "border-outline-variant/30 hover:bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{serv.icon}</span>
                      <span className="text-sm font-medium">{serv.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scope Size */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-on-surface uppercase tracking-wide">
                2. Project Scope &amp; Complexity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["Small", "Medium", "Large"] as const).map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setProjectSize(size)}
                    className={`py-3 rounded-xl border font-semibold text-xs transition-all cursor-pointer ${
                      projectSize === size
                        ? "bg-on-background text-on-primary border-on-background shadow"
                        : "border-outline-variant/30 hover:bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Speed */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-on-surface uppercase tracking-wide">
                3. Desired Delivery Timeline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["Flexible", "Standard", "Expedited"] as const).map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setTimeline(time)}
                    className={`py-3 rounded-xl border font-semibold text-xs transition-all cursor-pointer ${
                      timeline === time
                        ? "bg-on-background text-on-primary border-on-background shadow"
                        : "border-outline-variant/30 hover:bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Results panel */}
          <div className="bg-on-background text-on-primary p-8 md:p-12 md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-outline-variant/10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-white">Project Calculation</h3>

              {/* Scope & Timeline Output */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-surface-variant/60 block">
                    Estimated Effort Level
                  </span>
                  <span className="text-2xl md:text-3xl font-extrabold text-tertiary-fixed tracking-tight">
                    {projectSize === "Small"
                      ? "Optimized MVP"
                      : projectSize === "Medium"
                      ? "Standard Blueprint"
                      : "Scale Architecture"}
                  </span>
                </div>

                <div className="h-px bg-white/10"></div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-surface-variant/60 block">
                    Team Allocation
                  </span>
                  <span className="text-lg font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim font-bold">groups</span>
                    {projectSize === "Small"
                      ? "1 Dedicated Developer"
                      : projectSize === "Medium"
                      ? "2 Core Specialists"
                      : "Full Collective (4 Experts)"}
                  </span>
                </div>

                <div className="h-px bg-white/10"></div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-surface-variant/60 block">
                    Priority Mode
                  </span>
                  <span className="text-lg font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">speed</span>
                    {timeline} Delivery
                  </span>
                </div>
              </div>

              <p className="text-surface-variant/70 text-xs leading-relaxed">
                *Estimation calculated dynamically based on resource allocations. Fill in your email below to lock in this planner blueprint.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {submitError && (
                <div className="p-3 bg-red-500/20 border border-red-500/40 text-red-200 rounded-xl text-center text-xs font-semibold animate-fade-in">
                  ⚠️ {submitError}
                </div>
              )}
              {estimatorSubmitted ? (
                <div className="p-4 bg-tertiary/20 border border-tertiary text-tertiary-fixed rounded-xl text-center text-sm font-semibold animate-fade-in">
                  ✓ Project Planner request sent! We will reach out shortly.
                </div>
              ) : (
                <form onSubmit={handleEstimatorSubmit} className="space-y-2">
                  <input
                    required
                    disabled={isSubmitting}
                    type="email"
                    placeholder="Enter your work email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-tertiary disabled:opacity-50 transition-all placeholder:text-surface-variant/40"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-tertiary text-on-tertiary disabled:bg-tertiary/50 disabled:cursor-not-allowed py-3.5 rounded-xl font-semibold text-sm hover:bg-white hover:text-on-background transition-all shadow-lg active:scale-98 cursor-pointer"
                  >
                    {isSubmitting ? "Submitting Blueprint..." : "Submit Project Blueprint"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
