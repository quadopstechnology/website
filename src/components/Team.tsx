"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { TEAM, TeamMemberItem } from "@/src/constants";

// Dynamically import ResumeViewer to avoid canvas & window SSR problems
const ResumeViewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center py-20 gap-3 text-on-surface-variant min-h-[400px]">
      <span className="material-symbols-outlined animate-spin text-3xl text-tertiary">
        sync
      </span>
      <span className="text-sm font-medium">Initializing Resume Viewer...</span>
    </div>
  ),
});

export default function Team() {
  const [activeResume, setActiveResume] = useState<TeamMemberItem | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = async () => {
    if (!modalRef.current) return;

    try {
      if (document.fullscreenElement !== modalRef.current) {
        await modalRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Failed to toggle fullscreen:", err);
    }
  };

  // Sync fullscreen state with browser events (e.g. pressing ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === modalRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Exit fullscreen when closing modal
  useEffect(() => {
    if (!activeResume && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }, [activeResume]);

  // Disable background scrolling when modal is active
  useEffect(() => {
    if (activeResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeResume]);

  return (
    <section
      id="team"
      className="py-28 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-label-md font-label-md uppercase tracking-wider text-xs">
            Founding Network
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-on-surface font-bold tracking-tight">
            Meet QuadOps
          </h2>
          <p className="font-body-md text-body-lg text-on-surface-variant max-w-xl mx-auto">
            We are a cohesive team of dedicated experts collaborating to
            architect, build, and optimize high-end custom web, mobile,
            infrastructure, and SEO systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="group bg-surface border border-outline-variant/30 hover:border-tertiary/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-tertiary/5 relative overflow-hidden h-full min-h-[420px]"
            >
              {/* Subtle top-right decorative gradient glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-tertiary/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="flex flex-col items-center text-center">
                {/* Avatar container with glowing ring */}
                <div className="relative w-24 h-24 mb-4">
                  <div className="absolute inset-0 bg-linear-to-tr from-tertiary to-primary rounded-full blur-[2px] opacity-0 group-hover:opacity-75 transition-opacity duration-300 scale-105" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-outline-variant/40 group-hover:border-transparent transition-all duration-300 bg-surface">
                    <img
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={member.avatar}
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <h4 className="font-headline-sm text-lg text-on-surface font-bold tracking-tight mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-tertiary text-xs font-semibold mb-3">
                  {member.role}
                </p>

                {/* Decorative Divider */}
                <div className="w-8 h-[2px] bg-outline-variant/40 mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Bio text */}
                <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-3 mb-4 px-1">
                  {member.bio}
                </p>

                {/* Skills Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-2">
                  {member.badge.split(" & ").map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-semibold bg-surface-variant text-on-surface-variant px-2.5 py-0.5 rounded-full border border-outline-variant/10 group-hover:bg-tertiary/10 group-hover:text-tertiary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-4 pt-4 border-t border-outline-variant/15 w-full space-y-3">
                <button
                  onClick={() => setActiveResume(member)}
                  className="w-full bg-surface-container-high text-on-surface hover:bg-tertiary hover:text-on-tertiary py-2 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-outline-variant/20 hover:border-transparent"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    visibility
                  </span>
                  View Resume / Portfolio
                </button>

                <div className="flex justify-center gap-3">
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      className="w-8 h-8 rounded-full bg-surface-container/60 hover:bg-on-background hover:text-on-primary flex items-center justify-center text-on-surface-variant transition-colors border border-outline-variant/10"
                      title="GitHub Profile"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        code
                      </span>
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      className="w-8 h-8 rounded-full bg-surface-container/60 hover:bg-primary hover:text-on-primary flex items-center justify-center text-on-surface-variant transition-colors border border-outline-variant/10"
                      title="LinkedIn Profile"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        link
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activeResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/80 backdrop-blur-md animate-fade-in">
          <div
            ref={modalRef}
            className={`bg-surface border border-outline-variant/30 overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${
              isFullscreen
                ? "w-screen h-screen max-w-none max-h-none rounded-none border-none"
                : "w-full max-w-[95vw] md:max-w-[900px] rounded-3xl h-[90vh] md:h-[85vh]"
            } ${isFullscreen ? "" : "animate-scale-up"}`}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-outline-variant/20 bg-surface">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-on-surface">
                  {activeResume.name} — Resume
                </h3>
                <p className="text-xs text-tertiary font-semibold">
                  {activeResume.role}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {activeResume.links.resume && (
                  <a
                    href={activeResume.links.resume}
                    download
                    className="w-10 h-10 rounded-full bg-surface-container hover:bg-outline-variant/20 flex items-center justify-center text-on-surface transition-colors cursor-pointer border-none"
                    aria-label="Download resume"
                    title="Download Resume"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      download
                    </span>
                  </a>
                )}
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-surface-container hover:bg-outline-variant/20 flex items-center justify-center text-on-surface transition-colors cursor-pointer border-none"
                  aria-label={
                    isFullscreen ? "Exit fullscreen" : "View fullscreen"
                  }
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isFullscreen ? "fullscreen_exit" : "fullscreen"}
                  </span>
                </button>
                <button
                  onClick={() => setActiveResume(null)}
                  className="w-10 h-10 rounded-full bg-surface-container hover:bg-outline-variant/20 flex items-center justify-center text-on-surface transition-colors cursor-pointer border-none"
                  aria-label="Close modal"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 p-4 md:p-6 bg-surface-container-lowest overflow-y-auto md:overflow-hidden flex flex-col md:flex-row gap-6">
              {/* PDF Viewer Container */}
              <div className="w-full md:flex-1 h-[60vh] min-h-[460px] md:h-full md:min-h-0 shrink-0 md:shrink border border-outline-variant/20 rounded-2xl overflow-hidden bg-white relative p-2 md:p-4">
                {activeResume.links.resume ? (
                  <ResumeViewer pdfUrl={activeResume.links.resume} />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-on-surface-variant gap-3">
                    <span className="material-symbols-outlined text-3xl text-error">
                      error
                    </span>
                    <span className="text-sm font-medium">
                      No resume file configured.
                    </span>
                  </div>
                )}
              </div>

              {/* Quick Stats Panel */}
              {!isFullscreen && (
                <div className="w-full md:w-[260px] shrink-0 md:shrink flex flex-col justify-between gap-6 border-t md:border-t-0 md:border-l border-outline-variant/20 pt-6 md:pt-0 md:pl-6 overflow-visible md:overflow-y-auto">
                  <div className="space-y-6 text-left">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold block mb-1">
                        Specialization
                      </span>
                      <span className="text-xs font-bold text-on-tertiary bg-tertiary px-3 py-1.5 rounded-lg inline-block">
                        {activeResume.badge}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold block mb-1">
                        Core Brief
                      </span>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {activeResume.bio}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold block mb-2">
                        Associated Skills
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeResume.badge.split(" & ").map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-semibold bg-surface-container px-2.5 py-1 rounded text-on-surface"
                          >
                            {skill}
                          </span>
                        ))}
                        <span className="text-[10px] font-semibold bg-surface-container px-2.5 py-1 rounded text-on-surface">
                          Git &amp; GitHub
                        </span>
                        <span className="text-[10px] font-semibold bg-surface-container px-2.5 py-1 rounded text-on-surface">
                          API Integrations
                        </span>
                      </div>
                    </div>
                  </div>

                  {activeResume.links.resume && (
                    <a
                      href={activeResume.links.resume}
                      download
                      className="w-full bg-on-background text-on-primary py-3 rounded-xl font-semibold text-xs text-center block hover:bg-tertiary transition-colors shadow mt-4 md:mt-0"
                    >
                      Download Offline Copy
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
