<template>
  <div class='page littlelives project'>
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
        title: 'Little Lives Check-In',
        subtitle: 'Face Check-In features built into Little Check-In iOS application, made for Little Lives.',
        actions: [
          {
            label: 'About Little Lives',
            url: 'https://www.littlelives.com'
          }
        ]
      },
      mockup: {
        src: '/images/projects/littlelives-1.png',
        orientation: 'portrait',
        type: 'wide'
      }
    }
  }
}
</script>
