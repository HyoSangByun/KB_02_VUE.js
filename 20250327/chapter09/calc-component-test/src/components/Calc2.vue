<!-- Options API 적용 -->
<template>
  <div>
    <h3>Composition API</h3>
    <input
      type="text"
      placeholder="입력하면 대문자로 변환"
      :value="name"
      @input="changeName($event.target.value)"
    />
  </div>

  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />

    <button @click="calclateSum(x, y)">계산하기</button>
    <p>X + Y = {{ sum2 }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Calc2', //컴포넌트 이름 지정

  setup() {
    const name = ref(''); // data() 대체

    const changeName = (inputName) => {
      name.value = inputName.toUpperCase();
    };

    // -------------------------------------------------
    const x = ref(10);
    const y = ref(20);
    const sum2 = ref(30);

    const calclateSum = (x, y) => {
      sum2.value = x + y;
    };

    //setup() 리턴 구문에 작성 -> <template>에서 사용 가능
    return { name, changeName, x, y, sum2, calclateSum };
  },
};
</script>
