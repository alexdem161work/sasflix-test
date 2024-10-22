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
  padding-left: 10px;
  display: flex;
  gap: 4px;

  .tag-item {
    &:first-child:before {
      content: "";
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid #f5f5f5;
    }
  }
}
</style>
