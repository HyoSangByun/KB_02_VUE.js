<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ fullPath }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  setup() {
    const route = useRoute();
    console.log(route);

    return {
      fullPath: route.fullPath,
    };
  },
});
</script>

<!-- <script>
export default {
  name: 'About',
  created() {
    console.log(this.$route);
  },
};
</script> -->

<!-- <script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const fullPath = route.fullPath;

console.log(route);
</script> -->
