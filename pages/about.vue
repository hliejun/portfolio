<template>

  <!-- TODO: Add icons for sections in about -->
  <!-- TODO: Add animations and banner background image -->

  <div class='page about'>
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='background-waves'>
      <div class='background-wave' />
      <div class='background-wave' />
      <div class='background-wave' />
    </div>
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='1' layout='nodisplay' />
      <div class='about__introduction'>
        <amp-img class='introduction__image' v-bind:src='src' width='1' height='1' />
        <div class='about__introduction-text'>
          <h2>Huang Lie Jun</h2>
          <h4>
            BComp. (CS)<br>
            Interactive Media Development Minor
          </h4>
          <br>
          <div v-for='section in sections' :key='section.title' class='section'>
            <amp-img v-if='section.src' class='section__image' v-bind:src='section.src' height='1' width='1' />
            <div class='section__content'>
              <h5>{{section.title}}</h5>
              {{section.text}}
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
  data () {
    return {
      jumbotron: {
        name: 'book',
        title: './about',
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
      src: '/images/about/avatar.jpg',
      sections: [
        {
          title: 'PROFILE',
          text: `
            I'm a full-stack software engineer who is passionate about
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
            problems.
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
