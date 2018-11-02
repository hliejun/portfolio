<template>
  <div class='page about'>
    <Jumbotron :name='jumbotron.name' :title='jumbotron.title' :subtitle='jumbotron.subtitle' :src='jumbotron.src' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start'
        intersection-ratios='1'
        layout='nodisplay'>
      </amp-position-observer>
      <div class='about__introduction'>
        <amp-img class='introduction__image' v-bind:src='src' width='1' height='1' />
        <div class='about__introduction-text'>
          <h2>Huang Lie Jun</h2>
          <h4>
            BComp. (CS)<br>
            Interactive Media Development Minor
          </h4>
          <br>
          <div class='section' v-for='section in sections'>
            <amp-img class='section__image' v-bind:src='section.src' width='1' height='1' />
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
        title: 'readme',
        subtitle: 'introduction about me and my background',
        src: '/vectors/book.svg'
      },
      src: '/images/about.jpg',
      sections: [
        {
          title: 'PROFILE',
          src: '/vectors/profile.svg',
          text: `
            I'm a full-stack software engineer
            who is passionate about developing
            user-centric solutions for the
            betterment of the community.
          `
        },
        {
          title: 'INTERESTS',
          src: '/vectors/interests.svg',
          text: `
            Besides getting psyched about the
            latest technology, I also yearn to
            pick up the best practices for various
            frameworks and design paradigms.
            I'm particularly interested in web
            and mobile development, as well as
            novel applications of machine learning
            to real-life problems.
          `
        },
        {
          title: 'EDUCATION',
          src: '/vectors/education.svg',
          text: `
            I completed my primary education at Woodlands Primary,
            then high school at Hwa Chong Institution and tertiary
            at National University of Singapore, School of Computing.
          `
        },
        {
          title: 'HOBBIES',
          src: '/vectors/hobbies.svg',
          text: `
            Apart from programming and designing experiences,
            my hobbies include food hunting, exploring nature,
            binge watching drama and movies and listening to good music.
          `
        }
      ]
    }
  }
}
</script>
