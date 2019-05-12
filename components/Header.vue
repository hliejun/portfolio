<template>
  <div :class="['header', theme, { splash }]">
    <nuxt-link class="avatar" to="/">
      <amp-img
        v-if="!splash"
        class="avatar__image"
        :src="avatar"
        height="1"
        width="1"
      />
    </nuxt-link>
    <div v-if="logo" class="logo">
      <div class="logo__button link">
        <nuxt-link class="logo__content" :to="logo.link">
          <span v-if="logo.label">{{ logo.label }}</span>
        </nuxt-link>
      </div>
    </div>
    <div class="links">
      <div v-for="link in links" :key="link.label" class="link">
        <div class="card link__container">
          <nuxt-link class="code link__content" :to="link.url">
            <svg
              v-if="link.url === '/'"
              id="home-icon"
              class="menu__link-icon"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="currentColor"
                d="
                M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67
                3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55
                0 1-.45 1-1z
              "
              />
            </svg>
            <svg
              v-if="link.url === '/work'"
              id="work-icon"
              class="menu__link-icon"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="currentColor"
                d="
                M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0
                1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z
              "
              />
            </svg>
            <svg
              v-if="link.url === '/logs'"
              id="logs-icon"
              class="menu__link-icon"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="currentColor"
                d="
                M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71
                0l2.79-2.8c.31-.31.09-.85-.36-.85H6c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9
                6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48-.4-.31-.96-.28-1.32.08-.42.42-.39
                1.13.08 1.49C9 20.29 10.91 21 13 21c5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51
                5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09
                1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74z
              "
              />
            </svg>
            <svg
              v-if="link.url === '/info'"
              id="info-icon"
              class="menu__link-icon"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="currentColor"
                d="
                M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55
                0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z
              "
              />
            </svg>
            {{ link.label }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id="menu" class="menu">
      <div id="panel" class="menu__panel hiding">
        <div class="menu__content">
          <div class="links--mobile">
            <div v-for="link in links" :key="link.label" class="link">
              <div class="card link__container">
                <nuxt-link class="code link__content" :to="link.url">
                  <svg
                    v-if="link.url === '/'"
                    id="home-icon-mobile"
                    class="menu__link-icon"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path
                      fill="currentColor"
                      d="
                      M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67
                      3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55
                      0 1-.45 1-1z
                    "
                    />
                  </svg>
                  <svg
                    v-if="link.url === '/work'"
                    id="work-icon-mobile"
                    class="menu__link-icon"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path
                      fill="currentColor"
                      d="
                      M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0
                      1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z
                    "
                    />
                  </svg>
                  <svg
                    v-if="link.url === '/logs'"
                    id="logs-icon-mobile"
                    class="menu__link-icon"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path
                      fill="currentColor"
                      d="
                      M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71
                      0l2.79-2.8c.31-.31.09-.85-.36-.85H6c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9
                      6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48-.4-.31-.96-.28-1.32.08-.42.42-.39
                      1.13.08 1.49C9 20.29 10.91 21 13 21c5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51
                      5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09
                      1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74z
                    "
                    />
                  </svg>
                  <svg
                    v-if="link.url === '/info'"
                    id="info-icon-mobile"
                    class="menu__link-icon"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path
                      fill="currentColor"
                      d="
                      M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55
                      0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z
                    "
                    />
                  </svg>
                  {{ link.label }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card button menu__button"
        on="tap:
        body.toggleClass(class='hiding'),
        close.toggleVisibility,
        hamburger.toggleVisibility,
        menu.toggleClass(class='menu--open'),
        panel.toggleClass(class='hiding')
      "
      >
        <svg
          id="hamburger"
          class="menu__image"
          viewBox="0 0 134 134"
          fill="currentColor"
        >
          <path
            d="
            M16.667 41.667h100A8.34 8.34 0 0 0 125 33.333 8.34 8.34 0 0 0 116.667
            25h-100a8.34 8.34 0 0 0-8.334 8.333 8.34 8.34 0 0 0 8.334 8.334zm100
            16.666h-100a8.34 8.34 0 0 0-8.334 8.334A8.34 8.34 0 0 0 16.667 75h100A8.34
            8.34 0 0 0 125 66.667a8.34 8.34 0 0 0-8.333-8.334zm0 33.334h-100A8.34 8.34
            0 0 0 8.333 100a8.34 8.34 0 0 0 8.334 8.333h100A8.34 8.34 0 0 0 125 100a8.34
            8.34 0 0 0-8.333-8.333z
          "
          />
        </svg>
        <svg
          id="close"
          class="menu__image"
          viewBox="0 0 559 559"
          fill="currentColor"
          hidden
        >
          <path
            d='
            M105.912 156.407L400.54 451.035c13.476 13.454 35.63 13.453 49.105-.003
            13.453-13.476 13.453-35.627 0-49.103L155.017
            107.3c-13.475-13.455-35.63-13.457-49.105-.003-13.457 13.477-13.457 35.633
            0 49.11z"/><path d="M449.642 156.407L155.015 451.035c-13.477 13.454-35.63
            13.453-49.106-.003-13.453-13.476-13.453-35.627 0-49.103L400.537
            107.3c13.475-13.455 35.63-13.457 49.105-.003 13.457 13.477 13.457 35.633 0 49.11z
          '
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: '/images/splash/avatar-opaque.png'
    },
    logo: {
      type: Object,
      default: null,
      validator: value =>
        !value ||
        (typeof value.label === 'string' && typeof value.link === 'string') ||
        (typeof value.link === 'string' && typeof value.src === 'string')
    },
    links: {
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
    },
    splash: {
      type: Boolean,
      default: false
    }
  }
}
</script>
