<script lang="ts">
    import { onMount } from 'svelte';
	import { page } from '$app/state';
	import '../app.css';	
	import 'lenis/dist/lenis.css'
	import { scrollState, initializeScroll } from '$lib/states/scrollState.svelte';
	import { Flip } from "gsap/all";
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    import MenuLink from '$lib/components/MenuLink.svelte';
	import { contactIcon, drupalIcon, experienceIcon, githubIcon, homeIcon, linkedinIcon, projectIcon } from '$lib/icons';

	let { children } = $props();

	let menuOpen = $state(false);
	let flipState: Flip.FlipState;
	let pageTitle: string = 'Mauro Esposito - Creative Webdeveloper';


	onMount(()=> {
		initializeScroll();
	});

	function setTitleAnimations() {
		let animatedTitles = document.querySelectorAll('.gsap-title');
		animatedTitles.forEach((animatedTitle) => {
			scrollState.gsap.set(animatedTitle, { opacity: 1 });
			scrollState.gsap.from(animatedTitle.querySelectorAll('.gsap-title-row'),
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
	}

	function setFadeInAnimations() {
		let animatedElements = document.querySelectorAll('.gsap-fade-in');
		animatedElements.forEach((fadeInElement) => {

			let tl = scrollState?.gsap?.timeline({
			scrollTrigger: {
                    trigger: fadeInElement,
                    toggleActions: "restart reverse restart reverse",
                }
			});	
			tl.fromTo(fadeInElement, {
				opacity: 0,
			}, {
				opacity: 1,
				delay: 1,
				duration: 1
			}) ;
		})
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	beforeNavigate((navigation) => {
		menuOpen = false;
		flipState = Flip.getState('.gsap-flip-image');
	});

	afterNavigate((navigation) => { 
		setTitleAnimations();
		setFadeInAnimations();

		if (!navigation.from) {
			return;
		}
		if (!flipState) {
            return;
        }
		if (navigation?.to?.route.id === '/projects') {
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
			scrollState.gsap.to('#mainNavigation', {
				bottom: 0,
				duration: .7,
				ease: 'power2.inOut'
			});
			scrollState.gsap.fromTo('#mainNavigation a.menuLink', 
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
			scrollState.gsap.fromTo('#mainNavigation .gsap-social-container a', 
				{
					y: '12rem',
				},
				{
					y: 0,
					duration: .7,
					stagger: .2,
					delay: 1,
					ease: 'power2.out'
				}
		);

		} else {
			scrollState.lenis.start();
			scrollState.gsap.to('#mainNavigation a.menuLink', {
				opacity: 0,
				x: '12rem',
				ease: 'power3.in',
				duration: .4,
				stagger: -.07,
			});
			scrollState.gsap.to('#mainNavigation', {
				bottom: '100%',
				duration: .7,
				ease: 'power2.inOut',
				delay: .2
			});
		
		}
	});

</script>
<svelte:head>
    <title>{pageTitle}</title>
	<meta name="description" content="Mauro Esposito is a creative webdeveloper with experience in both Front- & Back-end applications" />
</svelte:head>
<div class="flex flex-col justify-between min-h-screen">
	<div>
		<div class="fixed bg-black top-0 left-0 right-0 bottom-full z-20 overflow-hidden" id="mainNavigation">
			<nav class="container text-white flex flex-col text-4xl sm:text-8xl pt-16 md:pt-32 gap-4 group">
				<MenuLink text="Home" page={page} icon={homeIcon} url="/" />
				<MenuLink text="Projects" page={page} icon={projectIcon} url="/projects" />
				<MenuLink text="Experience" page={page} icon={experienceIcon} url="/experience" />
				<MenuLink text="Contact" page={page} icon={contactIcon} url="/contact" />
			</nav>
			<div class="gsap-social-container absolute bottom-12 left-0 right-0 text-white">
				<div class="container flex gap-12 justify-end">
					<a class="inline-block" aria-label="LinkedIn profile" href="https://www.linkedin.com/in/mauro-esposito-dev/" target="_blank" rel="nofollow">
						{@html linkedinIcon}
					</a>
					<a class="inline-block" aria-label="GitHub profile" href="https://github.com/MorroCodes" target="_blank" rel="nofollow">
						{@html githubIcon}
					</a>
					<a class="inline-block" aria-label="Drupal.org profile" href="https://www.drupal.org/u/mauro_" target="_blank" rel="nofollow">
						{@html drupalIcon}
					</a>
				</div>
			</div>
		</div>
		<header class="fixed top-0 left-0 right-0 h-16 md:h-32 z-20 flex items-center bg-transparent mix-blend-difference">
			<nav class="container flex justify-between items-center gap-2 sm:text-xl transition duration-300 mix-blend-difference	text-white">
				<a href="/" class="visibility-none">mauroesposito.be</a>
				<div class="flex" role="navigation">
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
		<div class="h-16 md:h-32"></div>

		{@render children()}
	</div>
	<footer class="mt-8 py-8 container self-end">
		<p>&#169;{new Date().getFullYear()} - Mauro Esposito</p>
	</footer>
</div>