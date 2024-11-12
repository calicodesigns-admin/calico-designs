<template>
  <div
    class="h-max w-screen flex justify-evenly items-center bg-black bg-opacity-[.2] py-[8vh]"
  >
    <div class="h-max w-max flex flex-col gap-[8vh]">
      <div class="h-max w-max flex flex-col gap-[4vh]">
        <h1 class="text-[3.2rem] leading-[7.8vh] text-[#f1f1f1]">
          <span
            >Top Rated Kitchen <br />
            Renovation in</span
          >
          Toronto
        </h1>
        <div class="h-max w-max flex flex-col gap-[4vh]">
          <span
            class="text-[1rem] font-popins uppercase text-[#ededed] tracking-[.1vw]"
            >What we provide:</span
          >
          <ul class="text-[#f9f9f9] flex flex-col gap-[1vh]">
            <li class="flex items-center gap-[.4vw] text-[1.2rem]">
              <Icon
                class="text-green-400 text-[1.8rem]"
                icon="cuida:shield-tick-outline"
              />
              Kitchen Renovations
            </li>
            <li class="flex items-center gap-[.4vw] text-[1.2rem]">
              <Icon
                class="text-green-400 text-[1.8rem]"
                icon="cuida:shield-tick-outline"
              />Bathroom Renovations.
            </li>
            <li class="flex items-center gap-[.4vw] text-[1.2rem]">
              <Icon
                class="text-green-400 text-[1.8rem]"
                icon="cuida:shield-tick-outline"
              />Flooring.
            </li>
            <li class="flex items-center gap-[.4vw] text-[1.2rem]">
              <Icon
                class="text-green-400 text-[1.8rem]"
                icon="cuida:shield-tick-outline"
              />Basement Renovations.
            </li>
            <li class="flex items-center gap-[.4vw] text-[1.2rem]">
              <Icon
                class="text-green-400 text-[1.8rem]"
                icon="cuida:shield-tick-outline"
              />Miscellaneous Home Improvement
            </li>
          </ul>
        </div>
      </div>

      <div class=""></div>
    </div>
    <ContactForm />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import ContactForm from "./HeroFormPC.vue";
</script>

<style lang="scss" scoped></style>
