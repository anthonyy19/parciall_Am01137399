const { createApp, ref } = Vue;

createApp({
  setup() {
    // Creamos una referencia reactiva para almacenar la lista de tareas
    const tasks = ref([]);
    
    // almacenamos la nueva tarea
    const newTask = ref('');

    // agregamos una funcion para agregar una nuev tarea
    const addTask = () => {
      if (newTask.value.trim()) {
        tasks.value.push(newTask.value.trim());
        newTask.value = '';
      }
    };

    // Función para eliminar una tarea
    const removeTask = (index) => {
      tasks.value.splice(index, 1);
    };

    // Retornar las propiedades y métodos para su uso en el template
    return { tasks, newTask, addTask, removeTask };
  },
  template: `
    <div>
      <h2>Todo List</h2>
      <input v-model="newTask" placeholder="Add a new task" />
      <button @click="addTask">Add Task</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task }}
          <button @click="removeTask(index)">Remove</button>
        </li>
      </ul>
    </div>
  `
}).mount('#app');