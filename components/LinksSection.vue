<template>
  <div v-if="items.length" :class="['project__section', name]">
    <div class="section__title">
      {{ label }}
    </div>
    <div :class="['section__items', name]">
      <div v-for="item in items" :key="item.label" class="section__item">
        <a
          :class="['section__item-link', { disabled: !item.url }]"
          :href="item.url"
          target="_blank"
          rel="noopener"
        >
          <amp-img
            v-if="item.src"
            class="section__item-image"
            :src="item.src"
            height="1"
            width="1"
          />
          <div class="section__item-content">
            <span v-if="item.label" class="section__item-label">{{
              item.label
            }}</span>
            <span v-if="item.description" class="section__item-description">{{
              item.description
            }}</span>
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
    label: {
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
              typeof element.description !== 'string' ||
              typeof element.label !== 'string'
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
