<template>
  <div v-bind:class="['article', theme, name]">
    <div class='article__content'>
      <div class='article__header'>
        <div class='article__header-text'>
          <span class='article__title'>{{title}}</span>
          <span class='article__subtitle'>{{subtitle}}</span>
        </div>
        <div class='article__tags'>
          <div v-for='tag in tags' :key='tag' class='article__tag' >
            <span>{{tag}}</span>
          </div>
        </div>
      </div>
      <div class='article__text' v-html='text' />
      <div class='article__footer'>
        <div class='article__links'>
          <a v-for='link in links' :key='link.url'
            class='article__link'
            v-bind:href='link.url'
            v-bind:target="link.in ? '_self' : '_blank'">
            <amp-img class='article__link-icon' v-bind:src='link.src' height='1' width='1' />
            <span class='article__link-text'>{{link.label}}</span>
          </a>
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
      default: [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (!element || typeof element !== 'string') {
              return false
            }
          })
        }
        return true
      }
    },
    text: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (!element
              || typeof element.label !== 'string'
              || typeof element.src !== 'string'
              || typeof element.url !== 'string') {
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
