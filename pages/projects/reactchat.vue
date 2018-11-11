<template>
  <div class='page reactchat project'>
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
        title: 'React Chat',
        subtitle: 'Extensible presentational components for ReactJS chat interfaces, packaged as an NPM library.',
        actions: [
          {
            label: 'Docs',
            url: 'https://hliejun.github.io/react-chat'
          },
          {
            label: 'NPM Repo',
            url: 'https://www.npmjs.com/package/@hliejun/react-chat'
          },
          {
            label: 'Examples',
            url: 'https://hliejun.github.io/react-chat/docs'
          }
        ]
      },
      mockup: {
        src: '/images/projects/reactchat-1.png',
        orientation: 'landscape',
        type: 'wide'
      }
    }
  }
}
</script>
