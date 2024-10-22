<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import ReactionButton from '@/components/ui/reactions/ReactionButton.vue';

import LikeIcon from '@/components/icons/LikeIcon.vue';
import DislikeIcon from '@/components/icons/DislikeIcon.vue';
import LikeOnIcon from '@/components/icons/LikeOnIcon.vue';
import DislikeOnIcon from "@/components/icons/DislikeOnIcon.vue";

type Props = {
  likeCount: number;
  dislikeCount: number;

  liked?: boolean,
  disliked?: boolean,
}

const { t } = useI18n();

const emit = defineEmits(['like', 'dislike']);
withDefaults(defineProps<Props>(), {
  liked: false,
  disliked: false,
});

const onLike = () => emit('like');
const onDislike = () => emit('dislike');
</script>

<template>
  <div class="reaction-base">
    <ReactionButton
      class="reaction-button--like"
      :count="likeCount"
      :active="liked"

      @click="onLike"
    >
      <template #icon>
        <LikeIcon v-if="!liked"/>
        <LikeOnIcon v-else/>
      </template>

      {{ t('reactions.like') }}
    </ReactionButton>

    <ReactionButton
      class="reaction-button--dislike"
      :count="dislikeCount"
      :active="disliked"

      @click="onDislike"
    >
      <template #icon>
        <DislikeIcon v-if="!disliked"/>
        <DislikeOnIcon v-else/>
      </template>

      {{ t('reactions.trash') }}
    </ReactionButton>
  </div>
</template>

<style lang="scss">
.reaction-base {
  display: flex;
  gap: 1px;

  .reaction-button {
    &--like {
      border-radius: 16px 0 0 16px;
    }

    &--dislike {
      border-radius: 0 16px 16px 0;

      &.reaction-button--active {
        background: #0c0c0e;
      }
    }
  }
}
</style>
