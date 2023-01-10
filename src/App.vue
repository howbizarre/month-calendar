<template>
  <div class="month-container w-[366px]">
    <button @click="next">Next</button>
    <meta-info :month="month" :year="year" />
    <week-days :startDay="firstDayOfTheWeek" />
    <month-days :startDay="firstDayOfTheWeek" :month="month" :year="year" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { weekDays } from "@/utils/date-processing";

/** Types */
import type { WeekFirstDay } from "@/utils/date-processing";
import type { Ref } from "vue";

/** Components */
import MetaInfo from "@/components/MetaInfo.vue";
import WeekDays from "@/components/WeekDays.vue";
import MonthDays from "@/components/MonthDays.vue";

const firstDayOfTheWeek: Ref<WeekFirstDay> = ref("monday");

const dateObject = new Date();
const currentMonth = dateObject.getMonth() + 1;
const currentYear = dateObject.getFullYear();

const month = ref(currentMonth);
const year = ref(currentYear);

function next(): void {
  month.value = month.value === 12 ? 1 : month.value + 1;
  year.value = month.value === 12 ? year.value + 1 : year.value;
  console.log(month.value, year.value);
}
</script>

<style scoped>
.month-container {
  @apply 
    bg-white dark:bg-slate-800
    ring-1 ring-zinc-900/5 dark:ring-zinc-600/25
    shadow-xl dark:shadow-zinc-800
    rounded-lg p-5;
}
</style>