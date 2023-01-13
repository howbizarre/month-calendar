<template>
  <template v-if="showSettings.forWeekDay || showSettings.forDate">
    <div class="animate-[dim-show_0.25s_ease-in-out_1] overflow-x-hidden overflow-y-auto fixed inset-0 z-[99] justify-center items-center flex">
      <div class="month-container w-[300px]">        

          <template v-if="showSettings.forWeekDay">
            <h3 class="text-black dark:text-white">First day of the week is <strong class="text-teal-600 dark:text-teal-500">{{ firstWeekDay[0].toUpperCase() }}{{ firstWeekDay.slice(1) }}</strong></h3>
            <form class="flex flex-col">
              <label class="cursor-pointer text-black dark:text-white">
                <input type="radio" id="monday" value="monday" v-model="firstWeekDay" @change="changeFirstWeekDay" /> Monday
              </label>
              <label class="cursor-pointer text-black dark:text-white">
                <input type="radio" id="sunday" value="sunday" v-model="firstWeekDay" @change="changeFirstWeekDay" /> Sunday
              </label>
            </form>
          </template>

          <template v-if="showSettings.forDate">
            
              <div class="flex flex-row w-full rounded-full relative mb-5">
                <button data-action="decrement" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l-full cursor-pointer outline-none">
                  <span class="m-auto text-2xl font-thin flex justify-center items-center">-</span>
                </button>
                <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" name="custom-input-number" value="0" />
                <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r-full cursor-pointer">
                  <span class="m-auto text-2xl font-thin flex justify-center items-center">+</span>
                </button>
              </div>
            
            <div class="grid grid-cols-3 gap-3 text-black dark:text-white">
              <button v-for="month in monthsInYear.short" class="btn text-[12px]">{{ month }}</button>
            </div>
          </template>

          <button @click="hideSettings" class="float-right mt-3 text-[10px] btn">close</button>        
      </div>
    </div>
    <div class="opacity-50 fixed inset-0 z-[98] bg-black"></div>
  </template>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { monthsInYear } from "@/utils/date-processing";
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