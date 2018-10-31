<template>
  <div class='page experience'>
    <Jumbotron :name='jumbotron.name' :title='jumbotron.title' :subtitle='jumbotron.subtitle' :src='jumbotron.src' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start'
        intersection-ratios='.4'
        layout='nodisplay'>
      </amp-position-observer>
      <h1>Content here</h1>

      <div>
        <h1>More content here</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
        <h1>Even More Work</h1>
      </div>

    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'

export default {
  components: {
    Jumbotron
  },
  data () {
    return {
      jumbotron: {
        name: 'logs',
        title: 'logs',
        subtitle: 'employment history and work experiences',
        src: '/vectors/logs.svg'
      }
    }
  },
  asyncData (context) {
    // called every time before loading the component
    return {}
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  },
  // ...
}
</script>

<!-- You should not write any CSS here, but use ~/assets/main.css instead -->
