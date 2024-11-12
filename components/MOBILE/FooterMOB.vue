<template>
  <div
    class="min-[990px]:hidden overflow-hidden h-max max-w-[100vw] bg-gradient-to-t from-blue-100 to-[#fff] flex flex-col gap-[2rem] border-t-[1px] border-[#ececec] px-[6vw] pb-[2rem] pt-[2rem] font-outfit text-[#666]"
  >
    <div class="h-1/2 w-full flex justify-between flex-col gap-[4rem]">
      <div class="h-max w-max flex flex-col gap-[1rem]">
        <a href="/" class="text-[1.4rem] text-[#666] tracking-[-.4vw]"
          >Calico Designs</a
        >
        <span class="text-[.8rem] text-[#999] w-[40%]"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero
          tempore nemo quos distinctio dolorem vel dignissimos officia vitae
          obcaecati.</span
        >
      </div>
    </div>
    <div
      class="h-1/2 w-full flex flex-col gap-[3rem] text-[.8rem] justify-between items-center"
    >
      <div class="h-max w-full flex justify-start gap-[4vw]">
        <a href="/about">
          <Icon icon="mdi:instagram" class="text-[2rem]" />
        </a>
        <a href="/about">
          <Icon icon="mdi:facebook-box" class="text-[2rem]" />
        </a>
        <a href="/about">
          <Icon icon="hugeicons:new-twitter" class="text-[2rem]" />
        </a>
      </div>
      <span class="font-bold">Under Dev | Demo</span>
      <span>© 2024 Calico Designs. All rights reserved.</span>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped></style>
