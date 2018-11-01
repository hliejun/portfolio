<template>
  <div v-bind:class="['header', theme, { splash }]">
    <nuxt-link class='avatar' to='/'>
      <amp-img class='avatar__image' v-if='splash' src='/images/profile.png' width='50' height='50' />
    </nuxt-link>
    <div class='logo' v-if='logo'>
      <div class='logo__button link'>
        <nuxt-link class='logo__content' v-bind:to='logo.link'>
          <span v-if='logo.label'>{{logo.label}}</span>
        </nuxt-link>
      </div>
    </div>
    <div class='links'>
      <div class='link' v-for='link in links' :key='link.label'>
        <div class='card link__container'>
          <nuxt-link class='code link__content' v-bind:to='link.url'>
            {{link.label}}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id='menu' class='menu'>
      <div id='panel' class='menu__panel hiding'>
        <div class='menu__content'>
          <div class='links--mobile'>
            <div class='link' v-for='link in links' :key='link.label'>
              <div class='card link__container'>
                <nuxt-link class='code link__content' v-bind:to='link.url'>
                  {{link.label}}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='card button menu__button' on="tap:
        close.toggleVisibility,
        hamburger.toggleVisibility,
        menu.toggleClass(class='menu--open'),
        panel.toggleClass(class='hiding'),
        body.toggleClass(class='hiding')
      ">
        <svg id='hamburger' class='menu__image' viewBox='0 0 134 134' fill='currentColor'>
          <path d='M16.667 41.667h100A8.34 8.34 0 0 0 125 33.333 8.34 8.34 0 0 0 116.667
                   25h-100a8.34 8.34 0 0 0-8.334 8.333 8.34 8.34 0 0 0 8.334 8.334zm100
                   16.666h-100a8.34 8.34 0 0 0-8.334 8.334A8.34 8.34 0 0 0 16.667 75h100A8.34
                   8.34 0 0 0 125 66.667a8.34 8.34 0 0 0-8.333-8.334zm0 33.334h-100A8.34 8.34
                   0 0 0 8.333 100a8.34 8.34 0 0 0 8.334 8.333h100A8.34 8.34 0 0 0 125 100a8.34
                   8.34 0 0 0-8.333-8.333z' />
        </svg>
        <svg id='close' class='menu__image' viewBox='0 0 559 559' fill='currentColor' hidden>
          <path d='M105.912 156.407L400.54 451.035c13.476 13.454 35.63 13.453 49.105-.003
                   13.453-13.476 13.453-35.627 0-49.103L155.017
                   107.3c-13.475-13.455-35.63-13.457-49.105-.003-13.457 13.477-13.457 35.633
                   0 49.11z"/><path d="M449.642 156.407L155.015 451.035c-13.477 13.454-35.63
                   13.453-49.106-.003-13.453-13.476-13.453-35.627 0-49.103L400.537
                   107.3c13.475-13.455 35.63-13.457 49.105-.003 13.457 13.477 13.457 35.633 0 49.11z' />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: Object,
      default: null,
      validator: value => !value
                        || (typeof value.label === 'string' && typeof value.link === 'string')
                        || (typeof value.link === 'string' && typeof value.src === 'string')
    },
    links: {
      type: Array,
      default: [],
      validator: value => {
        if (value && value.length) {
          value.forEach(element => {
            if (!element
              || typeof element.label !== 'string'
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
    },
    splash: {
      type: Boolean,
      default: false
    }
  }
}
</script>
