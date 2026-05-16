import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateHeroContent() {
  return gsap.from(".hero-content > *", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out",
  });
}

export function animateSectionHeading(target: Element) {
  return gsap.from(target, {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
    },
  });
}

export function animateProjectCards() {
  return gsap.from(".project-card", {
    scrollTrigger: { trigger: ".project-grid", start: "top 80%" },
    y: 24,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out",
  });
}

export function animateSkillGroups() {
  return gsap.from(".skill-group", {
    scrollTrigger: { trigger: "#skills", start: "top 80%" },
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });
}
