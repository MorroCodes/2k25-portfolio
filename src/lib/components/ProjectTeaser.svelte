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

    <div class="w-full relative after:absolute after:opacity-50 after:inset-0 after:bg-gradient-to-t after:from-violet-500 after:to-transparent after:transition  group-hover:after:opacity-0 mb-2">
        <ParallaxImage {imageSrc} imageWidth="1903" imageHeight="1080"/>
    </div>
    <a href="{url}" class="gsap-title inline-block text-xl border-b border-black sm:text-3xl after:absolute after:z-10 after:inset-0">
        <span class="block clip-path-full">
            <span class="gsap-title-row mb-2">
                Discover 
            </span>
        </span> 
    </a>
</article>