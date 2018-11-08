<template>
  <div class='jumbotron'>
    <amp-position-observer on='exit:fadeIn.start' intersection-ratios='0.2' layout='nodisplay' />
    <amp-position-observer on='enter:fadeOut.start' intersection-ratios='0.2' layout='nodisplay' />
    <div class='jumbotron__content'>
      <amp-img
        v-bind:class="['jumbotron__image', theme, name]"
        v-if='src'
        v-bind:src='src'
        height='150'
        width='150'
        sizes='(min-width: 600px) 150px, 100px' />
      <span class='stylized jumbotron__title'>{{title}}</span>
      <span class='stylized jumbotron__subtitle'>{{subtitle}}</span>
      <div class='jumbotron__actions' v-if='actions.length'>
        <a class='jumbotron__link' v-for='action in actions' v-bind:href='action.url' target='_blank'>
          <div class='code button jumbotron__button'>
            {{action.label}}
          </div>
        </a>
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
    actions: {
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
