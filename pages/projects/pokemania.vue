<template>
  <div class='page pokemania project'>
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
        title: 'Pokémania',
        subtitle: 'Pokémon-themed bubble blast iOS game application built for NUS module CS3217.',
        actions: [
          {
            label: 'GitHub Repo',
            url: 'https://github.com/hliejun/Pokemania'
          },
          {
            label: 'See Submissions',
            url: 'https://youtu.be/Ha_HiwbrJyw'
          }
        ]
      },
      mockup: {
        src: '/images/projects/pokemania-1.png',
        orientation: 'portrait',
        type: 'wide'
      }
    }
  }
}
</script>
