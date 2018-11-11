<template>
  <div class='page bitsy project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
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
import Mockup from '../../components/Mockup'

export default {
  components: {
    Jumbotron,
    Mockup
  },
  data () {
    return {
      jumbotron: {
        title: 'Missing Children of Ann Siang Hill',
        subtitle: 'Interactive pixel story made using Bitsy for NUS module NM3222.',
        actions: [
          {
            label: 'Play Story',
            url: 'https://hliejun.github.io/bitsy-story'
          },
          {
            label: 'On itch.io',
            url: 'https://hliejun.itch.io/missing-children-of-ann-siang-hill'
          },
          {
            label: 'About Bitsy',
            url: 'https://ledoux.itch.io/bitsy'
          }
        ]
      },
      mockup: {
        src: '/images/projects/bitsy-1.png',
        orientation: 'landscape',
        type: 'wide'
      }
    }
  }
}
</script>
