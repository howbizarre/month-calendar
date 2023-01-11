<template>
  <div class="month-container w-[366px]">
    <div class="grid grid-cols-5 p-3">
      <month-info :month="month" :year="year" :class="`col-span-3`" />
      <month-actions @prev-month="prevMonth" @next-month="nextMonth" @reset-month="resetMonth" :class="`col-span-2`" />
    </div>
    <week-days :startDay="firstDayOfTheWeek" />
    <month-days :startDay="firstDayOfTheWeek" :month="month" :year="year" @activate-date="activateDate" :activeDay="active" />
    <month-label :month="active.month" :year="active.year" :date="active.date" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { weekDays } from "@/utils/date-processing";
import { monthNumber } from "typescript-calendar-date";

/** Types */
import type { WeekFirstDay, Month } from "@/utils/date-processing";
import type { Ref } from "vue";

/** Components */
import MonthInfo from "@/components/MonthInfo.vue";
import WeekDays from "@/components/WeekDays.vue";
import MonthDays from "@/components/MonthDays.vue";
import MonthActions from "@/components/MonthActions.vue";
import MonthLabel from "@/components/MonthLabel.vue";

const firstDayOfTheWeek: Ref<WeekFirstDay> = ref("monday");

const dateObject = new Date();
const currentMonth = dateObject.getMonth() + 1;
const currentYear = dateObject.getFullYear();
const currentDate = dateObject.getDate();

const month = ref(currentMonth);
const year = ref(currentYear);
const date = ref(currentDate);

const active = reactive({
  month: ref(currentMonth),
  year: ref(currentYear),
  date: ref(currentDate)
});

function activateDate(date: number, month: Month, year: number) {
  const mnt = monthNumber(month);

  active.month = mnt;
  active.year = year;
  active.date = date;
}

function nextMonth(): void {
  year.value = month.value === 12 ? year.value + 1 : year.value;
  month.value = month.value === 12 ? 1 : month.value + 1;
}

function prevMonth(): void {
  year.value = month.value === 1 ? year.value - 1 : year.value;
  month.value = month.value === 1 ? 12 : month.value - 1;
}

function resetMonth(): void {
  year.value = currentYear;
  month.value = currentMonth;
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