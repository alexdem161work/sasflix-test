<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['click'])

type Props = {
  variant?: 'link' | 'danger'
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'link',
});

const classes = computed(() => ([
  'button-base',
  `button-base--${props.variant}`,
]));

const onClick = (e: MouseEvent) => emit('click', e)
</script>

<template>
  <button
    :class="classes"
    @click="onClick"
  >
    <slot/>
  </button>
</template>

<style lang="scss">
.button-base {
  &--link {
    color: #fd6a00;
    border-bottom: .5px solid #fdd1b2;
    padding-bottom: 4px;
  }

  &--danger {
    color: #fd3b30;
    border-bottom: .5px solid #e95656;
    padding-bottom: 4px;
  }
}
</style>
