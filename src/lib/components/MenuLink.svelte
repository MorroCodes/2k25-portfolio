<script lang="ts">
    let {url, text, page, icon} = $props();
    import gsap from "gsap";
    import { onMount } from "svelte";
    let link: Element;
    let iconContainer: Element;
    let animation: gsap.core.Timeline;
    onMount(() => {
        animation = gsap.timeline({paused:true })
        animation.to(iconContainer, {
            width: getAutoWidth(),
            duration: .3
        })
    });

    function getAutoWidth() {
        return iconContainer.querySelector('svg')?.getBoundingClientRect().width;
    }


</script>

<a href="{url}" 
class="menuLink"
aria-current={page.url.pathname === '{url}'}  
bind:this={link}
onmouseenter={() => { animation.play() }}
onmouseleave={() => { animation.reverse() }}
>
    <div class="flex items-center group-hover:opacity-60 hover:!opacity-100 transition duration-300">
        <span class="icon w-0 overflow-hidden" bind:this={iconContainer}>
            {@html icon}
        </span>
        {text}
    </div>
</a>