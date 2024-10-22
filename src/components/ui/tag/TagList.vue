<script setup lang="ts">
import TagItem from '@/components/ui/tag/TagItem.vue';

type Props = {
  tags: string[]
}

defineProps<Props>();
</script>

<template>
  <div class="tag-list">
    <TagItem
      v-for="tag in tags"
    >
      {{ tag }}
    </TagItem>
  </div>
</template>

<style lang="scss">
.tag-list {
  display: flex;
  gap: 4px;
}
</style>
