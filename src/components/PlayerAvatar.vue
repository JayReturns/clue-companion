<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps<{
  color: string;
}>();

const style = ref<string>('color: ' + props.color);

</script>

<template>
  <!-- <v-avatar icon="$vuetify"></v-avatar> -->
  <v-text-field variant="outlined" :color="color" :style="style"></v-text-field>
</template>
