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