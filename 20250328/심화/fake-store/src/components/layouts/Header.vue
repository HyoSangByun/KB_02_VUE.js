<template>
  <header
    class="header d-flex flex-column align-items-center justify-content-center text-center text-white"
  >
    <div class="container">
      <h1 class="display-4">{{ config.title }}</h1>
      <p class="lead">{{ config.subtitle }}</p>
    </div>
  </header>
</template>

<script setup>
import config from '@/config'; // config 파일 임포트
</script>

<style scoped>
.header {
  background-image: url('@/assets/background.jpg'); /* 배경 이미지 설정 */
  background-size: cover; /* 배경 이미지가 영역을 덮도록 설정 */
  background-position: center; /* 배경 이미지의 위치를 중앙으로 설정 */
  min-height: 250px; /* 최소 높이 설정 */
  width: 100%; /* 전체 너비 꽉 차게 설정 */
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
}

.container {
  z-index: 1; /* 텍스트가 배경 이미지 위에 오도록 설정 */
  color: white;
  font-family: sans-serif;
  font-size: 2rem; /* 글자 크기 조정 */
  text-align: center;
}

.container > p {
  font-size: 1.2rem; /* 작은 글씨 크기 */
  margin-top: 0.5rem; /* 위쪽에 간격 추가 */
}
</style>
