<template>
  <div class="row mb-3">
    <div class="col-md text-center">
      전체 todo 개수 : <span>{{ todolist.length }}</span>
    </div>
    <div class="col-md text-center">
      <!-- 완료 todo 개수 : <span :class="completedCount && completed">{{completedCount}}</span> -->
      완료 todo 개수 :
      <span :class="{ completed: completedCount > 0 }">{{
        completedCount
      }}</span>
    </div>
    <div class="col-md text-center">
      미완료 todo 개수 :
      <span :class="{ notCompleted: todolist.length - completedCount > 0 }">{{
        todolist.length - completedCount
      }}</span>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue';

const props = defineProps({
  completedCount: { type: Number, required: true },
  todolist: { type: Array, required: true },
});
// export default {
//   name: 'TodoCount',

//   props: {
//     completedCount: { type: Number, required: true },
//     todolist: { type: Array, required: true },
//   },
// };
</script>
