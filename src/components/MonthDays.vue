<template>
  <div class="calendar-grid">
    <div v-for="md in allDaysInMonth" class="text-center">
      <button class="calendar-day" :class="md.day === 'sat' || md.day === 'sun' ? 'weekend' : ''">
        {{ md.date }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { monthName, numberOfDaysInMonth, dayOfWeek } from "typescript-calendar-date";
import { weekDays, totalDaysInMonthGrid } from "@/utils/date-processing";

import type { CalendarDate, CalendarMonth, CalendarYear } from "typescript-calendar-date";
import type { WeekFirstDay } from "@/utils/date-processing";

const props = defineProps<{
  startDay: WeekFirstDay;
  month: number;
  year: number;
}>();

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
const daysPreset = totalDaysInMonthGrid - (daysOffsets + countDaysInViewMonth);

const allDaysInMonth = ref(new Array());

let dOff = daysOffsets;
let dPrs = 7 - daysPreset;

for (let i = 0; i < daysOffsets; i += 1) {
  const date = (countDaysInPrevMonth + (i + 1)) - daysOffsets;
  const day = weekDays[props.startDay].short[i];
  const month = monthName(props.month - 1);
  const year = props.month === 1 ? props.year - 1 : props.year;

  allDaysInMonth.value.push({
    day: day,
    date: date,
    month: month,
    year: year  
  });
}

for (let i = 0; i < countDaysInViewMonth; i += 1) {
  const date = i + 1;
  const day = weekDays[props.startDay].short[dOff];
  const month = monthName(props.month);
  const year = props.year;

  dOff = dOff > 5 ? 0 : dOff + 1;

  allDaysInMonth.value.push({
    day: day,
    date: date,
    month: month,
    year: year
  });
}

for (let i = 0; i < daysPreset; i += 1) {
  const date = i + 1;
  const day = weekDays[props.startDay].short[dPrs];
  const month = monthName(props.month + 1);
  const year = props.month === 12 ? props.year + 1 : props.year;

  dPrs = dPrs > 5 ? 0 : dPrs + 1;

  allDaysInMonth.value.push({
    day: day,
    date: date,
    month: month,
    year: year
  });
}
</script>

<style>
.calendar-day {
  @apply
    w-[42px] h-[42px]
    text-center rounded-full border-none
    transition-colors text-zinc-400 hover:bg-cyan-500/25;
}

.calendar-day.weekend {
    @apply bg-sky-500/5 hover:bg-cyan-500/25;
}
</style>