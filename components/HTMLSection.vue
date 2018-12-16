<template>
  <div v-if='items.length' v-bind:class="['project__section', name]">
    <amp-fx-flying-carpet v-if='carpet' class='section__flying-carpet' height='1'>
      <amp-img class='section__flying-carpet-image' v-bind:src='carpet' height='1' width='1' />
    </amp-fx-flying-carpet>
    <div class='section__title'>{{label}}</div>
    <div v-for='item in items' :key='item.name' v-bind:class="['section__items', item.name]">
      <div class='section__subtitle'>{{item.title}}</div>
      <div class='section__sub-row'>
        <amp-video controls autoplay loop noaudio v-if='item.video'
          class='section__item-image'
          height='1'
          v-bind:poster='item.poster'
          width='1'>
          <source v-bind:src='item.webm' type='video/webm' />
          <source v-bind:src='item.video' type='video/mp4' />
        </amp-video>
        <amp-img v-else-if='item.src'
          class='section__item-image'
          height='1'
          on='tap:lightbox'
          role='button'
          tabindex='0'
          v-bind:src='item.src'
          width='1' />
        <div v-if='item.text' v-bind:class="['section__item-text', item.name]" v-html='item.text' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carpet: {
      type: String,
      default: ''
    },
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
