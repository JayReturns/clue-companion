<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Player } from '@/types/player';

const emit = defineEmits(['update:name']);
const props = defineProps<{
  editMode: boolean,
  player: Player,
}>();

const style = ref<string>('background-color: ' + props.player.color + '; color: white');
const localName = ref<string>(props.player.name);

watch(() => props.player.name, (newVal) => {
  localName.value = newVal;
});

const updateName = () => {
  emit('update:name', localName.value);
};

</script>

<template>
  <v-text-field
    v-if="editMode"
    v-model="localName"
    variant="outlined"
    :color="props.player.color"
    :style="style"
    @update:model-value="updateName"/>
  <div :style="style" class="text-center" v-else>
    {{ localName }}
  </div>
</template>
