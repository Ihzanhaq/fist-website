import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register once, centrally.
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
