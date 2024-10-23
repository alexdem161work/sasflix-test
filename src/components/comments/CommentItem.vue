<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Comment } from '@/types/Comment';

import AvatarBase from '@/components/ui/avatar/AvatarBase.vue';
import ButtonBase from '@/components/ui/button/ButtonBase.vue';

type Props = {
  comment: Comment,
}

const { t } = useI18n();
const emit = defineEmits(['delete']);
defineProps<Props>()

// Отправляет событие о нажатии на кнопку "Удалить"
const onDelete = () => emit('delete');
</script>

<template>
  <div class="comment-item">
    <div class="comment-item__avatar">
      <AvatarBase/>
    </div>

    <div class="comment-item__content">
      <div class="comment-item__username">{{ comment.user.fullName }}</div>
      <div>{{ comment.body }}</div>

      <div class="comment-item__actions">
        <span class="comment-item__date">
          {{ t('today') }}
        </span>

        <ButtonBase
          variant="danger"
          @click="onDelete"
        >
          {{ t('buttons.delete') }}
        </ButtonBase>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-item {
  display: flex;
  gap: 8px;

  &__content {
    flex: 1;
  }

  &__username {
    margin-bottom: 12px;
    font-weight: 600;
  }

  &__actions {
    display: flex;
    gap: 20px;

    margin-top: 16px;
  }

  &__date {
    color: #04040527;
    font: var(--sas-typography__caption);
  }
}
</style>
