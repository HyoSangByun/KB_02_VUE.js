<template>
  <!-- 페이지 제목을 표시하는 행 -->
  <div class="row">
    <div class="col p-3">
      <h2>할일 수정</h2>
    </div>
  </div>

  <!-- 할일 수정 폼을 표시하는 행 -->
  <div class="row">
    <div class="col">
      <!-- 할일 입력 필드 -->
      <div class="form-group">
        <label htmlFor="todo">할일:</label>
        <input
          type="text"
          class="form-control"
          id="todo"
          v-model="todoItem.todo"
        />
      </div>

      <!-- 설명 입력 필드 -->
      <div class="form-group">
        <label htmlFor="desc">설명:</label>
        <textarea
          class="form-control"
          rows="3"
          id="desc"
          v-model="todoItem.desc"
        ></textarea>
      </div>

      <!-- 완료 여부 체크박스 -->
      <div class="form-group">
        <label htmlFor="done">완료여부 : </label>&nbsp;
        <input type="checkbox" v-model="todoItem.done" />
      </div>

      <!-- 버튼 그룹 -->
      <div class="form-group">
        <button
          type="button"
          class="btnbtn-primarym-1"
          @click="updateTodoHandler"
        >
          수정
        </button>
        <button
          type="button"
          class="btnbtn-primarym-1"
          @click="router.push('/todos')"
        >
          취소
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTodoListStore } from '@/stores/todoList';

const todoListStore = useTodoListStore();

const todoList = todoListStore.todoList;

const { updateTodo } = todoListStore;

const router = useRouter(); // 라우터 인스턴스 생성
const currentRoute = useRoute(); // 현재 라우트 정보 가져오기

// 현재 라우트의 id와 일치하는 할일 항목 찾기기
const matchedTodoItem = todoList.find(
  (item) => item.id === currentRoute.params.id
);

// 일치하는 항목이 없으면 목록 페이지로 이동
if (!matchedTodoItem) {
  router.push('/todos');
}

// 찾은 할일 항목의 상태를 reactive로 선언하여 반응형으로 만듦
const todoItem = reactive({ ...matchedTodoItem });

// 수정 버튼 클릭 시 실행되는 함수
const updateTodoHandler = () => {
  let { todo } = todoItem;
  // 할일이 비어있는지 확인
  if (!todo || todo.trim() === '') {
    alert('할일은 반드시 입력해야 합니다');
    return;
  }

  // 할일을 수정하고 성공 시 목록 페이지(/todos)로 이동
  updateTodo({ ...todoItem }, () => {
    router.push('/todos');
  });
};
</script>
