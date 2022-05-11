export const state = () => ({
  tweets: [
    {
      author: 'James',
      content: 'Had a great time with team !ß',
    },
    {
      author: 'Rishi',
      content: 'This is my first tweet !',
    },
  ],
})

export const actions = {
  updateTweets(context, tweets) {
    context.commit('updateTweets', tweets)
  },
  fetchPosts(context) {
    return this.$axios.get('http://localhost:6001/api/post', {
      headers: {
        Authorization: 'Bearer ' + this.$cookies.get('user-token'),
      },
    })
  },
  addTweet(context, content) {
    return this.$axios.post(
      'http://localhost:6001/api/post/create',
      {
        content,
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.$cookies.get('user-token'),
        },
      }
    )
  },
}

export const mutations = {
  updateTweets(state, tweets) {
    state.tweets = tweets
  },
}

export const getters = {}
