import type { Player } from '@/types/player';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useClueStore = defineStore('clue', () => {

  const players = ref<Player[]>([
    { name: 'John', color: 'red' },
    { name: 'Doe', color: 'blue' },
    { name: 'Jane', color: '#00ff00' },
  ]);

  const suspects = ref<string[]>([
    'Miss Scarlet',
    'Colonel Mustard',
    'Mrs. White',
    'Mr. Green',
    'Mrs. Peacock',
    'Professor Plum',
  ]);

  const weapons = ref<string[]>([
    'Candlestick',
    'Knife',
    'Lead Pipe',
    'Revolver',
    'Rope',
    'Wrench',
  ]);

  const rooms = ref<string[]>([
    'Kitchen',
    'Ballroom',
    'Conservatory',
    'Dining Room',
    'Cellar',
    'Billiard Room',
    'Library',
    'Lounge',
    'Hall',
    'Study',
  ]);

  const numPlayers = computed(() => players.value.length);

  return { players, numPlayers, suspects, weapons, rooms };

}, {
  persist: true,
});
