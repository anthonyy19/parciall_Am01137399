const { createApp, ref } = Vue;

createApp({
  setup() {
    // Referencias reactivas para almacenar los dos números y el resultado
    const num1 = ref(0);
    const num2 = ref(0);
    const result = ref(null);

    // Funciones para realizar las operaciones matemáticas
    const add = () => {
      result.value = num1.value + num2.value;
    };

    const subtract = () => {
      result.value = num1.value - num2.value;
    };

    const multiply = () => {
      result.value = num1.value * num2.value;
    };

    const divide = () => {
      if (num2.value !== 0) {
        result.value = num1.value / num2.value;
      } else {
        result.value = 'Error: Division by zero';
      }
    };

    // Retornar las propiedades y funciones para su uso en el template
    return { num1, num2, result, add, subtract, multiply, divide };
  },
  template: `
    <div>
      <h2>Simple Calculator</h2>
      <input v-model.number="num1" placeholder="Enter first number" type="number" />
      <input v-model.number="num2" placeholder="Enter second number" type="number" />

      <div>
        <button @click="add">+</button>
        <button @click="subtract">-</button>
        <button @click="multiply">*</button>
        <button @click="divide">/</button>
      </div>

      <div v-if="result !== null">
        <h3>Result: {{ result }}</h3>
      </div>
    </div>
  `
}).mount('#app')