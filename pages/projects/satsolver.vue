<template>
  <div class='page satsolver project'>
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
        title: 'SAT Solver',
        subtitle: 'Research on efficiency of satisfiability resolution strategies.',
        actions: [
          {
            label: 'GitHub Repo',
            url: ''
          }
        ]
      },
      mockup: {
        src: '/images/projects/satsolver-1.png',
        orientation: 'landscape',
        type: 'wide'
      }
    }
  }
}
</script>
