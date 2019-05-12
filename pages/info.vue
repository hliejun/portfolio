<template>
  <div class="page info">
    <Jumbotron
      :actions="jumbotron.actions"
      :name="jumbotron.name"
      :src="jumbotron.src"
      :subtitle="jumbotron.subtitle"
      :title="jumbotron.title"
    />
    <div class="background-waves">
      <div class="background-wave" />
      <div class="background-wave" />
      <div class="background-wave" />
    </div>
    <div class="page__content">
      <amp-position-observer
        on="enter:fadeIn.start"
        intersection-ratios="1"
        layout="nodisplay"
      />
      <div class="info__introduction">
        <amp-img class="introduction__image" :src="src" width="1" height="1" />
        <div class="info__introduction-text">
          <h2>Huang Lie Jun</h2>
          <h4>
            BComp. (CS)<br />
            Interactive Media Development Minor
          </h4>
          <br />
          <div v-for="section in sections" :key="section.title" class="section">
            <amp-img
              v-if="section.src"
              class="section__image"
              :src="section.src"
              height="1"
              width="1"
            />
            <div class="section__content">
              <h5>{{ section.title }}</h5>
              {{ section.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'

export default {
  components: {
    Jumbotron
  },
  head() {
    return {
      title: 'About - hliejun',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'About - hliejun'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'More details about Lie Jun in work and in person.'
        },
        { property: 'og:title', content: 'About - hliejun' },
        {
          property: 'og:description',
          content: 'More details about Lie Jun in work and in person.'
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content: 'https://hliejun.github.io/images/meta/info.jpg'
        }
      ],
      link: [{ rel: 'canonical', href: `${process.env.HOST}/info` }]
    }
  },
  data() {
    return {
      jumbotron: {
        name: 'book',
        title: './info',
        subtitle: 'introduction about me and my background',
        actions: [
          {
            label: 'Twitter',
            url: 'https://twitter.com/hliejun'
          },
          {
            label: 'Stories',
            url: 'https://medium.com/@hliejun.dev'
          }
        ]
      },
      src: '/images/info/avatar.jpg',
      sections: [
        {
          title: 'PROFILE',
          text: `
            I'm a front-end software engineer who is passionate about
            developing user-centric solutions for the betterment of the
            community. I am a Singaporean, and I speak English, Mandarin
            and Singlish.
          `
        },
        {
          title: 'INTERESTS',
          text: `
            Besides getting psyched about the latest technology, I'm
            particularly interested in web and mobile development, as
            well as novel applications of machine learning to real-life
            problems. While I focus mainly on front-end development, I
            also fiddle with a variety of technologies concerning RESTful
            microservices, web sockets, databases and DevOps.
          `
        },
        {
          title: 'EDUCATION',
          text: `
            I completed my primary education at Woodlands Primary, then
            high school at Hwa Chong Institution and tertiary at National
            University of Singapore, School of Computing.
          `
        },
        {
          title: 'HOBBIES',
          text: `
            Apart from programming and designing experiences, my hobbies
            include food hunting, exploring nature, browsing dank memes,
            binge watching drama and movies and listening to good music.
            I was a huge fan of console and PC games before they became
            too expensive for me.
          `
        }
      ]
    }
  }
}
</script>
