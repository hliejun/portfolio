<template>
  <div v-bind:class="['preview', theme, name]">
    <a class='preview__link' v-bind:href='url'>
      <div class='preview__content'>
        <amp-img class='preview__image' v-bind:src='src' height='1' width='1' />
        <div class='preview__info-pane'>
          <div class='preview__title'>
            <span class='preview__text'>{{title}}</span>
          </div>
          <div class='preview__subtitle'>
            <span class='preview__text'>{{subtitle}}</span>
          </div>
          <div class='preview__tags'>
            <div class='preview__tag' v-for='tag in tags' :key='tag'>
              <span>{{tag}}</span>
            </div>
          </div>
          <div class='preview__description'>
            <span class='preview__text'>{{description}}</span>
          </div>
        </div>
      </div>
    </a>
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
    description: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    tags: {
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
