<template>
  <div class="month-container w-[366px]">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
.calendar-grid {
    @apply grid grid-cols-7 gap-y-2;
}
</style>