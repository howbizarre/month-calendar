<template>
  <div class="calendar-grid py-3">
    <div v-for="md in allDaysInMonth" class="text-center" :key="md.day + md.date + md.month + md.year">
      <button :id="`${md.day}${md.date}${md.month}${md.year}`" class="calendar-day" :class="md.day === 'sat' || md.day === 'sun' ? 'weekend' : ''">
        {{ md.date }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { monthName, numberOfDaysInMonth, dayOfWeek } from "typescript-calendar-date";
import { weekDays, totalDaysInMonthGrid } from "@/utils/date-processing";

import type { CalendarMonth, CalendarYear } from "typescript-calendar-date";
import type { WeekFirstDay } from "@/utils/date-processing";
import type { Month } from "typescript-calendar-date/dist/consts";

const props = defineProps<{
  startDay: WeekFirstDay;
  month: number;
  year: number;
}>();

type MonthArray = {
  day: string;
  date: number;
  month: Month;
  year: number;
};

const allDaysInMonth = ref(fillMonth(props.month, props.year, props.startDay));

watch(props, () => {
  allDaysInMonth.value = fillMonth(props.month, props.year, props.startDay);
});

function fillMonth(month: number, year: number, firstDayOfTheWeek: WeekFirstDay): MonthArray[] {
  const fullFiledArray = new Array();

  const nameOfMonth = monthName(month);
  const viewYear: CalendarYear = {
    year: year
  };
  const viewMonth: CalendarMonth = {
    ...viewYear,
    month: nameOfMonth
  };

  const firstWeekDayInMonth = dayOfWeek({ ...viewMonth, day: 1 });
  const countDaysInViewMonth = numberOfDaysInMonth(viewMonth);
  const countDaysInPrevMonth = numberOfDaysInMonth({ year: month === 1 ? year - 1 : year, month: monthName(month - 1) });

  const daysOffsets = weekDays[firstDayOfTheWeek].short.indexOf(firstWeekDayInMonth);
  const daysPreset = totalDaysInMonthGrid - (daysOffsets + countDaysInViewMonth);

  let dOff = daysOffsets;
  let dPrs = daysPreset < 7 ? 7 - daysPreset : 14 - daysPreset;

  for (let i = 0; i < daysOffsets; i += 1) {
    const date = (countDaysInPrevMonth + (i + 1)) - daysOffsets;
    const day = weekDays[firstDayOfTheWeek].short[i];
    const mnth = monthName(month - 1);
    const yr = month === 1 ? year - 1 : year;

    fullFiledArray.push({
      day: day,
      date: date,
      month: mnth,
      year: yr
    });
  }

  for (let i = 0; i < countDaysInViewMonth; i += 1) {
    const date = i + 1;
    const day = weekDays[firstDayOfTheWeek].short[dOff];
    const mnth = monthName(month);
    const yr = year;

    dOff = dOff > 5 ? 0 : dOff + 1;

    fullFiledArray.push({
      day: day,
      date: date,
      month: mnth,
      year: yr
    });
  }

  for (let i = 0; i < daysPreset; i += 1) {
    const date = i + 1;
    const day = weekDays[firstDayOfTheWeek].short[dPrs];
    const mnth = monthName(month + 1);
    const yr = month === 12 ? year + 1 : year;

    dPrs = dPrs > 5 ? 0 : dPrs + 1;
    
    fullFiledArray.push({
      day: day,
      date: date,
      month: mnth,
      year: yr
    });
  }

  return fullFiledArray;
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