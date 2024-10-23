<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  count: number, // колличество реакций

  active?: boolean // активна ли реакция (нажимал ли на нее пользователь)
};

const emit = defineEmits(['click']);
const props = withDefaults(defineProps<Props>(), {
  active: false,
});

// Собирает классы для реакции на основе переданных пропсов
const classes = computed(() => ([
  'reaction-button',
  ...(props.active ? ['reaction-button--active'] : []),
]))

// Отправляет событие click
const onClick = () => emit('click');
</script>

<template>
  <button
    :class="classes"
    @click="onClick"
  >
    <slot name="icon"/>

    <span>
      <slot/>
    </span>

    <span class="reaction-button__count">
      {{ count }}
    </span>
  </button>
</template>

<style lang="scss">
.reaction-button {
  background: #f3f3f3;

  padding: 8px 8px 8px 12px;

  font: var(--sas-typography__caption);

  &--active {
    color: white;
    background: #fd3b30;
  }

  &__count {
    font: var(--sas-typography__number-tab);
    margin-left: 6px;
  }
}
</style>
