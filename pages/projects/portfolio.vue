<template>
  <div class='page portfolio project'>
    <div class='project__header'>
      <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
      <Jumbotron
        :name='jumbotron.name'
        :title='jumbotron.title'
        :subtitle='jumbotron.subtitle'
        :src='jumbotron.src'
        :actions='jumbotron.actions' />
    </div>

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
        title: 'Portfolio',
        subtitle: 'Portfolio website documenting my personal work and projects.',
        actions: [
          {
            label: 'GitHub Repo',
            url: 'https://github.com/hliejun/portfolio'
          },
        ]
      },
      mockup: {
        src: '/images/projects/portfolio-1.png',
        orientation: 'portrait',
        type: 'wide'
      }
    }
  }
}
</script>
