<template>
  <div class="calendar-grid">
    <template v-for="day, i in daysInWeek.short" :key="i">
      <span class="week-day" :class="{ 'weekend': day === 'sat' || day === 'sun' }" :title="daysInWeek.long[i]">
        {{ day[0].toUpperCase() }}
      </span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { weekDays } from "@/utils/date-processing";
import type { WeekFirstDay } from "@/utils/date-processing";

const props = defineProps<{
  startDay: WeekFirstDay;
}>();

const daysInWeek = weekDays[props.startDay];
</script>

<style>
.week-day {
    @apply
        w-[42px] h-[42px] rounded-full
        flex items-center justify-center
        capitalize text-center font-bold text-teal-600;
}

.week-day.weekend {
    @apply bg-sky-500/5;
}
</style>