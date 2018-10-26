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
      <amp-img class='earth' src='/vectors/earth.svg' width='200' height='200' sizes='(max-width: 500px) 150px, 200px'/>
      <h1>hliejun</h1>
      <h2>full-stack &lt;div&gt;eloper</h2>
      <h3>Singapore</h3>
      <a class='link__content resume__link' href='/documents/resume_dummy.pdf' target='_blank'>
        <button class='card code button resume__button'>
          download resume
        </button>
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
