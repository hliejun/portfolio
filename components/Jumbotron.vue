<template>
  <div class='jumbotron'>
    <amp-position-observer on='exit:fadeIn.start'
      intersection-ratios='0.2'
      layout='nodisplay'>
    </amp-position-observer>
    <amp-position-observer on='enter:fadeOut.start'
      intersection-ratios='0.2'
      layout='nodisplay'>
    </amp-position-observer>
    <div class='jumbotron__content'>
      <amp-img
        v-bind:class="['jumbotron__image', theme, name]"
        v-bind:src='src'
        height='150'
        width='150'
        sizes='(min-width: 600px) 150px, 100px' />
      <span class='stylized jumbotron__title'>{{title}}</span>
      <span class='stylized jumbotron__subtitle'>{{subtitle}}</span>
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
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'light'
    }
  }
}
</script>
