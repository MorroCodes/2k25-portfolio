<script>
  const experiences = [
    {
      company: "Acerta",
      contribution: "Full-stack Drupal developer",
      year: "2024 - current"
    },
    {
      company: "iO digital",
      contribution: "Full-stack Drupal developer",
      year: "2020 - 2024"
    },
    {
      company: "Desingosource",
      contribution: "Front-end developer",
      year: "2019 - 2020"
    },
  ];
</script>

<div class="container">
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
  <!-- Content Sections -->
  <section id="section1" class="h-screen bg-[#FAF9F6] flex items-center justify-center">
    <h1 class="text-4xl font-bold">Light Background</h1>
  </section>

  <section id="section2" class="h-screen bg-black flex items-center justify-center">
    <h1 class="text-4xl font-bold text-white">Dark Background</h1>
  </section>

  <section id="section3" class="h-screen bg-gray-700 flex items-center justify-center">
    <h1 class="text-4xl font-bold text-white">Another Dark Section</h1>
  </section>

  <section id="section4" class="h-screen bg-[#FAF9F6] flex items-center justify-center">
    <h1 class="text-4xl font-bold">Back to Light Background</h1>
  </section>