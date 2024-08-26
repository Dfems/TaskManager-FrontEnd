export default {
  namespaced: true,
  state: {
    user: null,
    token: null,
    error: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
    }
  },
  actions: {
    async setUser({ commit }, { user, token }) {
      commit('SET_USER', { user, token });
      return true;
    },
    async logout({ commit }) {
      commit('LOGOUT');
      return true;
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    getUser: state => state.user,
    getError: state => state.error
  }
};
