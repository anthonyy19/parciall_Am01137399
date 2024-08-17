const { createApp, ref } = Vue;

createApp({
  setup() {
    // Definir una variable reactiva booleana
    const isTrue = ref(false);

    // Función para alternar el valor de la variable booleana
    const toggleValue = () => {
      isTrue.value = !isTrue.value;
    };

    // Mensaje basado en el valor de la variable booleana
    const message = ref('');

    // Actualizar el mensaje cuando cambia el valor
    watch(isTrue, (newValue) => {
      message.value = newValue ? 'The value is TRUE' : 'The value is FALSE';
    });

    // Inicializar el mensaje
    message.value = isTrue.value ? 'The value is TRUE' : 'The value is FALSE';

    // Retornar las propiedades y funciones para su uso en el template
    return { isTrue, toggleValue, message };
  },
  template: `
    <div>
      <button @click="toggleValue">Toggle Value</button>
      <p>{{ message }}</p>
    </div>
  `
}).mount('#app');
