<!-- src/App.vue -->
<template>
  <div id="app">
    <TasksComponent />
  </div>
</template>

<script>
import TasksComponent from './components/TasksComponent.vue';

export default {
  name: 'App',
  components: {
    TasksComponent
  }
};
</script>
