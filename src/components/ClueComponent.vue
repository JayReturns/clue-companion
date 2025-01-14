<script lang="ts" setup>
import PlayerAvatar from './PlayerAvatar.vue';

const numPlayers = 6;
const colorForPlayer = {
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'yellow',
  5: 'purple',
  6: 'orange',
}

</script>

<template>
  <!-- <v-main> -->
    <v-container class="mt-5" style="border: 1px solid red">
      <v-row justify="center">
        <v-col cols="4">SPACE</v-col>
        <v-col v-for="n in numPlayers" :key="n" cols="1">
          <PlayerAvatar :color="colorForPlayer[n]"/>
        </v-col>
      </v-row>
    </v-container>
  <!-- </v-main> -->
</template>

<style lang="css" scoped>
.v-col {
  border: 1px solid blue;
}
</style>
