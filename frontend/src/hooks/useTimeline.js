import gsap from "gsap"
import { useEffect } from "react"
import { lenis } from "../main.jsx"

export function useTimeline() {
    useEffect(() => {
        lenis.stop()
        setTimeout(() => lenis.start(), 2000)

        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.from('.first-fade', { opacity: 0, y: 30, duration: 1.8 })
              .from('.second-fade', { opacity: 0, y: 20, duration: 1.2 }, "+=0.2")
              .from('.third-fade', { opacity: 0, y: 20, duration: 1 }, "+=0.2")
        })

        return () => ctx.revert()
    }, [])
}