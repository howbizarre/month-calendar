<script lang="ts" setup>
import { VueMonthCalendar } from "@howbizarre/vue-month-calendar";
import "@howbizarre/vue-month-calendar/dist/style.css";

const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

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

function changeYear(yearValue: number): void {
  console.log("Change Year to: ", yearValue);
}

function changeMonth(monthValue: number): void {
  console.log("Change Month to: ", monthValue);
}

function decrementYear(decYear: number): void {
  console.log("Decrement Year: ", decYear);
}

function incrementYear(incYear: number): void {
  console.log("Increment Year: ", incYear);
}

function nextMonth(nextMonth: number): void {
  console.log("Next Month: ", nextMonth);
}

function prevMonth(prevMonth: number): void {
  console.log("Previous Month: ", prevMonth);
}

function resetMonth(resetMonth: number): void {
  console.log("Reset Month: ", resetMonth);
}

function changeFirstWeekDay(firstWeekDay: number): void {
  console.log("Change First Week Day: ", firstWeekDay);
}
</script>

<template>
  <VueMonthCalendar
                    @get-date="getDate"
                    @change-year="changeYear"
                    @change-month="changeMonth"
                    @decrement-year="decrementYear"
                    @increment-year="incrementYear"
                    @next-month="nextMonth"
                    @prev-month="prevMonth"
                    @reset-month="resetMonth"
                    @change-first-week-day="changeFirstWeekDay"

                    :setEvents="setEvents" />
</template>

<style>
:root {
  --white: #fefefe;
  --black: #3c3c3c;

  --zinc-400: #a1a1aa;
  --zinc-600: #52525b;
  --zinc-600-25: #52525b25;
  --zinc-800: #27272a;
  --zinc-900: #18181b;
  --zinc-900-5: #18181b05;
  --zinc-900-50: #18181b50;

  --teal-400: #2dd4bf;
  --teal-500: #14b8a6;
  --teal-500-25: #14b8a625;
  --teal-600: #0891b2;
  --teal-600-50: #0891b250;
  --teal-700: #0e7490;
  --teal-800: #155e75;

  --sky-500: #0ea5e9;
  --sky-500-5: #0ea5e905;
  --sky-500-25: #0ea5e925;

  --blue-600: #c93b10;

  --container-sm-w: 420px;
}
</style>