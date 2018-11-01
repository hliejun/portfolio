<template>
  <div class='page about'>
    <Jumbotron :name='jumbotron.name' :title='jumbotron.title' :subtitle='jumbotron.subtitle' :src='jumbotron.src' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start'
        intersection-ratios='.4'
        layout='nodisplay'>
      </amp-position-observer>
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
        name: 'book',
        title: 'readme',
        subtitle: 'introduction about me and my background',
        src: '/vectors/book.svg'
      }
    }
  }
}
</script>
