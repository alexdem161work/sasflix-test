<script setup lang="ts">
import AvatarBase from "@/components/ui/avatar/AvatarBase.vue";
import ButtonBase from "@/components/ui/button/ButtonBase.vue";

type Props = {
  comment: {},
}

const emit = defineEmits(['delete']);
defineProps<Props>()

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
        <span>Today</span>
        <ButtonBase @click="onDelete">Удалить</ButtonBase>
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
  }

  &__actions {
    display: flex;
    gap: 20px;

    margin-top: 16px;
  }
}
</style>
