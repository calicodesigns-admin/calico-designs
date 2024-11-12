<template>
  <section class="h-max w-screen max-w-[100vw] overflow-x-hidden relative">
    <div class="h-max w-full font-domine max-[990px]:hidden">
      <div class="h-max w-full overflow-x-hidden relative">
        <NuxtImg
          class="absolute h-full w-full left-0 top-0 z-[-9] object-cover"
          src="/heroBG.webp"
          alt="#"
        />
        <div
          class="absolute h-full w-full left-0 top-0 z-[-8] bg-black bg-opacity-[.5]"
        ></div>
        <SubNavBarPC />
        <NavBarPC />
        <HeroPC />
      </div>
      <RatingsPC />
      <TestimonialsPC />
      <FooterPC />
    </div>
    <!-- NAV BAR -->
    <div
      class="h-max w-screen max-w-[100vw] overflow-x-hidden font-domine min-[990px]:hidden"
    >
      <div class="h-max w-full overflow-x-hidden relative">
        <NuxtImg
          class="absolute h-full w-full left-0 top-0 z-[-9] object-cover"
          src="/heroBG.webp"
          alt="#"
        />
        <div
          class="absolute h-full w-full left-0 top-0 z-[-8] bg-black bg-opacity-[.5]"
        ></div>
        <NavBarMOB />
        <HeroMOB />
      </div>
      <RatingsMOB />
      <TestimonialsMOB />
      <HeroFormMOB />
      <FooterMOB />
    </div>
  </section>
</template>

<script setup>
import RatingsPC from "~/components/DESKTOP/RatingsPC.vue";
import SubNavBarPC from "~/components/DESKTOP/SubNavBarPC.vue";
import HeroPC from "~/components/DESKTOP/HeroPC.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";
import HeroMOB from "~/components/MOBILE/HeroMOB.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import TestimonialsPC from "~/components/DESKTOP/TestimonialsPC.vue";
import FooterPC from "~/components/DESKTOP/FooterPC.vue";
import HeroFormMOB from "~/components/MOBILE/HeroFormMOB.vue";
import RatingsMOB from "~/components/MOBILE/RatingsMOB.vue";
import TestimonialsMOB from "~/components/MOBILE/TestimonialsMOB.vue";
</script>

<style>
.font-domine {
  font-family: "Domine", serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.font-popins {
  font-family: "Outfit", serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
