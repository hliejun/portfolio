<template>
  <div :class="['preview', theme, name]">
    <a class="preview__link" :href="url">
      <div class="preview__content">
        <amp-img class="preview__image" :src="src" height="1" width="1" />
        <div class="preview__info-pane">
          <div class="preview__title">
            <span class="preview__text">{{ title }}</span>
          </div>
          <div class="preview__subtitle">
            <span class="preview__text">{{ subtitle }}</span>
          </div>
          <div class="preview__tags">
            <div v-for="tag in tags" :key="tag" class="preview__tag">
              <span>{{ tag }}</span>
            </div>
          </div>
          <div class="preview__description">
            <span class="preview__text">{{ description }}</span>
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
      default: () => [],
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
    theme: {
      type: String,
      default: 'light'
    }
  }
}
</script>
