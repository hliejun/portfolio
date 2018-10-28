<template>
  <div class='page index'>
    <div class='background'>
      <div class='gradient gradient--morning' />
      <div class='gradient gradient--noon' />
      <div class='gradient gradient--evening' />
      <div class='gradient gradient--dusk' />
      <div class='gradient gradient--dawn' />
    </div>
    <div class='content'>
      <amp-img class='earth' src='/vectors/earth.svg' width='200' height='200' sizes='
        (max-width: 500px) 140px,
        (min-width: 901px) 240px,
        200px' />
      <amp-img class='rocket' src='/vectors/rocket.svg' width='60' height='60'/>
      <div class='object__container--satellite'>
        <amp-img class='satellite' src='/vectors/satellite.svg' width='60' height='60'/>
      </div>
      <div class='object__container--astronaut'>
        <amp-img class='astronaut' src='/vectors/astronaut.svg' width='100' height='100'/>
      </div>
      <h1>hliejun</h1>
      <h4 class='stylized'>full-stack &lt;div&gt;eloper</h4>
      <h4 class='stylized'>Singapore</h4>
      <a class='link__content resume__link' href='/documents/resume.pdf' target='_blank'>
        <div class='card code button resume__button'>
          download resume
        </div>
      </a>
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
