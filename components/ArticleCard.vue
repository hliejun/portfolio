<template>
  <div v-bind:class="['article', theme, name]">
    <div class='article__content'>
      <div class='article__header'>
        <div class='article__header-text'>
          <span class='article__title'>{{title}}</span>
          <span class='article__subtitle'>{{subtitle}}</span>
        </div>
        <div class='article__tags'>
          <div class='article__tag' v-for='tag in tags'>
            <span>{{tag}}</span>
          </div>
        </div>
      </div>
      <div class='article__text' v-html='text' />
      <div class='article__footer'>
        <div class='article__links'>
          <a class='article__link' v-for='link in links'>
            <amp-img
              class='article__link-icon'
              v-bind:src='link.src'
              height='1'
              width='1' />
            <span class='article__link-text'>
              {{link.label}}
            </span>
          </a>
        </div>
        <div class='article__notes'>
          <div class='article__note' v-for='note in notes'>
            <amp-img
              class='article__note-icon'
              v-bind:src='note.src'
              height='1'
              width='1' />
            <span class='article__note-text'>
              {{note.text}}
            </span>
          </div>
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
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: []
    },
    text: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: []
    },
    notes: {
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
