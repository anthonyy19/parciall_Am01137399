
const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    
    const firstName = ref('');
    const lastName = ref('');

    // Propiedad computada para generar el nombre completo
    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    // Retornar las propiedades para su uso en el template
    return { firstName, lastName, fullName };
  },
  template: `
    <div>
      <input v-model="firstName" placeholder="primer nombre" />
      <input v-model="lastName" placeholder="apellido" />
      <h2>Your full name is: {{ fullName }}</h2>
    </div>
  `
}).mount('#app');
