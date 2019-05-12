<template>
  <div :class="['footer', theme, { splash }]">
    <div class="footer__content">
      <span class="code footer__text">{{ text }}</span>
      <div class="social">
        <div
          v-for="link in links"
          :key="link.url"
          class="button social__button"
        >
          <a
            class="social__content"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            <amp-img
              class="social__logo"
              height="1"
              :src="link.src"
              width="1"
            />
          </a>
        </div>
      </div>
      <div v-if="!splash" class="site-map">
        <!-- TODO: Sitemap table of links -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (
              !element ||
              typeof element.src !== 'string' ||
              typeof element.url !== 'string'
            ) {
              return false
            }
          })
        }
        return true
      }
    },
    text: {
      type: String,
      default: "Hello world, let's connect!"
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
