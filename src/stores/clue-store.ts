import type { Marking } from '@/types/marking';
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

  const markings = ref<Map<string, Array<Marking>>>(new Map());

  // TODO: Marking Object
  function setMarking(player: Player, item: string, marking: Marking) {
    if (!markings.value.has(item)) {
      markings.value.set(item, []);
    }
    const itemMarkings = markings.value.get(item);
    if (itemMarkings) {
      itemMarkings[getIndexOfPlayer(player)] = marking;
    }
  }

  function getMarking(player: Player, item: string): Marking | undefined {
    if (!markings.value.has(item)) {
      return undefined;
    }
    const itemMarkings = markings.value.get(item);
    if (itemMarkings) {
      return itemMarkings[getIndexOfPlayer(player)];
    }
    return undefined;
  }

  function getIndexOfPlayer(player: Player): number {
    const index = players.value.findIndex((p) => p.name === player.name);
    if (index === -1) {
      throw new Error('Player not found');
    }
    return index;
  }

  const numPlayers = computed(() => players.value.length);

  return { players, numPlayers, suspects, weapons, rooms, setMarking, getMarking, markings };

}, {
  persist: false, // TODO: Change
});
