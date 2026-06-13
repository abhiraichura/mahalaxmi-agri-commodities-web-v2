import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !ref.current) return;

    const elements = ref.current.querySelectorAll('.animate-on-scroll');

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { 
          y: 40, 
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)'
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return ref;
}
