<script setup lang="ts">

const props = withDefaults(defineProps<{
  title: string,
  color?: string,
}>(), {
  color: '',
});

</script>

<template>
  <v-row justify="center">
    <v-col cols="12" class="text-center" :style="{ backgroundColor: props.color }">
      {{ title }}
    </v-col>
  </v-row>
</template>
