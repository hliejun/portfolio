<template>
  <div v-bind:class="['footer', theme, { splash }]">
    <div class='footer__content'>
      <span class='code footer__text'>Hello world, let's connect!</span>
      <div class='social'>
        <div class='button social__button' v-for='link in links'>
          <a class='social__content' v-bind:href='link.url' target='_blank'>
            <amp-img
              class='social-logo'
              v-bind:src='link.src'
              height='40'
              width='40'
              sizes='(min-width: 600px) 40px, 30px' />
          </a>
        </div>
      </div>
      <div class='site-map' v-if='!splash'>
        <!-- Place sitemap here -->
        <!-- <span class='code footer__text'>Site Map</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (!element
              || typeof element.url !== 'string'
              || typeof element.src !== 'string') {
              return false
            }
          })
        }
        return true
      }
    },
    text: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'light'
    },
    splash: {
      type: Boolean,
      default: false
    }
  }
}
</script>
