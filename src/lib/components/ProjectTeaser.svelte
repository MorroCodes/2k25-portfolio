<script>
    import ParallaxImage from '$lib/components/ParallaxImage.svelte';
    let { imageSrc, title, year, url } = $props();
</script>
<article class="relative group mt-2">
    <div class="flex justify-between flex-wrap items-center">    
        <h2 class="gsap-title text-2xl sm:text-5xl md:text-2xl lg:text-4xl xl:text-5xl !normal-case">
            <span class="block clip-path-full">
                <span class="gsap-title-row mb-2">
                    {title}
                </span>
            </span> 
        </h2>
        <p class="gsap-title text-2xl">
            <span class="block clip-path-full">
                <span class="gsap-title-row">
                    {year}
                </span>
            </span> 
        </p>
    </div>

    <div class="w-full relative mb-2">
        <ParallaxImage {imageSrc} imageWidth="1903" imageHeight="1080"/>
        <div class="gsap-fade-in absolute opacity-50 inset-0">
            <div class="w-full h-full opacity-50 bg-gradient-to-t from-violet-500 to-transparent transition group-hover:opacity-0"></div>
        </div>
    </div>
    <a href="{url}" class="gsap-fade-in after:transform-none inline-flex gap-2 items-center text-xl border-b border-black sm:text-3xl after:absolute after:z-10 after:inset-0">
        Discover 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    </a>
</article>