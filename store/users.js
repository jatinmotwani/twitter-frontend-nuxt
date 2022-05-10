export const state = () => ({
  user: {
    fullName: '',
    email: '',
  },
})

export const actions = {
  updateUser(context, userData) {
    context.commit('updateUser', userData)
  },
}

export const mutations = {
  updateUser(state, userData) {
    state.fullName = userData.fullName
    state.email = userData.email
  },
}

export const getters = {}
