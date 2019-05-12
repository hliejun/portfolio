const modifyHtml = (html, url) => {
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  html = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    str => {
      if (/application\/json/.test(str)) {
        return str
      }
      return ''
    }
  )
  let ampScript = `<script async src="https://cdn.ampproject.org/v0.js"></script>`
  if (url && url !== '/') {
    ampScript =
      ampScript +
      '<script async custom-element="amp-animation" src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"></script>' +
      '<script async custom-element="amp-position-observer" src="https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"></script>'
  }
  if (url && url === '/logs') {
    ampScript =
      ampScript +
      '<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>' +
      '<script async custom-element="amp-image-lightbox" src="https://cdn.ampproject.org/v0/amp-image-lightbox-0.1.js"></script>'
  }
  if (url && url.includes('/projects/')) {
    ampScript =
      ampScript +
      '<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>' +
      '<script async custom-element="amp-fx-flying-carpet" src="https://cdn.ampproject.org/v0/amp-fx-flying-carpet-0.1.js"></script>' +
      '<script async custom-element="amp-image-lightbox" src="https://cdn.ampproject.org/v0/amp-image-lightbox-0.1.js"></script>'
  }
  html = html.replace('</head>', ampScript + '</head>')
  return html
}

export default {
  head: {
    title: "hliejun's Portfolio",
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Lie Jun is a front-end engineer focusing on modern web, Android and iOS development.'
      },
      {
        name: 'viewport',
        content:
          'width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=5,user-scalable=yes'
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { property: 'og:title', content: "hliejun's Portfolio" },
      {
        property: 'og:description',
        content:
          'Lie Jun is a front-end engineer for modern web, Android and iOS.'
      },
      { property: 'og:url', content: 'hliejun.github.io' }
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
      {
        rel: 'shortcut icon',
        sizes: '32x32',
        href: '/favicon-32x32.png',
        type: 'image/png'
      },
      {
        rel: 'shortcut icon',
        sizes: '96x96',
        href: '/favicon-96x96.png',
        type: 'image/png'
      },
      { rel: 'apple-touch-icon', href: '/apple-icon.png', type: 'image/png' },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/android-icon-144x144.png',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
        type: 'image/png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
        type: 'image/png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700'
      }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      id: 'body'
    }
  },
  css: ['~/assets/scss/main.scss'],
  loading: false,
  render: {
    resourceHints: false
  },
  hooks: {
    'generate:page': page => {
      page.html = modifyHtml(page.html, page.route)
    },
    'render:route': (url, page) => {
      page.html = modifyHtml(page.html, url)
    }
  },
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    cacheTime: 1000 * 60 * 60,
    exclude: ['/companies/**'],
    generate: !!process.env.GENERATE,
    gzip: true,
    hostname: process.env.HOST
  },
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 2 }
            }
          ]
        ]
      }
    }
  }
}
