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
      <amp-img class='stars left' src='/vectors/stars.svg' height='1' width='2' layout='responsive' />
      <amp-img class='stars right' src='/vectors/stars.svg' height='1' width='2' layout='responsive' />
      <amp-img class='rocket' src='/vectors/rocket.svg' width='60' height='60'/>
      <div class='object__container--satellite'>
        <amp-img class='satellite' src='/vectors/satellite.svg' width='100' height='100' />
      </div>
      <div class='object__container--astronaut'>
        <amp-img class='astronaut' src='/images/astronaut.png' width='300' height='300' />
      </div>
      <div class='inner-content'>
        <div class='object__container--earth'>
          <amp-img class='earth' src='/vectors/earth.svg' width='200' height='200' sizes='
            (max-width: 500px) 140px,
            (min-width: 901px) 240px,
            200px' />
        </div>
        <h1 class='title'>hliejun</h1>
        <span class='stylized subtitle'>full-stack developer</span>
        <span class='stylized subtitle'>Singapore</span>
        <a class='link__content resume__link' href='/documents/resume.pdf' target='_blank'>
          <div class='card code button resume__button'>
            download resume
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    // called every time before loading the component
    return {}
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  },
  layout (context) {
    return 'splash'
  },
  // ...
}
</script>

<!-- You should not write any CSS here, but use ~/assets/main.css instead -->
