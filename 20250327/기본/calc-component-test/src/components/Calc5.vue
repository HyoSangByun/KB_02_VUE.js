<template>
  <div>
    x : <input type="text" v-model.number="x" /><br />

    <div>결과 : {{ result }}</div>
  </div>
</template>
<script>
import { ref, watch } from 'vue';

export default {
  name: 'Calc4',
  setup() {
    const x = ref(0);
    const result = ref(0);
    watch(x, (current, old) => {
      console.log(`${old} -> ${current}`);
      result.value = current * 2;
    });
    return { x, result };
  },
};
</script>
