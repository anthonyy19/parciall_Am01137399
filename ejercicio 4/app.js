const { createApp, ref } = Vue;

createApp({
  setup() {
    // Crear una referencia 
    const inputValue = ref('');

    // Función para mostrar el valor del input en una alerta
    const showAlert = () => {
      alert(Input Value: ${inputValue.value});
    };

    // Retornar las propiedades 
    return { inputValue, showAlert };
  },
  template: `
    <div>
      <input v-model="inputValue" placeholder="Enter something" />
      <button @click="showAlert">Show Alert</button>
    </div>
  `
}).mount('#app');