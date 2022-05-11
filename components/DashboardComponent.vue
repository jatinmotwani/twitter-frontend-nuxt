<template>
  <div class="grid grid-cols-4 grid-flow-col gap-4">
    <div class="col-span-1 m-auto">
      <sidebar-component />
    </div>
    <div class="col-span-2">
      <tweet-section :tweets="tweets" :fetchTweets="getPosts" />
    </div>
    <div class="col-span-1">
      <search-section v-on:fetch-tweets="getPosts" />
    </div>
  </div>
</template>

<script>
import SidebarComponent from './Sidebar.vue'
import TweetSection from './TweetSection.vue'
import SearchSection from './SearchSection.vue'
export default {
  name: 'DashboardView',
  components: { SidebarComponent, TweetSection, SearchSection },
  data() {
    return {
      tweets: [],
    }
  },
  methods: {
    async getPosts() {
      try {
        const response = await this.$store.dispatch('tweets/fetchPosts')
        this.$store.dispatch('tweets/updateTweets', response?.data?.data?.posts)
        this.tweets = response?.data?.data?.posts || []
      } catch (error) {
        console.log('Error', error)
      }
    },
  },
  mounted() {
    this.getPosts()
  },
}
</script>
