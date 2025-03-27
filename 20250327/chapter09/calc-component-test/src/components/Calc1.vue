<!-- Options API 적용 -->
<template>
  <div>
    <h3>Options API</h3>
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
    <p>X + Y = {{ sum1 }}</p>
  </div>
</template>

<script>
export default {
  name: 'Calc1', //컴포넌트 이름 지정
  data() {
    return {
      // name 관련 기능
      name: '',

      //  계산 관련 기능
      x: 10,
      y: 20,
      sum1: 30,
    };
  },

  methods: {
    // name 관련 메서드
    changeName(inputName) {
      this.name = inputName.toUpperCase(); //대문자 변환
    },

    //계산 관련 메서드
    calclateSum(x, y) {
      this.sum1 = x + y;
    },
  },
};
</script>
