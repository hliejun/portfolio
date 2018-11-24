<template>

  <!-- TODO: Style and decorate error page -->

  <div class='page error container layout'>
    <div v-if='error.statusCode === 404' class='missing'>
      <h2>Page Not Found</h2>
      <br>
      <h3>Oops! This page only exists in a parallel dimension!</h3>
      <nuxt-link to='/'>Home</nuxt-link>
    </div>
    <div v-else class='other'>
      <h2>Server Error</h2>
      <br>
      <h3>Houston, we have a problem! I'm onto this so please check back later!</h3>
      <nuxt-link to='/'>Home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
