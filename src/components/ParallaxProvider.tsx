"use client";

import { useEffect } from "react";

export default function ParallaxProvider() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".parallax-card");
      const x = (window.innerWidth / 2 - e.pageX) / 60;
      const y = (window.innerHeight / 2 - e.pageY) / 60;

      cards.forEach((card) => {
        const htmlCard = card as HTMLElement;
        if (htmlCard.matches(":hover")) {
          htmlCard.style.transform = `translateY(-8px) rotateX(${y}deg) rotateY(${-x}deg)`;
        } else {
          htmlCard.style.transform = "";
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
