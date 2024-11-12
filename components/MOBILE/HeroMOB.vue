<template>
  <section
    class="h-max w-full flex flex-col items-center justify-center gap-[2rem] pb-[2rem]"
  >
    <div
      class="h-max w-full flex flex-col gap-[1rem] justify-start px-[4vw] pt-[2rem]"
    >
      <h1 class="text-[2.4rem] w-[64%] text-start leading-[2.8rem] text-white">
        Top Rated Kitchen Renovation in Toronto
      </h1>
      <div class="h-max w-full flex flex-col">
        <span
          class="text-[.8rem] font-popins uppercase text-[#ededed] tracking-[.1vw]"
          >What we provide:</span
        >
        <ul class="text-[#f9f9f9] flex flex-col gap-[.6rem] pt-[1rem]">
          <li class="flex items-center gap-[.4vw] text-[1rem]">
            <Icon
              class="text-green-400 text-[1.2rem]"
              icon="cuida:shield-tick-outline"
            />
            Kitchen Renovations
          </li>
          <li class="flex items-center gap-[.4vw] text-[1rem]">
            <Icon
              class="text-green-400 text-[1.2rem]"
              icon="cuida:shield-tick-outline"
            />Bathroom Renovations.
          </li>
          <li class="flex items-center gap-[.4vw] text-[1rem]">
            <Icon
              class="text-green-400 text-[1.2rem]"
              icon="cuida:shield-tick-outline"
            />Flooring.
          </li>
          <li class="flex items-center gap-[.4vw] text-[1rem]">
            <Icon
              class="text-green-400 text-[1.2rem]"
              icon="cuida:shield-tick-outline"
            />Basement Renovations.
          </li>
          <li class="flex items-center gap-[.4vw] text-[1rem]">
            <Icon
              class="text-green-400 text-[1.2rem]"
              icon="cuida:shield-tick-outline"
            />Miscellaneous Home Improvement
          </li>
        </ul>
      </div>
    </div>
    <div class="h-max w-full bg-blue-800 px-[2vw] py-[1rem] font-popins flex">
      <span
        class="flex-[1.8] text-[1rem] leading-[1.4rem] text-center text-[#f1f1f1] pr-[2vw]"
      >
        Schedule Your Free Estimate ✅ <br />
        (in less than 10 seconds below)
      </span>
      <button
        class="flex-[1] flex items-center justify-center gap-[.4vw] rounded-md border-[1px] text-[#f1f1f1] shadow-xl"
      >
        BOOK NOW <Icon icon="material-symbols:ads-click-rounded" />
      </button>
    </div>
    <!-- <div
      class="h-max w-[90%] px-[2vw] flex flex-col gap-[2rem] items-center justify-center rounded-lg bg-blue-900 py-[2rem] bg-opacity-[.8]"
    >
      <span class="text-[2rem] leading-[2rem] text-center text-[#f1f1f1]">
        Schedule Your Free Estimate in less than 10 seconds below ✅
      </span>
      <button
        class="bg-blue-600 text-[#ededed] font-popins rounded-md px-[4vw] tracking-[.2vw] text-[1.2rem] py-[1rem] flex items-center gap-[.4vw]"
      >
        BOOK NOW <Icon icon="material-symbols:ads-click-rounded" />
      </button>
    </div> -->
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<style lang="scss" scoped></style>
