<template>
  <div v-bind:class="['gallery', theme, name]">
    <div v-bind:class="['gallery__content', { standalone: !suppImages || !suppImages.length }]">
      <amp-image-lightbox id='lightbox' layout='nodisplay' />
      <amp-video controls autoplay loop noaudio
        class='gallery__image--main'
        height='1'
        width='1'
        v-if='mainImage.video'
        v-bind:poster='mainImage.poster'>
        <source v-bind:src='mainImage.webm' type='video/webm' />
        <source v-bind:src='mainImage.video' type='video/mp4' />
      </amp-video>
      <amp-img
        class='gallery__image--main'
        v-else-if='mainImage.src'
        v-bind:src='mainImage.src'
        on='tap:lightbox'
        role='button'
        tabindex='0'
        height='1'
        width='1' />
      <div class='gallery__supp-images' v-if='suppImages.length'>
        <div class='gallery__image-container' v-for='image in suppImages' :key='image.src'>
          <amp-video autoplay controls loop noaudio
            class='gallery__image--supp'
            height='1'
            width='1'
            v-if='image.video'
            v-bind:poster='image.poster'
            :key='image.src'>
            <source v-bind:src='image.webm' type='video/webm' />
            <source v-bind:src='image.video' type='video/mp4' />
          </amp-video>
          <amp-img
            class='gallery__image--supp'
            v-else-if='image.src'
            v-bind:src='image.src'
            on='tap:lightbox'
            role='button'
            tabindex='0'
            height='1'
            width='1'
            :key='image.src' />
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
      default: {}
    },
    suppImages: {
      type: Array,
      default: []
    },
    theme: {
      type: String,
      default: 'light'
    }
  }
}
</script>
