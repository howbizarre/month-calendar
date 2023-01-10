<template>
    <div class="container">
        <div class="month-container">
          <week-days :startDay="firstDayOfTheWeek" />
          <month-days :startDay="firstDayOfTheWeek" :month="month" :year="year" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { weekDays } from "@/utils/date-processing";

/** Types */
import type { WeekFirstDay } from "@/utils/date-processing";
import type { Ref } from "vue";

/** Components */
import WeekDays from "@/components/WeekDays.vue";
import MonthDays from "@/components/MonthDays.vue";

const firstDayOfTheWeek: Ref<WeekFirstDay> = ref("monday");

const dateObject: Date = new Date();
const month: number = 2;//dateObject.getMonth() + 1;
const year: number = 2023;//dateObject.getFullYear();
</script>

<style scoped>
.month-container {
  @apply 
    bg-white dark:bg-slate-800
    ring-1 ring-zinc-900/5 dark:ring-zinc-600/25
    shadow-xl dark:shadow-zinc-800
    rounded-lg px-6 py-8;
}
</style>