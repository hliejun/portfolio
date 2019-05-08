<template>
  <div :class="['mockup', orientation, type]">
    <div class="mockup__container">
      <div class="mockup__image">
        <amp-img
          v-if="src"
          class="isometric__image"
          :height="
            type === 'wide'
              ? orientation === 'portrait'
                ? '64vw'
                : '48vw'
              : orientation === 'portrait'
              ? '64vw'
              : '40vw'
          "
          :src="src"
          :width="
            type === 'wide'
              ? orientation === 'portrait'
                ? '48vw'
                : '64vw'
              : orientation === 'portrait'
              ? '40vw'
              : '64vw'
          "
        />
      </div>
      <div class="mockup__shadow" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    orientation: {
      type: String,
      default: 'landscape'
    },
    type: {
      type: String,
      default: 'wide'
    }
  }
}
</script>
