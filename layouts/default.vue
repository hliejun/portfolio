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
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      fadeIn: '{"duration": "200ms","fill": "both","iterations": "1","direction": "alternate",' +
                '"animations": [{"selector": "#headerBackground","keyframes": [{"opacity": "1"}]}]}',
      fadeOut: '{"duration": "200ms","fill": "both","iterations": "1","direction": "alternate",' +
                '"animations": [{"selector": "#headerBackground","keyframes": [{"opacity": "0"}]}]}',
      logo: { label: 'dev/hliejun', link: '/', src: '/images/splash/profile.png' },
      siteLinks: [
        { label: '127.0.0.1', url: '/' },
        { label: 'commits', url: '/work' },
        { label: 'logs', url: '/experience' },
        { label: 'readme', url: '/about' }
      ],
      socialLinks: [
        { url: 'https://github.com/hliejun', src: '/vectors/social/github.svg' },
        { url: 'https://www.linkedin.com/in/hliejun/', src: '/vectors/social/linkedin.svg' },
        { url: 'https://twitter.com/hliejun', src: '/vectors/social/twitter.svg' },
        { url: 'https://medium.com/@hliejun.dev', src: '/vectors/social/medium.svg' },
        { url: 'https://dribbble.com/hliejun', src: '/vectors/social/dribbble.svg' }
      ]
    }
  }
}
</script>
