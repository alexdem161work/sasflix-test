<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';
</script>

<template>
  <div class="application">
    <TheHeader/>

    <main class="application__content">
      <RouterView/>
    </main>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/application.scss';

.application {
  padding-top: 21px;
  padding-bottom: 58px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    width: 676px;
  }
}
</style>
