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
}

export const mutations = {
  updateTweets(state, tweets) {
    state.tweets = tweets
  },
}

export const getters = {}
