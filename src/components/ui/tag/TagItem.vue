<template>
  <div class="tag-item">
    <slot/>
  </div>
</template>

<style lang="scss">
  .tag-item {
    position: relative;

    background: #f5f5f5;
    padding: 4px;
    border-radius: 3px;

    font: var(--sas-typography__caption);
  }
</style>
