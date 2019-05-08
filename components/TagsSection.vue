<template>
  <div v-if="items.length" :class="['project__section', name]">
    <div class="section__title">
      {{ label }}
    </div>
    <div class="section__container">
      <div
        v-for="item in items"
        :key="item.name"
        :class="['section__items', item.name]"
      >
        <div class="section__subtitle">
          {{ item.title }}
        </div>
        <div class="section__row">
          <div
            v-for="tag in item.tags"
            :key="tag.label"
            class="section__item tag"
          >
            <amp-img
              v-if="tag.src"
              class="section__item-icon"
              :src="tag.src"
              height="1"
              width="1"
            />
            <span v-if="tag.label" class="section__item-label tag">{{
              tag.label
            }}</span>
            <span v-if="tag.description" class="section__item-description">{{
              tag.description
            }}</span>
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
              typeof element.name !== 'string' ||
              typeof element.title !== 'string' ||
              !Array.isArray(element.tags)
            ) {
              return false
            }
            element.tags.forEach(tag => {
              if (
                !tag ||
                typeof tag.description !== 'string' ||
                typeof tag.label !== 'string'
              ) {
                return false
              }
            })
          })
        }
        return true
      }
    }
  }
}
</script>
