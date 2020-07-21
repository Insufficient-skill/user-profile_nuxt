export const state = () => ({
  users: [],
  authUser: {}
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setAuthUser(state, user) {
    state.authUser = user
  }
}

export const actions = {
  async fetch({ commit }) {
    const users = await this.$axios.$get('http://localhost:4200/users')
    commit('setUsers', users)
  }
}

export const getters = {
  users: s => s.users,
  authUser: s => s.authUser
}
