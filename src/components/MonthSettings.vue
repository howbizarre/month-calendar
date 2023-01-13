<template>
  <template v-if="showSettings.forWeekDay || showSettings.forDate">

    <div class="animate-[dim-show_0.25s_ease-in-out_1] overflow-x-hidden overflow-y-auto fixed inset-0 z-[99] justify-center items-center flex">
      <div class="month-container w-[366px]">
        <div class="p-3">

          <template v-if="showSettings.forWeekDay">
            <h3 class="text-black dark:text-white">Set first day of the week to:</h3>
            <form class="flex flex-col">
              <label class="cursor-pointer text-black dark:text-white">
                <input type="radio" id="monday" value="monday" v-model="firstWeekDay" @change="changeFirstWeekDay" /> Monday
              </label>
              <label class="cursor-pointer text-black dark:text-white">
                <input type="radio" id="sunday" value="sunday" v-model="firstWeekDay" @change="changeFirstWeekDay" /> Sunday
              </label>
            </form>
          </template>

          <template v-if="showSettings.forDate">data</template>

          <button @click="hideSettings" class="float-right inline-block mt-2 px-2 py-[3px] bg-teal-600 text-white font-medium text-[10px] leading-relaxed uppercase rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">close</button>
        </div>
      </div>
    </div>
    <div class="opacity-50 fixed inset-0 z-[98] bg-black"></div>
  </template>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { WeekFirstDay } from "@/utils/date-processing";

const props = defineProps<{
  startDay: WeekFirstDay;
  showSettings: {
    "forWeekDay": boolean,
    "forDate": boolean
  };
}>();

const firstWeekDay = ref(props.startDay);

const emit = defineEmits(["hideSettings", "changeFirstWeekDay"]);
const hideSettings = () => emit("hideSettings");

function changeFirstWeekDay() {
  emit("changeFirstWeekDay", firstWeekDay.value);
}
</script>

<style>
@keyframes dim-show {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>