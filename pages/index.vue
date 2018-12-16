<template>
  <div class='page--splash index'>
    <div class='background'>
      <div class='gradient gradient--morning' />
      <div class='gradient gradient--noon' />
      <div class='gradient gradient--evening' />
      <div class='gradient gradient--dusk' />
      <div class='gradient gradient--dawn' />
    </div>
    <div class='content'>
      <amp-img class='stars left' src='/vectors/splash/stars.svg' height='1' width='1' layout='responsive' noloading />
      <amp-img class='stars right' src='/vectors/splash/stars.svg' height='1' width='1' layout='responsive' noloading />
      <amp-img class='rocket' src='/vectors/splash/rocket.svg' height='1' width='1' noloading />
      <div class='object__container--satellite'>
        <amp-img class='satellite' src='/vectors/splash/satellite.svg' height='1' width='1' noloading />
      </div>
      <div class='object__container--astronaut'>
        <amp-img class='astronaut' src='/images/splash/astronaut.png' height='1' width='1' noloading />
      </div>
      <div class='inner-content'>
        <div class='object__container--earth'>
          <amp-img class='earth' src='/images/splash/avatar-opaque.png' height='1' width='1' />
        </div>
        <h1 class='title'>hliejun</h1>
        <span class='stylized subtitle'>Front-End Developer</span>
        <span class='stylized subtitle'>Singapore</span>
        <a class='link__content resume__link' href='/documents/cv_hliejun.pdf' target='_blank'>
          <div class='card code button resume__button'>Curriculum Vitæ</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout (context) {
    return 'splash'
  }
}
</script>
