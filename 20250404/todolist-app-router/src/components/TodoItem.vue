<template>
  <!-- 할일 항목을 표시하는 li 컴포넌트 -->
  <li
    :class="
      todoItem.done
        ? 'list-group-item list-group-item-success'
        : 'list-group-item'
    "
  >
    <!-- 할일 내용을 표시하는 span -->
    <span
      :class="todoItem.done ? 'todo-done pointer' : 'pointer'"
      @click="toggleDone(todoItem.id)"
    >
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>

    <!-- 편집 버튼 -->
    <span
      class="float-end badge bg-secondary pointer m-1"
      @click="router.push(`/todos/edit/${todoItem.id}`)"
    >
      편집</span
    >

    <!-- 삭제 버튼 -->
    <span
      class="float-end badge bg-secondary pointer m-1"
      @click="deleteTodo(todoItem.id)"
    >
      삭제</span
    >
  </li>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useTodoListStore } from '@/stores/todoList.js';

//store 객체 생성
const todoListStore = useTodoListStore();

// 부모 컴포넌트로부터 전달받은 props를 정의
defineProps({
  todoItem: { type: Object, required: true },
});

const router = useRouter();
const { deleteTodo, toggleDone } = todoListStore;
</script>
