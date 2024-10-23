<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { usePublicationsStore } from '@/stores/publications'
import type { Post } from '@/types/Post';

import ReactionsBase from '@/components/ui/reactions/ReactionsBase.vue';
import ButtonBase from '@/components/ui/button/ButtonBase.vue';
import TagList from '@/components/ui/tag/TagList.vue';

type Props = {
  post: Post
}

const { t } = useI18n();
const store = usePublicationsStore();
const emit = defineEmits(['loadComments']);
defineProps<Props>();

// Отправляет событие о том, что необходимо
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
      {{ t('buttons.openComment') }}
    </ButtonBase>

    <span class="publication-footer__date">
      {{ t('today') }}
    </span>

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

  &__date {
    color: #04040527;
    font: var(--sas-typography__caption);
  }
}
</style>
