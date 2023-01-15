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
            <button @click="decrementYear" class="bg-teal-600 text-white hover:bg-teal-700 w-20 rounded-l-full cursor-pointer outline-none">
              <span class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                  <path d="M384 265H128v-17h256v17z" fill="currentColor" />
                </svg>
              </span>              
            </button>

            <input type="number" v-model.number="thisYear" class="outline-none text-center w-full font-semibold text-md flex items-center bg-teal-600 text-white focus:bg-teal-700" />
            
            <button @click="incrementYear" class="bg-teal-600 text-white hover:bg-teal-700 w-20 rounded-r-full cursor-pointer">
              <span class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                  <path d="M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z" fill="currentColor" />
                </svg>
              </span>
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
import { ref, onUpdated } from "vue";
import { monthsInYear } from "@/utils/date-processing";
import type { WeekFirstDay } from "@/utils/date-processing";

const props = defineProps<{
  startDay: WeekFirstDay;
  month: number;
  year: number;
  showSettings: {
    "forWeekDay": boolean,
    "forDate": boolean
  };
}>();

const firstWeekDay = ref(props.startDay);
const thisYear = ref(props.year);

onUpdated(() => {
  thisYear.value = props.year;
});

const emit = defineEmits(["hideSettings", "changeFirstWeekDay", "decrementYear", "incrementYear"]);
const hideSettings = () => emit("hideSettings");

function changeFirstWeekDay() {
  emit("changeFirstWeekDay", firstWeekDay.value);
}

function decrementYear() {
  thisYear.value -= 1;
  emit("decrementYear", thisYear.value);
}

function incrementYear() {
  thisYear.value += 1;
  emit("incrementYear", thisYear.value);
}
</script>

<style>
@keyframes dim-show {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>