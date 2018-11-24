<template>

  <!-- TODO: Icons and glyphs for sections and items -->

  <div v-if='items.length' v-bind:class="['project__section', name]">
    <div class='section__title'>{{label}}</div>
    <div v-for='item in items' :key='item.name' v-bind:class="['section__items', item.name]">
      <div class='section__subtitle'>{{item.title}}</div>
      <amp-img v-if='item.src' class='section__item-image' v-bind:src='item.src' height='1' width='1' />
      <div v-if='item.text' v-bind:class="['section__item-text', item.name]" v-html='item.text' />
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
              || typeof element.text !== 'string'
              || typeof element.title !== 'string') {
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
