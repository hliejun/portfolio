<template>
  <div v-bind:class="['project__section', name]" v-if='items.length'>
    <div class='section__title'>{{label}}</div>
    <div class='section__container'>
      <div v-bind:class="['section__items', item.name]" v-for='item in items' :key='item.name'>
        <div class='section__subtitle'>{{item.title}}</div>
        <div class='section__row'>
          <div class='section__item tag' v-for='tag in item.tags' :key='tag.label'>
            <amp-img class='section__item-icon' v-if='tag.src' v-bind:src='tag.src' height='1' width='1' />
            <span class='section__item-label tag' v-if='tag.label'>{{tag.label}}</span>
            <span class='section__item-description' v-if='tag.description'>{{tag.description}}</span>
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
      default: [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (!element
              || typeof element.name !== 'string'
              || typeof element.tags !== 'array'
              || typeof element.title !== 'string') {
              return false
            }
            tags.forEach(tag => {
              if (!tag
                || typeof tag.description !== 'string'
                || typeof tag.label !== 'string') {
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
