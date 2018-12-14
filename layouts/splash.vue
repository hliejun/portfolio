<template>
  <div class='layout'>
    <Header :logo= 'logo' :links='siteLinks' splash />
    <nuxt/>
    <Footer :links='socialLinks' splash />
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
      logo: {
        label: 'dev/hliejun',
        link: '/'
      },
      siteLinks: [
        {
          label: 'home',
          url: '/'
        },
        {
          label: 'work',
          url: '/work'
        },
        {
          label: 'logs',
          url: '/logs'
        },
        {
          label: 'about',
          url: '/about'
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
