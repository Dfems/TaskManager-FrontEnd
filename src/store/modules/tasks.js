export default {
    namespaced: true,
    state: {
      tasks: []
    },
    mutations: {
      SET_TASKS(state, tasks) {
        state.tasks = tasks;
      },
      ADD_TASK(state, task) {
        state.tasks.push(task);
      },
      UPDATE_TASK(state, updatedTask) {
        const index = state.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
          state.tasks.splice(index, 1, updatedTask);
        }
      },
      DELETE_TASK(state, id) {
        state.tasks = state.tasks.filter(task => task.id !== id);
      }
    },
    actions: {
      async fetchTasks({ commit }) {
        const response = await fetch('http://localhost:3000/tasks');
        const tasks = await response.json();
        commit('SET_TASKS', tasks);
      },
      async addTask({ commit }, task) {
        const response = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        });
        const newTask = await response.json();
        commit('ADD_TASK', newTask);
      },
      async updateTask({ commit }, task ) { 
        await fetch(`http://localhost:3000/tasks/${task.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        });
        commit('UPDATE_TASK', { ...task }); 
      },
      async deleteTask({ commit }, id) {
        await fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'DELETE'
        });
        commit('DELETE_TASK', id);
      }
    },
    getters: {
      tasks: state => state.tasks
    }
};
  