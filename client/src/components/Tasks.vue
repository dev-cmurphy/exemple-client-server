<!-- src/components/Tasks.vue -->
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
  import axios from 'axios';
  
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
        axios.get('https://your-vercel-app.vercel.app/api/tasks')
          .then(response => {
            this.tasks = response.data;
          });
      },
      addTask() {
        axios.post('https://your-vercel-app.vercel.app/api/tasks', this.newTask)
          .then(response => {
            this.tasks.push(response.data);
            this.newTask.id = '';
          });
      },
      deleteTask(id) {
        axios.delete(`https://your-vercel-app.vercel.app/api/tasks/${id}`)
          .then(() => {
            this.tasks = this.tasks.filter(task => task.id !== id);
          });
      }
    },
    created() {
      this.fetchTasks();
    }
  };
  </script>
  