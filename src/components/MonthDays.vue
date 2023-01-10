<template>
  <div class="calendar-grid">
    <template v-for="md in allDaysInMonth">
      <button class="calendar-day">
        {{ md }}
      </button>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { monthName, numberOfDaysInMonth, dayOfWeek } from "typescript-calendar-date";
import { weekDays } from "@/utils/date-processing";

import type { CalendarDate, CalendarMonth, CalendarYear } from "typescript-calendar-date";
import type { WeekFirstDay } from "@/utils/date-processing";

const props = defineProps<{
  startDay: WeekFirstDay;
  month: number;
  year: number;
}>();

const totalDaysInMonth: number = 42;
const nameOfMonth = monthName(props.month);

const viewYear: CalendarYear = {
  year: props.year
};
const viewMonth: CalendarMonth = {
  ...viewYear,
  month: nameOfMonth
};
const currentDay: CalendarDate = {
  ...viewMonth,
  day: new Date().getDate(),
};

const countDaysInViewMonth: number = numberOfDaysInMonth(viewMonth);
const countDaysInPrevMonth: number = numberOfDaysInMonth({ year: props.month === 1 ? props.year - 1 : props.year, month: monthName(props.month - 1) });
const countDaysInNextMonth: number = numberOfDaysInMonth({ year: props.month === 12 ? props.year + 1 : props.year, month: monthName(props.month + 1) });

const firstWeekDayInMonth = dayOfWeek({ ...viewMonth, day: 1 });
const daysOffsets = weekDays[props.startDay].short.indexOf(firstWeekDayInMonth);
const daysPreset = totalDaysInMonth - (daysOffsets + countDaysInViewMonth);

const allDaysInMonth = ref(new Array());

for (let i = 0; i < daysOffsets; i += 1) {
  allDaysInMonth.value.push((countDaysInPrevMonth + (i+1)) - daysOffsets);
}

for (let i = 0; i < countDaysInViewMonth; i += 1) {
  allDaysInMonth.value.push((i + 1));
}

for (let i = 0; i < daysPreset; i += 1) {
  allDaysInMonth.value.push((i + 1));
}
</script>

<style>
.calendar-day {
  @apply
    w-[42px] h-[42px]
    text-center rounded-full border-none
    transition-colors text-zinc-400 hover:bg-cyan-500/25;
}
</style>