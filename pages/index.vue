<template>
  <LandingComponent />
</template>

<script>
import LandingComponent from '../components/LandingComponent.vue'
export default {
  name: 'IndexPage',
  components: { LandingComponent },
  middleware({ app, redirect }) {
    if (app.$cookies.get('user-token')) {
      return redirect('/dashboard')
    }
  },
}
</script>
