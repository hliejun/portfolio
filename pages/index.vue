<template>
  <div class="page--splash index">
    <div class="background">
      <div class="gradient gradient--morning" />
      <div class="gradient gradient--noon" />
      <div class="gradient gradient--evening" />
      <div class="gradient gradient--dusk" />
      <div class="gradient gradient--dawn" />
    </div>
    <div class="content">
      <amp-img
        class="stars left"
        src="/vectors/splash/stars.svg"
        height="1"
        width="1"
        layout="responsive"
        noloading
      />
      <amp-img
        class="stars right"
        src="/vectors/splash/stars.svg"
        height="1"
        width="1"
        layout="responsive"
        noloading
      />
      <amp-img
        class="rocket"
        src="/vectors/splash/rocket.svg"
        height="1"
        width="1"
        noloading
      />
      <div class="object__container--satellite">
        <amp-img
          class="satellite"
          src="/vectors/splash/satellite.svg"
          height="1"
          width="1"
          noloading
        />
      </div>
      <div class="object__container--astronaut">
        <amp-img
          class="astronaut"
          src="/images/splash/astronaut.png"
          height="1"
          width="1"
          noloading
        />
      </div>
      <div class="inner-content">
        <div class="object__container--earth">
          <amp-img
            class="earth"
            src="/images/splash/avatar-opaque.png"
            height="1"
            width="1"
          />
        </div>
        <h1 class="title">
          hliejun
        </h1>
        <span class="stylized subtitle">Front-End Developer</span>
        <span class="stylized subtitle">Singapore</span>
        <a
          class="link__content resume__link"
          href="/documents/resume_hliejun.pdf"
          target="_blank"
        >
          <div class="card code button resume__button">Résumé</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout() {
    return 'splash'
  },
  head() {
    return {
      title: 'Home - hliejun',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Lie Jun is a front-end engineer focusing on modern web, Android and iOS development.'
        },
        { property: 'og:title', content: 'Home - hliejun' },
        {
          property: 'og:description',
          content:
            'Lie Jun is a front-end engineer for modern web, Android and iOS.'
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content: 'https://hliejun.github.io/images/meta/preview.jpg'
        }
      ],
      link: [{ rel: 'canonical', href: `${process.env.HOST}` }]
    }
  }
}
</script>
