<template>
  <div class='page error'>
    <div class='background'>
      <amp-img class='stars left' src='/vectors/splash/stars.svg' height='1' width='1' layout='responsive' noloading />
      <amp-img class='stars right' src='/vectors/splash/stars.svg' height='1' width='1' layout='responsive' noloading />
    </div>
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle="error.statusCode === 404 ? messages.missing.subtitle : messages.default.subtitle"
      :title="error.statusCode === 404 ? messages.missing.title : messages.default.title" />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='0' layout='nodisplay' />
    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'

export default {
  components: {
    Jumbotron
  },
  props: ['error'],
  layout (context) {
    return 'splash'
  },
  data () {
    return {
      messages: {
        missing: {
          title: 'Page Not Found',
          subtitle: `
            Oops, looks like we're lost.<br>
            This page does not exist.
          `
        },
        default: {
          title: 'Error',
          subtitle: `
            Houston, we've got a problem.<br>
            I'm working on it so do come back later.
          `
        }
      },
      jumbotron: {
        actions: [
          {
            label: 'Return Home',
            url: '/',
            in: true
          }
        ]
      }
    }
  }
}
</script>
