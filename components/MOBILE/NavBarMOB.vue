<template>
  <div
    class="h-max w-screen px-[4vw] py-[2rem] flex items-center justify-between font-domine"
  >
    <span class="text-[2rem] text-[#f1f1f1]">Calico Designs</span
    ><Icon
      @click="toggleMenu"
      icon="ci:hamburger"
      class="text-[2.8rem] text-[#f1f1f1]"
    />
    <div
      class="h-[58rem] w-screen fixed top-0 left-0 bg-[#333] bg-opacity-[.6] backdrop-blur-[8px] menuPageMOB invisible opacity-0 flex flex-col justify-between"
    >
      <div class="h-max w-full py-[2rem] px-[3.2vw] flex justify-between">
        <span class="text-[2rem] text-[#f1f1f1]">Calico Designs</span>
        <Icon
          @click="toggleMenu"
          icon="material-symbols:close"
          class="text-[2.8rem] text-[#f1f1f1]"
        />
      </div>

      <div class="h-max w-full flex flex-col px-[2vw] pt-[4rem]">
        <!-- <ul class="text-[1.8rem] text-white flex flex-col gap-[2rem]">
          <li class="flex items-center gap-[.8vw]">
            Home<Icon
              icon="material-symbols:arrow-outward-rounded"
              class="text-[1.8rem] text-[#fff]"
            />
          </li>
          <li class="flex items-center gap-[.8vw]">
            About<Icon
              icon="material-symbols:arrow-outward-rounded"
              class="text-[1.8rem] text-[#fff]"
            />
          </li>
          <li class="flex items-center gap-[.8vw]">
            Contact<Icon
              icon="material-symbols:arrow-outward-rounded"
              class="text-[1.8rem] text-[#fff]"
            />
          </li>
        </ul> -->
      </div>
      <div
        class="h-max w-full pb-[4rem] flex justify-center text-white font-popins"
      >
        <span>UNDER DEVELOPMENT &nbsp;|&nbsp; CALICO DESIGNS</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import gsap from "gsap";

const isMenuOpen = ref(false);
function DISABLE_SCROLL() {
  document.body.style.overflow = "hidden";
}
function ENABLE_SCROLL() {
  document.body.style.overflow = "";
}
function toggleMenu() {
  console.log("toggler");
  if (isMenuOpen.value) {
    gsap.to(".menuPageMOB", {
      autoAlpha: 0,
    });
    isMenuOpen.value = false;
    ENABLE_SCROLL();
  } else {
    gsap.to(".menuPageMOB", {
      autoAlpha: 1,
    });
    DISABLE_SCROLL();
    isMenuOpen.value = true;
  }
}
</script>

<style lang="scss" scoped></style>
