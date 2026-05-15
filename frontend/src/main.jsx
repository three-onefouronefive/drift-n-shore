import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App.jsx'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { BrowserRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';

window.gsap = gsap
window.ScrollTrigger = ScrollTrigger 

gsap.registerPlugin(ScrollTrigger)

export const lenis = new Lenis({
  lerp: 0.04,
  wheelMultiplier: 0.8,
  smoothWheel: true,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)