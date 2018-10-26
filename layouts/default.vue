<template>
  <div class='layout'>
    <Header :logo= 'logo' :links='siteLinks'/>
    <nuxt/>
    <Footer :links='socialLinks'/>
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
      logo: { label: 'dev/hliejun', link: '/', src: '/images/profile.png' },
      siteLinks: [
        { label: '127.0.0.1', url: '/' },
        { label: 'commits', url: '/work' },
        { label: 'logs', url: '/blog' },
        { label: 'readme', url: '/about' }
      ],
      socialLinks: [
        { url: 'https://github.com/hliejun', src: '/vectors/github.svg' },
        { url: 'https://www.linkedin.com/in/hliejun/', src: '/vectors/linkedin.svg' },
        { url: 'https://twitter.com/hliejun', src: '/vectors/twitter.svg' },
        { url: 'https://medium.com/@hliejun.dev', src: '/vectors/medium.svg' },
        { url: 'https://dribbble.com/hliejun', src: '/vectors/dribbble.svg' }
      ]
    }
  }
}
</script>
