<script lang="ts" setup>
import { ref } from 'vue';
import PlayerAvatar from './PlayerAvatar.vue';
import CategoryTitle from './subcomponents/CategoryTitle.vue';
import { useClueStore } from '../stores/clue-store';
import CategoryList from './subcomponents/CategoryList.vue';

const store = useClueStore();

const editMode = ref<boolean>(false);

const updatePlayerName = (index: number, newName: string) => {
  store.players[index].name = newName;
};

</script>

<template>
  <!-- <v-main> -->
  <v-container :class="{ 'mt-5': true }" style="border: 1px solid red">
    <v-row>
      <v-btn @click="editMode = !editMode" :prepend-icon="editMode ? 'mdi-pencil-off' : 'mdi-pencil'">Edit</v-btn>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="4">SPACE</v-col>
      <v-col v-for="n in store.numPlayers" :key="n" cols="1">
        <PlayerAvatar :edit-mode="editMode" :player="store.players[n - 1] || {}" @update:name="updatePlayerName(n-1, $event)"/>
      </v-col>
    </v-row>
    <CategoryTitle title="SUSPECTS" color="gainsboro"/>
    <CategoryList :items="store.suspects"/>
    <CategoryTitle title="WEAPONS" color="gainsboro"/>
    <CategoryList :items="store.weapons"/>
    <CategoryTitle title="ROOMS" color="gainsboro"/>
    <CategoryList :items="store.rooms"/>
  </v-container>
  <!-- </v-main> -->
</template>

<style lang="css">
.v-col {
  border: 1px solid blue;
}
</style>

<style lang="css" scoped>
.half-width {
  width: 50%;
}
.blue {
  background-color: blue;
}
</style>
