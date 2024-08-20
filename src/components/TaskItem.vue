<template>
  <div class="bg-white shadow-md rounded px-4 py-2 mb-2 flex items-center">
    <input type="checkbox" class="mr-4" :checked="task.completed" @change="$emit('toggle', task.id)">
    <span :class="{ 'line-through': task.completed }">{{ task.title }}</span>
    <button class="ml-auto text-red-500" @click="$emit('delete', task.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>
