<template>
  <section class="h-max max-w-[100vw] overflow-x-hidden pt-[4rem]">
    <div class="h-max w-full flex justify-center items-center"></div>
    <div class="h-max w-max relative px-[4vw]">
      <!-- #1 -->
      <div
        class="h-max w-[92vw] px-[2vw] py-[1.8rem] rounded-md relative z-[1] overflow-hidden font-popins"
      >
        <NuxtImg
          class="absolute h-full w-full left-0 top-0 z-[-1] object-right object-cover"
          src="/paperBG.webp"
          alt="#"
        />
        <div class="h-max w-full px-[2vw]">
          <h2 class="text-[1.4rem] font-bold text-center mb-6 font-popins">
            Let us know about your needs
          </h2>
        </div>
        <form
          @submit.prevent="submitForm"
          class="h-max w-full flex flex-col gap-[1rem]"
        >
          <div
            class="h-max w-full flex flex-col gap-[1rem] justify-between px-[2vw]"
          >
            <!-- Name Input -->
            <div class="mb-[rem] w-[100%]">
              <label
                for="name"
                class="block text-gray-700 text-[1rem] font-[500]"
                >Name:</label
              >
              <input
                placeholder="Your full name"
                type="text"
                id="name"
                v-model="name"
                required
                class="w-full px-[1vw] text-[.8rem] py-2 border-[1.8px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <!-- phone Input -->
            <div class="h-max w-[100%]">
              <label for="phone" class="text-gray-700 text-[1rem] font-[500]"
                >Phone:</label
              >
              <input
                placeholder="Your best phone Number"
                type="number"
                id="phone"
                v-model="phone"
                required
                class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full px-[1vw] text-[.8rem] py-2 border-[1.8px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Project Details Input -->
          <div class="px-[2vw]">
            <label
              for="details"
              class="block text-gray-700 text-[1rem] font-[500]"
              >Project Details:</label
            >
            <textarea
              placeholder="Briefly describe your project (e.g., kitchen remodel, flooring upgrade) so we can better understand your needs."
              id="details"
              v-model="details"
              required
              class="min-h-[6rem] w-full px-[1vw] py-2 border-[1.8px] text-[.8rem] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="h-max w-full px-[2vw] pt-[1rem]">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="font-popins text-[1rem] w-full py-[.8rem] bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-[.2s] hover:shadow-xl ease-in-out disabled:bg-gray-400 uppercase tracking-[.1vw]"
            >
              Submit
            </button>
          </div>
        </form>

        <!-- Success or error message -->
        <div v-if="message" class="mt-4">
          <p :class="messageClass" class="text-center">{{ message }}</p>
        </div>
      </div>

      <!-- #2 -->
    </div>
    <div
      v-if="isCalendlyActive"
      class="h-screen min-w-[100vw] overflow-x-hidden fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-[.6] backdrop-blur-[8px] z-[999]"
    >
      <button
        @click="closeCalendly"
        class="fixed top-[4vh] right-[5vw] text-white"
      >
        CLOSE
      </button>
      <CalendlyInlineWidget
        v-bind="options"
        class="w-[100vw] h-[40vh] overflow-x-hidden"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const phone = ref();
const details = ref("");
const isCalendlyActive = ref(false);

const isSubmitting = ref(false);
const message = ref("");
const messageClass = ref("text-green-500");

const options = {
  url: "https://calendly.com/calicodesignsweb/30min",
};

function closeCalendly() {
  isCalendlyActive.value = false;
  document.body.style.overflow = "";
  document.body.style.overflowX = "hidden";
}

const submitForm = async () => {
  isSubmitting.value = true;
  message.value = "";

  try {
    const formData = {
      name: name.value,
      phone: phone.value,
      project_details: details.value,
    };

    console.log(formData);
    // Send the POST request to your API
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        project_details: formData.project_details,
      }),
    });
    if (response.ok) {
      message.value = "Form submitted successfully!";
      messageClass.value = "text-green-500"; // Green for success
      router.push("/booking");
      document.body.style.overflow = "hidden";
    } else {
      message.value = "An error occurred while submitting the form.";
      messageClass.value = "text-red-500"; // Red for error
    }
  } catch (error) {
    console.error("Error during form submission:", error);
    message.value = "An error occurred while submitting the form.";
    messageClass.value = "text-red-500"; // Red for error
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Optional: You can include additional styles if necessary */
</style>
