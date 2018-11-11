<template>
  <div class='page hypedyn project'>
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
        title: 'HypeDyn Stories',
        subtitle: 'Interactive textual stories made using HypeDyn for NUS module NM3222.',
        actions: [
          {
            label: 'Air Crash',
            url: 'https://hliejun.github.io/hypedyn-air-crash-investigation'
          },
          {
            label: 'The Patrol',
            url: 'https://hliejun.github.io/hypedyn-the-patrol'
          },
          {
            label: 'About HypeDyn',
            url: 'http://www.narrativeandplay.org/hypedyn'
          }
        ]
      },
      mockup: {
        src: '/images/projects/hypedyn-1.png',
        orientation: 'portrait',
        type: 'wide'
      }
    }
  }
}
</script>
