<template>
  <div class="jumbotron">
    <amp-position-observer
      on="exit:fadeIn.start"
      intersection-ratios="0.2"
      layout="nodisplay"
    />
    <amp-position-observer
      on="enter:fadeOut.start"
      intersection-ratios="0.2"
      layout="nodisplay"
    />
    <div class="jumbotron__content">
      <amp-img
        v-if="src"
        height="1"
        :class="['jumbotron__image', theme, name]"
        :src="src"
        width="1"
      />
      <span class="stylized jumbotron__title">{{ title }}</span>
      <div
        v-if="subtitle.includes('<br>')"
        class="stylized jumbotron__subtitle"
        v-html="subtitle"
      />
      <span v-else class="stylized jumbotron__subtitle">{{ subtitle }}</span>
      <div v-if="actions.length" class="jumbotron__actions">
        <a
          v-for="action in actions"
          :key="action.url"
          class="jumbotron__link"
          :href="action.url"
          :target="action.in ? '_self' : '_blank'"
          :rel="action.in ? undefined : 'noopener'"
        >
          <div class="code button jumbotron__button">
            {{ action.label }}
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
      default: () => [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (
              !element ||
              typeof element.label !== 'string' ||
              typeof element.url !== 'string'
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
