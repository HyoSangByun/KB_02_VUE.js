<template>
  <div class="row">
    <div class="col">
      <ul class="list-group"></ul>

      <!-- 임시 확인용 태그 -->
      <!-- <p v-for="todo in todolist">{{ todo }}</p> -->

      <!-- 할일 목록 요소 컴포넌트 -->
      <!-- props로 받은 데이터 수정 X
        -> emit을 이용해서 부모로 전달하여 수정

        TodoItem -> TodoList -> App
       -->
      <TodoListItem
        v-for="todo in todolist"
        :todoitem="todo"
        @toggle-completed="emit('toggle-completed', todo.id)"
        @delete-todo="emit('delete-todo', todo.id)"
      />
      <!-- 
        $event : 자식 컴포넌트에서 방출된 payload를 참조하는 변수 (id)
       -->
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  todolist: { type: Array, required: true },
});

const emit = defineEmits(['toggle-completed', 'delete-todo']);

// export default {
//   name: 'TodoList',

//   // 자식 컴포넌트 등록
//   components: { TodoListItem },

//   // 부모로부터 전달 받은 데이터 수신 + 유효성 검사
//   props: {
//     // 전달 받은 todolist는 배열 형태, 필수 데이터
//     todolist: { type: Array, required: true },
//   },

//   // 부모 컴포넌트로 방출되는 이벤트 검사
//   emits: ['toggle-completed', 'delete-todo'],
// };
</script>
