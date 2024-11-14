<template>
  <div></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(async () => {
  try {
    // Call the API to confirm the booking
    const response = await fetch("/api/confirm-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error confirming booking: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Booking confirmed:", data.message);
  } catch (err) {
    console.error("Unexpected error:", err);
  }
});
</script>

<style lang="scss" scoped></style>
