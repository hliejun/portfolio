<template>
  <div class='page shopback company'>
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
        title: 'ShopBack',
        subtitle: `
          Sorry, but this page is currently under construction.
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
