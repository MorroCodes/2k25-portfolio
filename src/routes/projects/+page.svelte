<script>
	import ProjectTeaser from './../../lib/components/ProjectTeaser.svelte';
  import ccvCover from '$lib/images/projects/ccv-cover.webp';
  import owcCover from '$lib/images/projects/owc-cover.webp';
  import nagelmackersCover from '$lib/images/projects/nagelmackers-cover.webp';
  import squashPointCover from '$lib/images/projects/squash-point.webp';

  const projects = [
    {
      title: "CCV",
      url: "/projects/ccv",
      year: "2024",
      imageSrc: ccvCover
    },
    {
      title: "Nagelmackers",
      url: "/projects/nagelmackers",
      year: "2023",
      imageSrc: nagelmackersCover
    },
    {
      title: "OneWomanCollective",
      url: "/projects/onewomancollective",
      year: "2020",
      imageSrc: owcCover
    },
    {
      title: "Squash-point",
      url: "/projects/squash-point",
      year: "2023",
      imageSrc: squashPointCover
    },
  ];
</script>

<div class="container">
  <h1 class="text-3xl sm:text-7xl md:text-8xl lg:text-9xl gsap-title">
    <span class="block clip-path-full">
      <span class="gsap-title-row">
        Projects
      </span>
    </span> 
  </h1>
  <section class="py-4 grid sm:grid-cols-2 gap-8">
  {#each projects as project }
    <ProjectTeaser 
      imageSrc={project.imageSrc} 
      year={project.year} 
      url={project.url} 
      title={project.title} 
      />
  {/each}
    </section>
</div>
