<template>
  <month-base>
    <template #header>
      <div class="grid grid-cols-5 p-3">
        <month-info :month="month" :year="year" :class="`col-span-3`" />
        <month-actions @prev-month="prevMonth" @next-month="nextMonth" @reset-month="resetMonth" :canBeReseted="canBeReseted" :class="`col-span-2`" />
      </div>
    </template>

    <template #default>
      <month-week :startDay="firstDayOfTheWeek" />
      <month-days :startDay="firstDayOfTheWeek" :month="month" :year="year" @activate-date="activateDate" :activeDay="active" />
    </template>

    <template #footer>
      <month-label :month="active.month" :year="active.year" :date="active.date" @reset-active-date="resetActiveDate" />
    </template>
  </month-base>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { monthNumber } from "typescript-calendar-date";

/** Types */
import type { WeekFirstDay, Month } from "@/utils/date-processing";
import type { Ref } from "vue";

/** Components */
import MonthBase from "@/components/MonthBase.vue";
import MonthInfo from "@/components/MonthInfo.vue";
import MonthWeek from "@/components/MonthWeek.vue";
import MonthDays from "@/components/MonthDays.vue";
import MonthLabel from "@/components/MonthLabel.vue";
import MonthActions from "@/components/MonthActions.vue";

const firstDayOfTheWeek: Ref<WeekFirstDay> = ref("monday");

const dateObject = new Date();
const currentMonth = dateObject.getMonth() + 1;
const currentYear = dateObject.getFullYear();
const currentDate = dateObject.getDate();

const month = ref(currentMonth);
const year = ref(currentYear);

/** The selected active date. If none is selected - the current date is selected. */
const active = reactive({
  month: ref(currentMonth),
  year: ref(currentYear),
  date: ref(currentDate)
});

/** Reset month to initial state */
const canBeReseted = ref(false);

function activateDate(date: number, month: Month, year: number): void {
  const mnt = monthNumber(month);

  active.month = mnt;
  active.year = year;
  active.date = date;
}

function nextMonth(): void {
  year.value = month.value === 12 ? year.value + 1 : year.value;
  month.value = month.value === 12 ? 1 : month.value + 1;

  canBeReseted.value = year.value === currentYear && month.value === currentMonth ? false : true;
}

function prevMonth(): void {
  year.value = month.value === 1 ? year.value - 1 : year.value;
  month.value = month.value === 1 ? 12 : month.value - 1;

  canBeReseted.value = year.value === currentYear && month.value === currentMonth ? false : true;
}

function resetMonth(): void {
  year.value = currentYear;
  month.value = currentMonth;

  canBeReseted.value = false;
}

function resetActiveDate(): void {
  active.month = currentMonth;
  active.year = currentYear;
  active.date = currentDate;
}
</script>