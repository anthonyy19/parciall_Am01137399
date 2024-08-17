const { createApp, ref } = Vue;

createApp({
  setup() {
    // Estado reactivo para la visibilidad del mensaje
    const isVisible = ref(false);

    // Función para alternar la visibilidad del mensaje
    const toggleMessage = () => {
      isVisible.value = !isVisible.value;
    };

    // Retornar las propiedades
    return { isVisible, toggleMessage };
  },
  template: `
    <div>
      <button @click="toggleMessage">
        {{ isVisible ? 'Hide' : 'Show' }} Message
      </button>
      <p v-if="isVisible">This is a toggled message!</p>
    </div>
  `
}).mount('#app');