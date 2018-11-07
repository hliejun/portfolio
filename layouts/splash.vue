<template>
  <div class='layout'>
    <Header :logo= 'logo' :links='siteLinks' splash />
    <nuxt/>
    <Footer :links='socialLinks' splash />
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
      logo: { label: 'dev/hliejun', link: '/', src: '/images/splash/profile.png' },
      siteLinks: [
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
