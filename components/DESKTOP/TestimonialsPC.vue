<template>
  <section
    class="h-max w-full bg-gradient-to-t from-blue-100 to-white flex flex-col gap-[12vh] py-[8vh] mt-[2vh] border-t-[1px]"
  >
    <div class="h-max w-full flex items-center justify-center relative">
      <span class="text-[2.4rem]">Here is what others are saying</span>
    </div>
    <div class="h-max w-full flex justify-center">
      <!-- GOOGLE REV COL -->

      <div class="h-max w-[40%] pl-[4vw] flex flex-col items-end gap-[12vh]">
        <div class="h-max w-max overflow-hidden rounded-md bg-[#222] block">
          <div class="h-max w-full flex justify-between pr-[1vw] items-center">
            <span
              class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins"
            >
              <NuxtImg class="h-[2rem]" src="/icons/gmaps.svg" alt="#" />
              Posted on Google Maps
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
          <NuxtImg class="h-[20rem] w-full" src="./gRev1.png" alt="#" />
        </div>
        <div class="h-max w-max overflow-hidden rounded-md bg-[#222] block">
          <div class="h-max w-full flex justify-between pr-[1vw] items-center">
            <span
              class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins"
            >
              <NuxtImg class="h-[2rem]" src="/icons/gmaps.svg" alt="#" />
              Posted on Google Maps
            </span>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/XxwXjN3Hvs53oz8d9"
              class="text-[#ededed] flex items-center gap-[.4vw] font-popins text-[.8rem] hover:underline"
            >
              SOURCE
              <Icon icon="tabler:external-link" class="text-[1rem]" />
            </a>
          </div>
          <NuxtImg class="h-[24rem] w-full" src="./gRev2.png" alt="#" />
        </div>
        <div class="h-max w-max overflow-hidden rounded-md bg-[#222] block">
          <div class="h-max w-full flex justify-between pr-[1vw] items-center">
            <span
              class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins"
            >
              <NuxtImg class="h-[2rem]" src="/icons/gmaps.svg" alt="#" />
              Posted on Google Maps
            </span>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/udmMsCk4gasgtpDc9"
              class="text-[#ededed] flex items-center gap-[.4vw] font-popins text-[.8rem] hover:underline"
            >
              SOURCE
              <Icon icon="tabler:external-link" class="text-[1rem]" />
            </a>
          </div>
          <NuxtImg class="h-[32rem] w-full" src="./gRev3.png" alt="#" />
        </div>
      </div>

      <!-- HOME STARS COL -->
      <div class="h-max w-[60%] pr-[4vw] flex flex-col items-center gap-[12vh]">
        <div class="h-max w-max overflow-hidden rounded-md bg-[#222] block">
          <div class="h-max w-full flex justify-between pr-[1vw] items-center">
            <span
              class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins"
            >
              <NuxtImg
                class="h-[2rem]"
                src="/icons/homestarsIcon.png"
                alt="#"
              />
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
          <NuxtImg
            class="h-[38rem] w-full object-fit"
            src="./hRev1.png"
            alt="#"
          />
        </div>
        <div class="h-max w-max overflow-hidden rounded-md bg-[#222] block">
          <div class="h-max w-full flex justify-between pr-[1vw] items-center">
            <span
              class="w-full flex items-center justify-start gap-[.6vw] px-[1vw] py-[1vh] text-white font-popins"
            >
              <NuxtImg
                class="h-[2rem]"
                src="/icons/homestarsIcon.png"
                alt="#"
              />
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
          <NuxtImg
            class="h-[32rem] w-full object-fit"
            src="./hRev2.png"
            alt="#"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<style lang="scss" scoped></style>
