<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <header class="the-header">
    <h1 class="the-header__title">{{ t('brand') }}</h1>
  </header>
</template>

<style lang="scss">
.the-header {
  padding-bottom: 57px;

  &__title {
    color: var(--sas-colors__accent--primary);
    font-size: 38px;
  }
}
</style>
