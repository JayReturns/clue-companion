<script setup lang="ts">
import { useClueStore } from '@/stores/clue-store';


defineProps<{
  items: string[],
}>();

const store = useClueStore();

</script>

<template>
  <v-row v-for="item in items" justify="space-between" :key="item" align="center">
    <v-col cols="4">
      {{ item }}
    </v-col>
    <v-col v-for="n in store.numPlayers" :key="n" cols="1" justify="center">
      <!-- CUSTOM CHECKBOX -->
    </v-col>
  </v-row>
</template>
