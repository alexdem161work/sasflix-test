<script setup lang="ts">
import { usePublicationsStore } from '@/stores/publications';

import PublicationList from '@/components/publication/PublicationList.vue';

const store = usePublicationsStore();
store.loadPublications();
</script>

<template>
  <PublicationList :posts="store.publications"/>
</template>
