<template>
  <div class="h-max w-full flex justify-center">
    <CalendlyInlineWidget
      v-bind="options"
      class="w-[100vw] h-[40vh] overflow-x-hidden"
    />
  </div>
</template>

<script setup>
const options = {
  url: "https://calendly.com/calicodesignsweb/30min",
};
</script>

<style lang="scss" scoped></style>
