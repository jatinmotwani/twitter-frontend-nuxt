<template>
  <DashboardComponent />
</template>

<script>
import DashboardComponent from '../../components/DashboardComponent.vue'

export default {
  components: { DashboardComponent },
  middleware({ app, redirect }) {
    if (!app.$cookies.get('user-token')) {
      return redirect('/')
    }
  },
}
</script>
