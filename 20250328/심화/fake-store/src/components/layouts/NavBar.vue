<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-house"></i> {{ config.title }}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- 메뉴 항목을 동적으로 생성 -->
          <li v-for="menu in config.menus" :key="menu.url" class="nav-item">
            <router-link class="nav-link" :to="menu.url">
              <i :class="menu.icon"></i> {{ menu.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import config from '@/config'; // config 파일 임포트
</script>

<style scoped>
/* 내비게이션 바 스타일 */
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-link {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
</style>
