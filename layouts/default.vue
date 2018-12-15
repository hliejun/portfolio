<template>
  <div class='layout'>
    <amp-animation id='fadeIn' layout='nodisplay'>
      <script type='application/json' v-html='fadeIn' />
    </amp-animation>
    <amp-animation id='fadeOut' layout='nodisplay'>
      <script type='application/json' v-html='fadeOut' />
    </amp-animation>
    <div id='headerBackground' class='header__background card' />
    <Header :logo= 'logo' :links='siteLinks' />
    <nuxt/>
    <Footer :links='socialLinks' />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  components: {
    Footer,
    Header
  },
  data () {
    return {
      fadeIn: '{"duration": "200ms","fill": "both","iterations": "1",'
            + '"direction": "alternate","animations": [{"selector": '
            + '"#headerBackground","keyframes": [{"opacity": "1"}]}]}',
      fadeOut: '{"duration": "200ms","fill": "both","iterations": "1",'
            + '"direction": "alternate","animations": [{"selector": '
            + '"#headerBackground","keyframes": [{"opacity": "0"}]}]}',
      logo: {
        label: 'dev/hliejun',
        link: '/'
      },
      siteLinks: [
        {
          label: 'home',
          url: '/',
          src: '/vectors/header/home.svg'
        },
        {
          label: 'work',
          url: '/work',
          src: '/vectors/header/work.svg'
        },
        {
          label: 'logs',
          url: '/logs',
          src: '/vectors/header/logs.svg'
        },
        {
          label: 'info',
          url: '/about',
          src: '/vectors/header/about.svg'
        }
      ],
      socialLinks: [
        {
          src: '/vectors/social/github.svg',
          url: 'https://github.com/hliejun'
        },
        {
          src: '/vectors/social/linkedin.svg',
          url: 'https://www.linkedin.com/in/hliejun/'
        },
        {
          src: '/vectors/social/twitter.svg',
          url: 'https://twitter.com/hliejun'
        },
        {
          src: '/vectors/social/medium.svg',
          url: 'https://medium.com/@hliejun.dev'
        },
        {
          src: '/vectors/social/dribbble.svg',
          url: 'https://dribbble.com/hliejun'
        }
      ]
    }
  }
}
</script>
