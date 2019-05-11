<template>
  <div :class="['gallery', theme, name]">
    <div
      :class="[
        'gallery__content',
        { standalone: !suppImages || !suppImages.length }
      ]"
    >
      <amp-image-lightbox
        id="lightbox"
        class="gallery__lightbox"
        layout="nodisplay"
      />
      <amp-video
        v-if="mainImage.video"
        controls
        autoplay
        loop
        noaudio
        class="gallery__image--main"
        height="1"
        :poster="mainImage.poster"
        width="1"
      >
        <!-- <source :src="mainImage.webm" type="video/webm" /> -->
        <source :src="mainImage.video" type="video/mp4" />
      </amp-video>
      <amp-img
        v-else-if="mainImage.src"
        class="gallery__image--main"
        height="1"
        on="tap:lightbox"
        role="button"
        tabindex="0"
        :src="mainImage.src"
        width="1"
      />
      <div v-if="suppImages.length" class="gallery__supp-images">
        <div
          v-for="image in suppImages"
          :key="image.src"
          class="gallery__image-container"
        >
          <amp-video
            v-if="image.video"
            :key="image.src"
            autoplay
            controls
            loop
            noaudio
            class="gallery__image--supp"
            height="1"
            :poster="image.poster"
            width="1"
          >
            <!-- <source :src="image.webm" type="video/webm" /> -->
            <source :src="image.video" type="video/mp4" />
          </amp-video>
          <amp-img
            v-else-if="image.src"
            :key="image.src"
            class="gallery__image--supp"
            height="1"
            on="tap:lightbox"
            role="button"
            tabindex="0"
            :src="image.src"
            width="1"
          />
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
      default: () => ({}),
      validator: value => {
        if (Object.keys(value).length) {
          if (
            (typeof value.video !== 'string' ||
              typeof value.webm !== 'string') &&
            typeof value.src !== 'string'
          ) {
            return false
          }
        }
        return true
      }
    },
    suppImages: {
      type: Array,
      default: () => [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (
              !element ||
              ((typeof element.video !== 'string' ||
                typeof element.webm !== 'string') &&
                typeof element.src !== 'string')
            ) {
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
