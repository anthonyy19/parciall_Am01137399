const { createApp, ref, watchEffect } = Vue;

createApp({
  setup() {
    // Crear una referencia reactiva para almacenar el estado del tema
    const isDarkTheme = ref(false);

    // Función para alternar entre temas
    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
    };

   
    watchEffect(() => {
      document.body.className = isDarkTheme.value ? 'dark-theme' : 'light-theme';
    });

    // Retornar las propiedades y funciones para su uso en el template
    return { isDarkTheme, toggleTheme };
  },
  template: `
    <div>
      <h2>{{ isDarkTheme ? 'Dark Theme' : 'Light Theme' }}</h2>
      <button @click="toggleTheme">
        Switch to {{ isDarkTheme ? 'Light' : 'Dark' }} Theme
      </button>
    </div>
  `
}).mount('#app');