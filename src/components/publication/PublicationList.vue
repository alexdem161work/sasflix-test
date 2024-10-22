<script setup lang="ts">
import type { Post } from '@/types/Post';

import PublicationItem from '@/components/publication/PublicationItem.vue'

type Props = {
  posts: Post[],
}

defineProps<Props>()
</script>

<template>
  <div class="publication-list">
    <PublicationItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<style lang="scss">
.publication-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 32px;
}
</style>
