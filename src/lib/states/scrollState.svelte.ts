import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export let scrollState = $state({
    lenis: null,
    gsap: null
});


export function initializeScroll() {
    if (scrollState.lenis && scrollState) {
        return;
    }
    scrollState.gsap = gsap;

    scrollState.gsap.registerPlugin(ScrollTrigger);

    scrollState.lenis = new Lenis({
        smooth: true
    });


    // Listen for the scroll event and log the event data
    scrollState.lenis.on('scroll', ScrollTrigger.update());


    scrollState.gsap.ticker.add((time) => {
        scrollState.lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });
    
    
    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    scrollState.gsap.ticker.lagSmoothing(0);
    
}