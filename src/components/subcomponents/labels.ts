import { Marking } from '@/types/marking';

const labels: {key: Marking, icon: string, color: string}[] = [
  { key: Marking.NONE, icon: '', color: 'grey' },
  { key: Marking.CHECK, icon: 'mdi-check', color: 'green' },
  { key: Marking.CROSS, icon: 'mdi-close', color: 'red' },
  { key: Marking.QUESTION, icon: 'mdi-help', color: 'blue' },
  { key: Marking.EXCLEMATION, icon: 'mdi-exclamation', color: 'orange' },
  { key: Marking.STAR, icon: 'mdi-star', color: 'yellow' },
  { key: Marking.EYE, icon: 'mdi-eye', color: 'purple' },
];

export default labels;
