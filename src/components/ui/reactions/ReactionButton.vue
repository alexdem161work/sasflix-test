<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  count: number,

  active?: boolean
};

const emit = defineEmits(['click']);
const props = withDefaults(defineProps<Props>(), {
  active: false,
});

const classes = computed(() => ([
  'reaction-button',
  ...(props.active ? ['reaction-button--active'] : []),
]))

const onClick = () => emit('click');
</script>

<template>
  <button
    :class="classes"
    @click="onClick"
  >
    <slot name="icon"/>
    <slot/>
    {{ count }}
  </button>
</template>

<style lang="scss">
.reaction-button {
  background: #f3f3f3;

  padding: 8px 8px 8px 12px;
}
</style>
