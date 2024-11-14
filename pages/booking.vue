<template>
  <section>
    <!-- DESKTOP -->
    <section
      class="max-[990px]:hidden h-max w-screen max-w-[100vw] overflow-x-hidden"
    >
      <BookingNavBarPC />
      <BookingHeroPC />
    </section>
    <!-- MOBILE -->
    <section
      class="min-[990px]:hidden h-max w-screen max-w-[100vw] overflow-x-hidden"
    >
      <div class="h-max w-max bg-black"></div>
      <BookingHeroMOB />
    </section>
  </section>
</template>

<script setup>
import BookingHeroPC from "~/components/DESKTOP/BookingHeroPC.vue";
import BookingNavBarPC from "~/components/DESKTOP/BookingNavBarPC.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
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
