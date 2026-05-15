import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenis } from "../main.jsx";

gsap.registerPlugin(ScrollTrigger);

gsap.config({ nullTargetWarn: false });

export function usePageAnimations({ lockScroll = true }) {
    useEffect(() => {
        if (lockScroll && lenis) {
            lenis.stop();
            setTimeout(() => {
                lenis.start();
            }, 2000);
        }

        const ctx = gsap.context(() => {

            const heroTl = gsap.timeline();
            heroTl.from('.first-fade', { opacity: 0, y: 30, duration: 1.8 })
                .from('.second-fade', { opacity: 0, y: 20, duration: 1.2 }, "+=0.2")
                .from('.third-fade', { opacity: 0, y: 20, duration: 1 }, "+=0.2");

            const utils = [
                { cls: '.anim-up', vars: { y: 50 } },
                { cls: '.fade-left', vars: { x: -50 } },
                { cls: '.fade-right', vars: { x: 50 } },
                { cls: '.appear', vars: {} }
            ];

            utils.forEach(({ cls, vars }) => {
                gsap.utils.toArray(cls).forEach(el => {
                    gsap.from(el, {
                        ...vars,
                        opacity: 0,
                        duration: 1.2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                        }
                    });
                });
            });

            const textTl = gsap.timeline({ scrollTrigger: { trigger: '.content_text', start: 'top 75%' } });
            textTl.from('.content_text', { opacity: 0, y: 50, duration: 0.8 })
                .from('.cta', { opacity: 0, y: 50, duration: 0.8 }, '-=0.4');

            const amenitiesTl = gsap.timeline({ scrollTrigger: { trigger: '.amenities_header', start: 'top 75%' } });
            amenitiesTl.from('.amenities_grid-item', { opacity: 0, y: 50, duration: 0.8, stagger: 0.15 });

            const amenitiesTl2 = gsap.timeline({ scrollTrigger: { trigger: '.amenities_facilities_grid', start: 'top 75%' } });
            amenitiesTl2.from('.amenities_facilities_grid_item', { opacity: 0, y: 50, duration: 0.8, stagger: 0.15 });

            const contactTl1 = gsap.timeline({ scrollTrigger: { trigger: '.contact_card_grid', start: 'top 55%' } });
            contactTl1.from('.contact_card', { opacity: 0, y: 50, duration: 0.8, stagger: 0.15 });

        });

        const refreshTriggers = () => {
            ScrollTrigger.refresh();
        };

        if (document.readyState === 'complete') {
            refreshTriggers();
        } else {
            window.addEventListener('load', refreshTriggers);
        }

        return () => {
            ctx.revert();
            window.removeEventListener('load', refreshTriggers);
        };
    }, []);
}