<script lang="ts">
    import { onMount } from "svelte";
    import { scrollState, initializeScroll } from "$lib/states/scrollState.svelte";

    let { imageSrc, imageWidth='auto', imageHeight='auto', imageAlt='' } = $props();
    let imageContainer: Element;

    onMount(() => {
        initializeScroll();
        animateIn();
        animateParallax();
    });

    function animateIn() {
        scrollState.gsap.set(imageContainer, { clipPath: "polygon(0 0, 100% 0%, 0 0, 0 0)", opacity: 1});

        let tl = scrollState.gsap.timeline(
            { 
                scrollTrigger: {
                    trigger: imageContainer,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: "restart reverse restart reverse",
                }
             }
        );
        tl.to(imageContainer, {
            clipPath: "polygon(0 0, 100% 0%, 0 100%, 0% 100%)",
            duration: .5,
            delay: .5,
            ease: "power3.inOut"
        });
        tl.to(imageContainer, {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
            duration: .5,
            ease: "power3.inOut"
        });
        
        tl.play();

    }

    function animateParallax() {
        scrollState.gsap.to(
            imageContainer.querySelector('img'),
            {
                scrollTrigger: {
                    trigger: imageContainer,
                    scrub: 1,
                    start: "top bottom", // Adjust start position
                    end: "bottom top", // Adjust end position
                },
                yPercent: -20,
                ease: "none"
            }
        )
	}
</script>

<div bind:this={imageContainer} class="gsap-image w-full h-full overflow-hidden grayscale hover:grayscale-0 group-hover:grayscale-0 transition duration-500 opacity-0" >
    <div class="scale-125 hover:scale-100 group-hover:scale-100 transition duration-500 origin-top">
        <img 
        src="{imageSrc}" 
        alt="{imageAlt}" 
        class="gsap-flip-image w-full group-hover:transition-transform group-hover:!translate-y-0"
        data-flip-id="{imageSrc}"
        width="{imageWidth}"
        height="{imageHeight}"
        />
    </div>
</div>