<template>
  <div class='page urbanzoom project'>
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
        title: 'UrbanZoom Assistant',
        subtitle: 'Google Assistant and Twilio agent that performs property valuation homes in Singapore.',
        actions: [
          {
            label: 'Try the Action',
            url: 'https://assistant.google.com/services/a/uid/0000002516830acd?hl=en&source=web'
          },
          {
            label: 'Dial In (SG)',
            url: 'tel:+6531388416'
          }
        ]
      },
      mockup: {
        src: '/images/projects/urbanzoom-1.png',
        orientation: 'portrait',
        type: 'narrow'
      }
    }
  }
}
</script>
