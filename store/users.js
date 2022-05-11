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
  login(context, loginData) {
    return this.$axios.post('http://localhost:6001/api/user/login', loginData)
  },
  signup(context, signupData) {
    return this.$axios.post('http://localhost:6001/api/user/signup', signupData)
  },
  followUser(context, userId) {
    return this.$axios.post(
      'http://localhost:6001/api/user/follow',
      {
        userId,
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.$cookies.get('user-token'),
        },
      }
    )
  },
  unfollowUser(context, userId) {
    return this.$axios.post(
      'http://localhost:6001/api/user/unfollow',
      {
        userId,
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.$cookies.get('user-token'),
        },
      }
    )
  },
  getSearchSuggestion(context, searchText) {
    return this.$axios.get(
      'http://localhost:6001/api/user?search=' + searchText,
      {
        headers: {
          Authorization: 'Bearer ' + this.$cookies.get('user-token'),
        },
      }
    )
  },
}

export const mutations = {
  updateUser(state, userData) {
    state.fullName = userData.fullName
    state.email = userData.email
  },
}

export const getters = {}
