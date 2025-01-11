<script lang="ts">
    import { onMount } from 'svelte';
	import { page } from '$app/state';
	import '../app.css';	
	import 'lenis/dist/lenis.css'
	import { scrollState, initializeScroll } from '$lib/states/scrollState.svelte';
	import gsap from "gsap";
	import { Flip } from "gsap/all";
    import { afterNavigate, beforeNavigate } from '$app/navigation';

	let { children } = $props();

	let menuOpen = $state(false);
	let titlesHaveAnimated = $state(false);
	onMount(()=> {
		initializeScroll();
		setTitleAnimations();
	});



	function setTitleAnimations() {
		if (titlesHaveAnimated === true) {
			return;
		}
		let animatedTitles = document.querySelectorAll('.gsap-title');
		animatedTitles.forEach((animatedTitle) => {
			gsap.set(animatedTitle, { opacity: 1 });
			gsap.from(animatedTitle.querySelectorAll('.gsap-title-row'),
			{
                y: '12rem', 
                rotate: '5deg',
				delay: .3,
				lazy: false,
				duration: .6,
				ease: "power2.out",
				stagger: .2,
				scrollTrigger: {
					trigger: animatedTitle,
					toggleActions: "restart reverse restart reverse",
				}
            }
		);
		});
		titlesHaveAnimated = true;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
    let flipState: Flip.FlipState;

	beforeNavigate((navigation) => {
		menuOpen = false;
		titlesHaveAnimated = false;
		flipState = Flip.getState('.gsap-flip-image');
		console.log(navigation);
		console.log(flipState);;
	});

	afterNavigate((navigation) => { 
		setTitleAnimations();
		if (!navigation.from) {
			return;
		}
		if (!flipState) {
            return;
        }
		Flip.from(flipState, {
			targets: '.gsap-flip-image',
			duration: .5,
			scale: true,
			ease: 'power3.out',
			absolute: true
		})
	});

	$effect(() => {

		if (menuOpen) {
			scrollState.lenis.stop();
			gsap.to('#mainNavigation', {
				bottom: 0,
				duration: .7,
				ease: 'power2.inOut'
			});
			gsap.fromTo('#mainNavigation a', 
				{
					opacity: 0,
					x: '-12rem',
				},
				{
					opacity: 1,
					x: 0,
					ease: 'power3.out',
					duration: .5,
					stagger: .07,
					delay: .4
				}
			);

		} else {
			scrollState.lenis.start();
			gsap.to('#mainNavigation a', {
				opacity: 0,
				x: '12rem',
				ease: 'power3.in',
				duration: .4,
				stagger: -.07,
			});
			gsap.to('#mainNavigation', {
				bottom: '100%',
				duration: .7,
				ease: 'power2.inOut',
				delay: .2
			});
		
		}
	});

</script>
<div class="fixed bg-black top-0 left-0 right-0 bottom-full z-20 overflow-hidden" id="mainNavigation">
	<nav class="container text-white flex flex-col text-4xl sm:text-8xl pt-16 md:pt-32 gap-4">
		<a href="/" aria-current={page.url.pathname === '/'} class="flex items-center gap-4">
			<svg class="size-8 md:size-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
			</svg>			  
			Home
		</a>

		<a href="/projects" aria-current={page.url.pathname === '/projects'} class="flex items-center gap-4">
			<svg class="size-8 md:size-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
				<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
			</svg>
			  Projects
		</a>
		
		<a href="/experience" aria-current={page.url.pathname === '/experience'} class="flex items-center gap-4">
			<svg class="size-8 md:size-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
			</svg>			  
			Experience
		</a>
		<a href="/contact" aria-current={page.url.pathname === '/about'} class="flex items-center gap-4">
			<svg class="size-8 md:size-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
			  </svg>
			Contact
		</a>
	</nav>
</div>
<header class="sticky top-0 h-16 md:h-32 z-20 flex items-center bg-transparent mix-blend-difference">
	<nav class="container flex justify-between items-center gap-2 sm:text-xl transition duration-300 mix-blend-difference	text-white">
		<a href="/" class="visibility-none">mauroesposito.be</a>
		<div class="flex">
			<button onclick="{toggleMenu}" class="pr-2 md:pr-4">
				Menu
			</button>
			<div onclick="{toggleMenu}" class="flex items-center burger {menuOpen ? 'active': ''}" >
				<div class="line top"></div>
				<div class="line middle"></div>
				<div class="line bottom"></div>
			</div>
		</div>
	</nav>
</header>

{@render children()}

<footer class="mt-8 py-8 container">
	<p>&#169;{new Date().getFullYear()} - Mauro Esposito</p>
</footer>