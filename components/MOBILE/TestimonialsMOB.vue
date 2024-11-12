<template>
  <div
    class="h-max w-screen flex flex-col px-[4vw] gap-[4rem] py-[4rem] mt-[2rem] border-t-[2px]"
  >
    <div class="h-max w-full flex justify-center items-center">
      <span class="text-[1.4rem]">Here is what others are saying</span>
    </div>
    <div
      class="h-max w-full overflow-hidden rounded-md bg-[#222] block flex flex-col justify-between border-[2px] border-[#222]"
    >
      <div class="h-max w-full flex justify-between px-[2vw] items-center">
        <span
          class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins text-[.8rem]"
        >
          <NuxtImg class="h-[1.2rem]" src="/icons/homestarsIcon.png" alt="#" />
          Posted on HomeStars
        </span>
        <a
          target="_blank"
          href="https://homestars.com/companies/2941871-calico-design-renovation/reviews/1227840"
          class="text-[#ededed] font-popins text-[.8rem] flex items-center gap-[.4vw] hover:underline"
        >
          SOURCE
          <Icon icon="tabler:external-link" class="text-[1rem]" />
        </a>
      </div>
      <NuxtImg class="h-max w-full object-contain" src="./hRev1.png" alt="#" />
    </div>
    <div
      class="h-max w-full overflow-hidden rounded-md bg-[#222] block flex flex-col justify-between border-[2px] border-[#222]"
    >
      <div class="h-max w-full flex justify-between px-[2vw] items-center">
        <span
          class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins text-[.8rem]"
        >
          <NuxtImg class="h-[1.2rem]" src="/icons/homestarsIcon.png" alt="#" />
          Posted on HomeStars
        </span>
        <a
          target="_blank"
          href="https://homestars.com/companies/2941871-calico-design-renovation/reviews/1232961"
          class="text-[#ededed] font-popins text-[.8rem] flex items-center gap-[.4vw] hover:underline"
        >
          SOURCE
          <Icon icon="tabler:external-link" class="text-[1rem]" />
        </a>
      </div>
      <NuxtImg class="h-max w-full object-contain" src="./hRev2.png" alt="#" />
    </div>
    <div
      class="h-max w-full overflow-hidden rounded-md bg-[#222] block flex flex-col justify-between border-[2px] border-[#222]"
    >
      <div class="h-max w-full flex justify-between px-[2vw] items-center">
        <span
          class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins text-[.8rem]"
        >
          <NuxtImg class="h-[1.2rem]" src="/icons/gmaps.svg" alt="#" />
          Posted on Maps
        </span>
        <a
          target="_blank"
          href="https://maps.app.goo.gl/r6YMhYEec6PLtiaC8"
          class="text-[#ededed] font-popins text-[.8rem] flex items-center gap-[.4vw] hover:underline"
        >
          SOURCE
          <Icon icon="tabler:external-link" class="text-[1rem]" />
        </a>
      </div>
      <NuxtImg class="h-max w-full object-contain" src="./gRev1.png" alt="#" />
    </div>
    <div
      class="h-max w-full overflow-hidden rounded-md bg-[#222] block flex flex-col justify-between border-[2px] border-[#222]"
    >
      <div class="h-max w-full flex justify-between px-[2vw] items-center">
        <span
          class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins text-[.8rem]"
        >
          <NuxtImg class="h-[1.2rem]" src="/icons/gmaps.svg" alt="#" />
          Posted on Maps
        </span>
        <a
          target="_blank"
          href="https://maps.app.goo.gl/XxwXjN3Hvs53oz8d9"
          class="text-[#ededed] font-popins text-[.8rem] flex items-center gap-[.4vw] hover:underline"
        >
          SOURCE
          <Icon icon="tabler:external-link" class="text-[1rem]" />
        </a>
      </div>
      <NuxtImg class="h-max w-full object-contain" src="./gRev2.png" alt="#" />
    </div>
    <div
      class="h-max w-full overflow-hidden rounded-md bg-[#222] block flex flex-col justify-between border-[2px] border-[#222]"
    >
      <div class="h-max w-full flex justify-between px-[2vw] items-center">
        <span
          class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins text-[.8rem]"
        >
          <NuxtImg class="h-[1.2rem]" src="/icons/gmaps.svg" alt="#" />
          Posted on Maps
        </span>
        <a
          target="_blank"
          href="https://maps.app.goo.gl/udmMsCk4gasgtpDc9"
          class="text-[#ededed] font-popins text-[.8rem] flex items-center gap-[.4vw] hover:underline"
        >
          SOURCE
          <Icon icon="tabler:external-link" class="text-[1rem]" />
        </a>
      </div>
      <NuxtImg class="h-max w-full object-contain" src="./gRev3.png" alt="#" />
    </div>

    <span class="underline text-center">SEE MORE</span>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<style lang="scss" scoped></style>
