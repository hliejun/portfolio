<template>
  <div v-bind:class="['gallery', theme, name]">
    <div v-bind:class="['gallery__content', { standalone: !suppImages || !suppImages.length }]">
      <amp-image-lightbox id='lightbox' layout='nodisplay' />
      <amp-video controls autoplay loop noaudio v-if='mainImage.video'
        class='gallery__image--main'
        height='1'
        v-bind:poster='mainImage.poster'
        width='1'>
        <source v-bind:src='mainImage.webm' type='video/webm' />
        <source v-bind:src='mainImage.video' type='video/mp4' />
      </amp-video>
      <amp-img v-else-if='mainImage.src'
        class='gallery__image--main'
        height='1'
        on='tap:lightbox'
        role='button'
        tabindex='0'
        v-bind:src='mainImage.src'
        width='1' />
      <div class='gallery__supp-images' v-if='suppImages.length'>
        <div class='gallery__image-container' v-for='image in suppImages' :key='image.src'>
          <amp-video autoplay controls loop noaudio v-if='image.video' :key='image.src'
            class='gallery__image--supp'
            height='1'
            v-bind:poster='image.poster'
            width='1'>
            <source v-bind:src='image.webm' type='video/webm' />
            <source v-bind:src='image.video' type='video/mp4' />
          </amp-video>
          <amp-img v-else-if='image.src' :key='image.src'
            class='gallery__image--supp'
            height='1'
            on='tap:lightbox'
            role='button'
            tabindex='0'
            v-bind:src='image.src'
            width='1' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    mainImage: {
      type: Object,
      default: {},
      validator: value => {
        if (Object.keys(value).length) {
          if ((typeof value.video !== 'string' || typeof value.webm !== 'string')
              && typeof value.src !== 'string') {
            return false
          }
        }
        return true
      }
    },
    suppImages: {
      type: Array,
      default: [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (!element
                || ((typeof element.video !== 'string' || typeof element.webm !== 'string')
                  && typeof element.src !== 'string')) {
              return false
            }
          })
        }
        return true
      }
    },
    theme: {
      type: String,
      default: 'light'
    }
  }
}
</script>
