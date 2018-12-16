<template>
  <div class='page urbanzoom company'>
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
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
        title: 'UrbanZoom',
        subtitle: `
          Heave-ho, heave-ho! Phew!<br>
          Sorry, but I am still building this page. <br>
          Please check back later.
        `,
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
