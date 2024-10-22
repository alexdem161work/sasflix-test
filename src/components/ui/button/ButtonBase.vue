<script setup lang="ts">
const emit = defineEmits(['click'])

const onClick = (e: MouseEvent) => emit('click', e)
</script>

<template>
<button @click="onClick"><slot/></button>
</template>

<style scoped lang="scss">

</style>
