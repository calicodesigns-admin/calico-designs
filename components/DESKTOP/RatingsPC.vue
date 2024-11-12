<template>
  <div
    class="h-max w-full overflow-x-hidden max-w-[100vw] flex flex-col gap-[6vh] py-[4vh]"
  >
    <div class="h-max w-full flex justify-center">
      <span class="text-center text-[2.8rem]">As seen on</span>
    </div>
    <div class="h-max w-full flex items-center justify-center gap-[8vw]">
      <a
        target="_blank"
        href="https://maps.app.goo.gl/G6MdfkYCnWwS5hHfA"
        class="h-max w-max flex flex-col items-center justify-center gap-[.4rem]"
      >
        <NuxtImg class="w-[6rem]" src="./icons/gmaps.svg" />

        <div class="h-max w-max flex text-[gold] text-[2rem]">
          <Icon icon="material-symbols:star-rounded" />
          <Icon icon="material-symbols:star-rounded" />
          <Icon icon="material-symbols:star-rounded" />
          <Icon icon="material-symbols:star-rounded" />
          <Icon icon="material-symbols:star-rounded" />
        </div>
      </a>
      <a
        target="_blank"
        href="https://homestars.com/companies/2941871-calico-design-renovation"
        class="h-max w-max flex flex-col items-center justify-center gap-[.4rem]"
      >
        <NuxtImg class="w-[6rem]" src="./icons/homestarsVerifiedIcon.png" />

        <!--  -->
        <div class="h-max w-max flex items-center">
          <Icon
            class="text-[gold] text-[2rem]"
            icon="material-symbols:star-rounded"
          />
          <span class="font-popins text-[1.3rem]">95% star score</span>
        </div>
      </a>
      <a
        target="_blank"
        href="https://maps.app.goo.gl/G6MdfkYCnWwS5hHfA"
        class="h-max w-max flex flex-col items-center justify-center gap-[.4rem]"
      >
        <NuxtImg class="w-[6rem]" src="./icons/gmaps.svg" />

        <div class="h-max w-max flex text-[gold] text-[2rem]">
          <Icon icon="material-symbols:star-rounded" />
          <Icon icon="material-symbols:star-rounded" />
          <Icon icon="material-symbols:star-rounded" />
          <Icon icon="material-symbols:star-rounded" />
          <Icon icon="material-symbols:star-rounded" />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<style lang="scss" scoped></style>
