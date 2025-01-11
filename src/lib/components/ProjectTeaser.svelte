<script>
    import ParallaxImage from '$lib/components/ParallaxImage.svelte';
    let { imageSrc, title, year, url } = $props();
</script>
<article class="relative group">
    <div class="flex justify-between flex-wrap">    
        <h2 class="gsap-title text-2xl  sm:text-5xl !normal-case">
            <span class="block clip-path-full">
                <span class="gsap-title-row">
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

    <div class="w-full relative after:absolute after:opacity-50 after:inset-0 after:bg-gradient-to-t after:from-violet-500 after:to-transparent after:transition  group-hover:after:opacity-0">
        <ParallaxImage {imageSrc}/>
    </div>
    <a href="{url}" class="inline-block text-xl border-b border-black sm:text-3xl after:absolute after:z-10 after:inset-0">
        Discover 
    </a>
</article>