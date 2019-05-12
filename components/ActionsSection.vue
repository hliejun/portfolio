<template>
  <!-- TODO: Hover thumbnail previews -->

  <div v-if="items.length" :class="['project__section', name]">
    <div class="project__actions">
      <a
        v-for="action in items"
        :key="action.url"
        class="project__link"
        :href="action.url"
        :target="action.in ? '_self' : '_blank'"
        :rel="action.in ? undefined : 'noopener'"
      >
        <div class="code button project__button">
          {{ action.label }}
        </div>
      </a>
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
    items: {
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
    }
  }
}
</script>
