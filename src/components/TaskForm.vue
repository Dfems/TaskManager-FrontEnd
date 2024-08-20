<template>
  <form @submit.prevent="handleSubmit" class="mb-4">
    <input 
      v-model="title" 
      type="text" 
      placeholder="New Task" 
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
    />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Task
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('add', { title: this.title, completed: false });
      this.title = '';
    }
  }
}
</script>
