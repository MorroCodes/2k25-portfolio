<script lang="ts">
  const experiences = [
    {
      company: "Acerta",
      contribution: "Full-stack Drupal developer",
      year: "2024 - current"
    },
    {
      company: "iO Digital",
      contribution: "Full-stack Drupal developer",
      year: "2020 - 2024"
    },
    {
      company: "Designosource",
      contribution: "Front-end developer",
      year: "2019 - 2020"
    },
  ];
</script>

<div class="container">
  <h1 class="text-3xl sm:text-7xl md:text-8xl lg:text-9xl gsap-title">
    <span class="block clip-path-full">
      <span class="gsap-title-row">
        Experience
      </span>
    </span> 
  </h1>
  <p class="prose">
    In 2020, I graduated cum laude with a bachelor's degree in Interactive Multimedia design. Since then I've had the privilege of working at several companies, each opportunity allowing me to improve my skills. I have experience working with Drupal, Laravel, SvelteKit, Alpine.js and more.
  </p>
  <div class="grid grid-cols-3">
    <div class="grid grid-cols-subgrid col-span-full py-10">
      <h6>Company</h6>
      <h6>Role</h6>
      <h6>Year</h6>
    </div>
    {#each experiences as experience }
      <div class="grid grid-cols-subgrid col-span-full py-10 border-t border-black">
        <p class="text-5xl">{experience.company}</p>
        <p class="text-xl">{experience.contribution}</p>
        <p class="text-xl">{experience.year}</p>
      </div>
    {/each}
  </div>
</div>