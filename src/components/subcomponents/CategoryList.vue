<script setup lang="ts">
import { useClueStore } from '@/stores/clue-store';
import Checkbox from './ClueCheckbox.vue';

defineProps<{
  items: string[],
}>();

const store = useClueStore();
</script>

<template>
  <v-row v-for="item in items" :key="item" align="center">
    <v-col cols="4">
      {{ item }}
    </v-col>
    <v-col v-for="player in store.players" :key="player.name" cols="1" justify="center">
      <Checkbox :player="player" :item="item" />
    </v-col>
  </v-row>
</template>
