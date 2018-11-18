<template>
  <div class='page dso company'>
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='0' layout='nodisplay' />
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
        title: 'DSO',
        subtitle: 'Sorry, but this page is currently under construction. Please check back later.',
        actions: [
          {
            label: 'Return',
            url: '/logs',
            in: true
          }
        ]
      }
    }
  }
}
</script>
