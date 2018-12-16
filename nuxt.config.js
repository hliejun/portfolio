const modifyHtml = (html, url) => {
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (str) => {
    if (/application\/json/.test(str)) {
      return str
    }
    return ''
  })
  let ampScript = `<script async src="https://cdn.ampproject.org/v0.js"></script>`
  if (url && url !== '/') {
    ampScript = ampScript
      + '<script async custom-element="amp-animation" src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"></script>'
      + '<script async custom-element="amp-position-observer" src="https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"></script>'
  }
  if (url && url === '/logs') {
    ampScript = ampScript
      + '<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>'
      + '<script async custom-element="amp-image-lightbox" src="https://cdn.ampproject.org/v0/amp-image-lightbox-0.1.js"></script>'
  }
  if (url && url.includes('/projects/')) {
    ampScript = ampScript
      + '<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>'
      + '<script async custom-element="amp-fx-flying-carpet" src="https://cdn.ampproject.org/v0/amp-fx-flying-carpet-0.1.js"></script>'
      + '<script async custom-element="amp-image-lightbox" src="https://cdn.ampproject.org/v0/amp-image-lightbox-0.1.js"></script>'
  }
  html = html.replace('</head>', ampScript + '</head>')
  return html
}

export default {
  head: {
    title: "hliejun's portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Lie Jun is a front-end software developer focusing on modern web, Android and iOS development. Check out his portfolio here.' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1,user-scalable=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { property: 'og:title', content: "hliejun's portfolio" },
      { property: 'og:description', content: 'Lie Jun is a front-end software developer focusing on modern web, Android and iOS development. Check out his portfolio here.' },
      { property: 'og:url', content: 'hliejun.github.io' },
      { property: 'og:image', content: '/images/splash/avatar-opaque.png' }
    ],
    link: [
      { rel: 'canonical', href: '/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'shortcut-icon', href: '/fav-icon.ico', type: 'image/x-icon' },
      { rel: 'apple-touch-icon', href: '/apple-icon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' }
    ],
    bodyAttrs: {
      id: 'body'
    }
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  loading: false,
  render: {
    resourceHints: false
  },
  hooks: {
    'generate:page': (page) => {
      page.html = modifyHtml(page.html, page.route)
    },
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html, url)
    }
  },
  modules: [
    'nuxt-purgecss'
  ],
  purgeCSS: {
    mode: 'postcss',
    enabled: false
  }
}
