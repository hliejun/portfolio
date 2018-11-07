<template>
  <div class='page reactchat'>
    <Jumbotron :name='jumbotron.name' :title='jumbotron.title' :subtitle='jumbotron.subtitle' :src='jumbotron.src' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start'
        intersection-ratios='0'
        layout='nodisplay'>
      </amp-position-observer>
    </div>
  </div>
</template>

<script>
import Jumbotron from '../../components/Jumbotron'

export default {
  components: {
    Jumbotron
  },
  data () {
    return {
      jumbotron: {
        title: 'React Chat',
        subtitle: 'This page is under construction, please check back later.',
      }
    }
  }
}
</script>
