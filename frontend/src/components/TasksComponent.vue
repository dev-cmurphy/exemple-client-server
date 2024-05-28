<!-- src/components/TasksComponent.vue -->
<template>
  <div>
    <h1>Task Manager</h1>
    <input v-model="newTask.id" placeholder="Task ID" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.id }}
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: {
        id: ''
      }
    };
  },
  methods: {
    fetchTasks() {
      fetch('https://server-kappa-liart-34.vercel.app/api/tasks')
        .then(response => response.json())
        .then(data => {
          this.tasks = data;
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    },
    addTask() {
      fetch('https://server-kappa-liart-34.vercel.app/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newTask)
      })
        .then(response => response.json())
        .then(data => {
          this.tasks.push(data);
          this.newTask.id = '';
        })
        .catch(error => {
          console.error('Error adding task:', error);
        });
    },
    deleteTask(id) {
      fetch(`https://server-kappa-liart-34.vercel.app/api/tasks/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          this.tasks = this.tasks.filter(task => task.id !== id);
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
    }
  },
  created() {
    this.fetchTasks();
  }
};
</script>
