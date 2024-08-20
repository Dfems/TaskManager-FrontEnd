<template>
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Task Manager</h1>
    <TaskForm @add="addTask"/>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="toggleTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TaskItem from '@/components/TaskItem.vue';
import TaskForm from '@/components/TaskForm.vue';

export default {
  components: {
    TaskItem,
    TaskForm
  },
  computed: {
    ...mapGetters('tasks', ['tasks']),
  },
  methods: {
    ...mapActions('tasks', ['fetchTasks', 'addTask', 'toggleTask', 'deleteTask']),
  },
  created() {
    this.fetchTasks();
  }
}
</script>
