import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollAnimations() {
    useEffect(() => {
        // Kill all existing triggers to prevent conflicts on navigation
        ScrollTrigger.getAll().forEach(t => t.kill())

        const timer = setTimeout(() => {
            ScrollTrigger.refresh()

            const animations = {
                '.anim-up': { opacity: 0, y: 50 },
                '.fade-left': { opacity: 0, x: -50 },
                '.fade-right': { opacity: 0, x: 50 },
                '.appear': { opacity: 0 },
            };

            Object.entries(animations).forEach(([selector, fromVars]) => {
                gsap.utils.toArray(selector).forEach(el => {
                    gsap.from(el, {
                        ...fromVars,
                        duration: 2,
                        ease: 'power2.out',
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 75%',
                        },
                    });
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.content_text',
                    start: 'top 75%',
                }
            });

            tl.from('.content_text', { opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' })
                .from('.cta', { opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' }, '-=0.4');

            const tl_2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.amenities_header',
                    start: 'top 75%',
                }
            });

            tl_2.from('.amenities_grid-item', {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.2,
            });

        }, 500);

        return () => {
            clearTimeout(timer)
            ScrollTrigger.getAll().forEach(t => t.kill())
        };
    }, []);
}