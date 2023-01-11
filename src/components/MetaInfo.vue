<template>
  <h1 class="p-3 text-center capitalize text-3xl font-serif text-teal-600">{{ monthName(month) }} {{ year }}</h1>
</template>

<script lang="ts" setup>
import { monthName } from "typescript-calendar-date";

const props = defineProps<{
  month: number;
  year: number;
}>();
</script>