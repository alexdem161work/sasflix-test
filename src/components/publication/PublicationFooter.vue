<script setup lang="ts">
import { usePublicationsStore } from '@/stores/publications'

import ReactionsBase from '@/components/ui/reactions/ReactionsBase.vue';
import ButtonBase from '@/components/ui/button/ButtonBase.vue';
import TagList from '@/components/ui/tag/TagList.vue';

type Props = {
  post: {}
}

const store = usePublicationsStore();
const emit = defineEmits(['loadComments']);
defineProps<Props>();

const onLoadComments = () => emit('loadComments');
</script>

<template>
  <div class="publication-footer">
    <ReactionsBase
      :like-count="post.reactions.likes"
      :dislike-count="post.reactions.dislikes"

      @like="store.like(post.id)"
      @dislike="store.dislike(post.id)"

      :liked="post.reactions.liked"
      :disliked="post.reactions.disliked"
    />

    <ButtonBase @click="onLoadComments">
      Open comments
    </ButtonBase>

    <TagList
      :tags="post.tags"
    />
  </div>
</template>

<style lang="scss">
.publication-footer {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
