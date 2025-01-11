<script>
    import imageSrc from '$lib/images/projects/ccv-cover.webp';
    import { initializeScroll } from '$lib/states/scrollState.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        initializeScroll();
    });
    
</script>
<section class="container">
    <a href="/projects" class="flex items-center gap-2"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.49 12 3.74 8.248m0 0 3.75-3.75m-3.75 3.75h16.5V19.5" />
        </svg>          
        Back to overview
    </a>
    <h1 class="text-3xl sm:text-7xl md:text-8xl lg:text-9xl gsap-title">
        <span class="block clip-path-full">
          <span class="gsap-title-row">
            CCV
          </span>
        </span> 
      </h1>
      <ul class="grid grid-cols-2 gap-2 text-xl mb-4">
        <li>Year: 2024</li>
        <li>Technologies: Drupal, Alpine.js, TailwindCSS</li>
        <li>Role: Full-stack developer @ iO digital</li>
        <li>
            <a 
            href="https://www.ccv.eu/" 
            rel="nofollow" class="inline-flex items-center gap-2 border-b border-black"
            target="_blank"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Visit live site
            </a>
        </li>
      </ul>
      <img 
      class= "gsap-flip-image w-full" 
      src="{imageSrc}" 
      alt="CCV website"
      data-flip-id="{imageSrc}"
      width="1903" height="1080"
      >
</section>