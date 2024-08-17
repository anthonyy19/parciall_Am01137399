const { createApp, ref, computed, watch } = Vue;

createApp({
  setup() {
    // Definir variables reactivas
    const value = ref('Initial Value');
    const message = ref('');

    // Función que cambia el valor de la variable
    const changeValue = () => {
      value.value = 'New Value';
    };

    // Propiedad computada para el mensaje
    const fullMessage = computed(() => {
      return `The value is: ${value.value}`;
    });

    // Observar cambios en la variable y actualizar el mensaje
    watch(value, (newValue, oldValue) => {
      message.value = `The value changed from "${oldValue}" to "${newValue}"`;
    });

    // Retornar las propiedades y funciones para su uso en el template
    return { value, message, changeValue, fullMessage };
  },
  template: `
    <div>
      <button @click="changeValue">Change Value</button>
      <p>{{ message }}</p>
      <p>{{ fullMessage }}</p>
    </div>
  `
}).mount('#app');
