const { createApp, ref } = Vue;

createApp({
  setup() {
    // Crear una referencia reactiva para el valor del contador
    const counter = ref(0);

    // Función para incrementar el contador
    const increment = () => {
      counter.value++;
    };

    // Retornar las propiedades y funciones para su uso en el template
    return { counter, increment };
  },
  template: `
    <div>
      <h2>Counter: {{ counter }}</h2>
      <button @click="increment">Increment</button>
    </div>
  `
}).mount('#app');