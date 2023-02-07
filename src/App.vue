<template>
  <VueMonthCalendar @get-date="getDate" :setEvents="setEvents" />
</template>

<script lang="ts" setup>
import { VueMonthCalendar } from "@howbizarre/vue-month-calendar";
import "@howbizarre/vue-month-calendar/dist/style.css";

const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

console.log(date.getMonth())

const setEvents = [
  { date: 28, month: currentMonth, year: currentYear },
  { date: 5, month: currentMonth + 1, year: currentYear },
  { date: 5, month: currentMonth + 1, year: currentYear },
  { date: 5, month: currentMonth + 1, year: currentYear },
  { date: 14, month: currentMonth + 1, year: currentYear },
  { date: 14, month: currentMonth + 1, year: currentYear },
  { date: 10, month: currentMonth + 1, year: currentYear },
  { date: 17, month: currentMonth + 1, year: currentYear },
  { date: 22, month: currentMonth + 1, year: currentYear },
  { date: 22, month: currentMonth + 1, year: currentYear },
  { date: 23, month: currentMonth + 1, year: currentYear },
  { date: 28, month: currentMonth + 1, year: currentYear },
  { date: 1, month: currentMonth + 2, year: currentYear },
  { date: 1, month: currentMonth + 2, year: currentYear },
  { date: 3, month: currentMonth + 2, year: currentYear }
];

function getDate(activeDate: { month: number, year: number, date: number }) {
  console.group("The returned data is:");
  console.log("Day: ", activeDate.date);
  console.log("Month: ", activeDate.month);
  console.log("Yeaar: ", activeDate.year);
  console.groupEnd();
}
</script>