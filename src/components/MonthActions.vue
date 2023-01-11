<template>
    <div class="flex justify-between">
      <button @click="prevMonth">
        <svg width="24" height="24" viewBox="0 0 256 256" class="action-icon">
          <path fill="currentColor" d="m120 32l-96 96l96 96v-48h32V80h-32V32z" opacity=".2" />
          <path fill="currentColor" d="M152 72h-24V32a8 8 0 0 0-4.9-7.4a8.4 8.4 0 0 0-8.8 1.7l-96 96a8.1 8.1 0 0 0 0 11.4l96 96a8.3 8.3 0 0 0 5.7 2.3a8.5 8.5 0 0 0 3.1-.6a8 8 0 0 0 4.9-7.4v-40h24a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8Zm-8 96h-24a8 8 0 0 0-8 8v28.7L35.3 128L112 51.3V80a8 8 0 0 0 8 8h24Zm80-88v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm-32 0v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Z" />
        </svg>
      </button>
      <button @click="resetMonth">
        <svg width="24" height="24" viewBox="0 0 256 256" class="action-icon">
          <path fill="currentColor" d="M195.9 195.9a96.1 96.1 0 0 1-135.8 0a8 8 0 0 1 0-11.3a7.9 7.9 0 0 1 11.3 0a80 80 0 1 0 0-113.2L51.1 91.7h28.7a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8v-48a8 8 0 1 1 16 0v28.7l20.3-20.3a96 96 0 0 1 135.8 135.8Z" />
        </svg>
      </button>
      <button @click="nextMonth">
        <svg width="24" height="24" viewBox="0 0 256 256" class="action-icon">
          <path fill="currentColor" d="m136 32l96 96l-96 96v-48h-32V80h32V32z" opacity=".2" />
          <path fill="currentColor" d="m237.7 122.3l-96-96a8.4 8.4 0 0 0-8.8-1.7A8 8 0 0 0 128 32v40h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24v40a8 8 0 0 0 4.9 7.4a8.5 8.5 0 0 0 3.1.6a8.3 8.3 0 0 0 5.7-2.3l96-96a8.1 8.1 0 0 0 0-11.4ZM144 204.7V176a8 8 0 0 0-8-8h-24V88h24a8 8 0 0 0 8-8V51.3l76.7 76.7ZM48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm32 0v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Z" />
        </svg>
      </button>
    </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['prevMonth', 'resetMonth', 'nextMonth']);

const prevMonth = () => emit('prevMonth');
const resetMonth = () => emit('resetMonth');
const nextMonth = () => emit('nextMonth');
</script>

<style>
.action-icon {
  @apply
    transition-colors
    text-teal-600
    hover:text-teal-800 
    dark:hover:text-teal-400;
}
</style>