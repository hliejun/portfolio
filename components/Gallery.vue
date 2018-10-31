<template>
  <div v-bind:class="['gallery', theme, name]">
    <div class='gallery__content'>
      <amp-img
        class='gallery__image--main'
        v-bind:src='mainImage.src'
        height='1'
        width='1' />
      <div class='gallery__supp-images'>
        <amp-img
          class='gallery__image--supp'
          v-for='image in suppImages'
          v-bind:src='image.src'
          height='1'
          width='1' />
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
