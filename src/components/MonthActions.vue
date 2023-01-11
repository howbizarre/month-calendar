<template>
    <div class="flex justify-between">
      <button @click="$emit('prevMonth')">Prev</button>
      <button @click="$emit('resetMonth')">X</button>
      <button @click="$emit('nextMonth')">Next</button>
    </div>
</template>