<script lang="ts" setup>
import { ref } from 'vue';
import PlayerAvatar from './PlayerAvatar.vue';
import CategoryTitle from './subcomponents/CategoryTitle.vue';
import { useClueStore } from '../stores/clue-store';
import CategoryList from './subcomponents/CategoryList.vue';
import { useDisplay } from 'vuetify';

const store = useClueStore();
const display = useDisplay();

const editMode = ref<boolean>(false);

const updatePlayerName = (index: number, newName: string) => {
  store.players[index].name = newName;
};
</script>

<template>
  <v-main>
    <v-container
      :class="{ 'pt-5': true, 'w-75': display.mdAndUp.value }"
    >
      <v-row class="border-lg border-accent">
        <v-col cols="4" class="border">
          SPACE
        </v-col>
        <v-col v-for="n in store.numPlayers" :key="n" cols="1">
          <PlayerAvatar
            :edit-mode="editMode"
            :player="store.players[n - 1] || {}"
            @update:name="updatePlayerName(n - 1, $event)"
          />
        </v-col>
      </v-row>
      <CategoryTitle title="SUSPECTS" color="gainsboro" />
      <CategoryList :items="store.suspects" />
      <CategoryTitle title="WEAPONS" color="gainsboro" />
      <CategoryList :items="store.weapons" />
      <CategoryTitle title="ROOMS" color="gainsboro" />
      <CategoryList :items="store.rooms" />
    </v-container>
    <v-fab
      location="bottom right"
      :app="true"
      icon
      size="large"
      class="pa-3"
      color="primary"
    >
      <v-icon :icon="editMode ? 'mdi-pencil-off' : 'mdi-pencil'" @click="editMode = !editMode" />
    </v-fab>
    <!-- <v-btn
      fab
      bottom
      left
      color="primary"
      class="ma-2"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn> -->
  </v-main>
</template>

<style lang="css">
/* .v-col {
  border: 1px solid gray;
  border-radius: 8px;
} */
</style>
