<script setup lang="ts">
import { useClueStore } from '@/stores/clue-store';
import { Marking } from '@/types/marking';
import type { Player } from '@/types/player';
import labels from './labels';

const props = defineProps<{
  player: Player,
  item: string,
}>();

const store = useClueStore();

const setMarking = (marking: Marking) => {
  store.setMarking(props.player, props.item, marking);
};

const getMarkingIcon = () => {
  return labels[store.getMarking(props.player, props.item) || 0].icon;
};

const getMarkingColor = () => {
  return labels[store.getMarking(props.player, props.item) || 0].color;
};
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <span v-bind="props"><v-icon :icon="getMarkingIcon()" :color="getMarkingColor()" /></span>
    </template>
    <v-card elevation="4">
      <v-card-title class="text-center">
        Actions
      </v-card-title>
      <div>
        <v-row align="center">
          <v-col
            v-for="marking in labels"
            :key="marking.key"
            class="justify-center d-flex"
            cols="4"
          >
            <v-btn icon :color="marking.color" elevation="0" @click="setMarking(marking.key)">
              <v-icon>{{ marking.icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-menu>
</template>
