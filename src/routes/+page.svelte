
<script>
    import { onMount } from "svelte";
    import photo from '$lib/images/photo.jpg';
    import ParallaxImage from "$lib/components/ParallaxImage.svelte";

    let currentDate = new Date();
    let birthDate = new Date('1998-11-26T07:00Z');
    let dateDifference = currentDate - birthDate;

    let ageInSeconds = $state(Math.round(dateDifference / 1000));

    function countAge() {
        ageInSeconds++;
        setTimeout(countAge, 1000);
    }

    onMount(() => {
        countAge();
    });
</script>
<div class="container h-screen">
    <div class="min-h-full w-full relative">
        <h1 class="text-3xl sm:text-7xl md:text-8xl lg:text-9xl font-display gsap-title">
            <span class="block clip-path-full">
                <span class="gsap-title-row">Creative</span>
            </span>
            <span class="block clip-path-full">
                <span class="gsap-title-row">webdeveloper</span>
            </span>
        </h1>
        <div class="w-96 h-96 max-w-full">
            <ParallaxImage imageSrc={photo}/>
        </div>
        <h2 class="text-3xl sm:text-7xl md:text-8xl lg:text-9xl absolute bottom-32 right-0 text-right font-display gsap-title">
            <span class="block clip-path-full">
                <span class="gsap-title-row">
                    Mauro
                </span>
            </span> 
            <span class="block clip-path-full">
                <span class="gsap-title-row">Esposito</span>
            </span>
		</h2>
    </div>
</div>

<div class="container mt-16">
    <h2 class="text-8xl font-display gsap-title">
        <span class="block clip-path-full">
            <span class="gsap-title-row">Get to know me</span>
        </span>
    </h2>
    <div>
        <p class="text-7xl font-display gsap-title">
            <span class="block clip-path-full">
                <span class="gsap-title-row">{ageInSeconds}</span>
            </span>
        </p>
        <p class="prose-xl max-w-96">The number of seconds I've been on this planet. I started making websites when I was 14. They were bad.</p>
    </div>
    <div>
        <p class="text-7xl font-display gsap-title">
            <span class="block clip-path-full">
                <span class="gsap-title-row">Creative?</span>
            </span>
        </p>
        <p class="prose-xl max-w-96">I've always enjoyed creating things. Sadly, I'm no good with my hands. That's why I mostly stick to my computer.</p>
    </div>
    <div>
        <p class="text-7xl font-display gsap-title">
            <span class="block clip-path-full">
                <span class="gsap-title-row">Function > Form</span>
            </span>
        </p>
        <p class="prose-xl max-w-96">I'm the first to acknowledge a good aesthetic. Yet, I like it when the things I create are more than just good looking eye candy. Design should follow the function of a product. Aesthetic should never get in the way of functionality.</p>
    </div>
</div>
