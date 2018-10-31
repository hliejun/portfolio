<template>
  <div class='page work'>
    <Jumbotron :name='jumbotron.name' :title='jumbotron.title' :subtitle='jumbotron.subtitle' :src='jumbotron.src' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start'
        intersection-ratios='.4'
        layout='nodisplay'>
      </amp-position-observer>
      <div class='work__gallery'>
        <PreviewCard
          v-for='project in projects'
          :name='project.name'
          :src='project.src'
          :title='project.title'
          :subtitle='project.subtitle'
          :description='project.description'
          :url='project.url'
          :tags='project.tags'
          :key='project.name' />
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'
import PreviewCard from '../components/PreviewCard'

export default {
  components: {
    Jumbotron,
    PreviewCard
  },
  data () {
    return {
      jumbotron: {
        name: 'computer',
        title: 'commits',
        subtitle: 'showcase of some projects that I have worked on',
        src: '/vectors/computer.svg'
      },
      projects: [
        {
          name: 'portfolio',
          src: '',
          title: 'Portfolio',
          subtitle: '2018 / PERSONAL / 1 WEEK',
          description: 'Lightweight personal portfolio website and experimenting with NuxtJS and AMPHTHML.',
          url: 'https://www.google.com',
          tags: ['NUXT', 'VUE', 'AMP']
        },
        {
          name: 'react-chat',
          src: '',
          title: 'React Chat',
          subtitle: '2018 / PERSONAL / 2 WEEKS',
          description: 'Extensible ReactJS presentational chat components written as an NPM library.',
          url: '',
          tags: ['REACT', 'STORYBOOK', 'ROLLUP']
        },
        {
          name: 'urbanzoom',
          src: '',
          title: 'Urbanzoom Assistant',
          subtitle: '2018 / FREELANCE / 6 WEEKS',
          description: 'Property valuation Google Assistant agent accessible through Twilio Voice.',
          url: '',
          tags: ['DIALOGFLOW', 'EXPRESS', 'TWILIO']
        },
        {
          name: 'little-faces',
          src: '',
          title: 'Little Lives Check-In',
          subtitle: '2018 / NUS CS3217 / 5 WEEKS',
          description: 'Pre-school attendance-taking iOS application made for LittleLives.',
          url: '',
          tags: ['IOS', 'VISION', 'AZURE FACE']
        },
        {
          name: 'pokemania',
          src: '',
          title: 'Pokémania',
          subtitle: '2018 / NUS CS3217 / 3 WEEKS',
          description: 'Pokémon-themed Bubble Blast game with a simple Physics and game engine library.',
          url: '',
          tags: ['IOS', 'COCOA TOUCH']
        },
        {
          name: 'bitsy',
          src: '',
          title: 'Bitsy Pixel Story',
          subtitle: '2018 / NUS NM3222 / 1 WEEK',
          description: 'Explorative pixel-art story focused on replay and discoverability.',
          url: '',
          tags: ['BITSY', 'STORYTELLING']
        },
        {
          name: 'hypedyn',
          src: '',
          title: 'HypeDyn Text Stories',
          subtitle: '2018 / NUS NM3222 / 1 WEEK',
          description: 'Text-based interactive stories focused on emotions, choice as agency and replay.',
          url: '',
          tags: ['HYPEDYN', 'STORYTELLING']
        },
        {
          name: 'sats-solver',
          src: '',
          title: 'SATS Solver',
          subtitle: '2018 / NUS CS4244 / 5 WEEKS',
          description: 'Implementing and comparing various satisfiability solving techniques and heuristics.',
          url: '',
          tags: ['RESEARCH', 'DPLL', 'CDCL']
        },
        {
          name: 'food-logger',
          src: '',
          title: 'Food Logging',
          subtitle: '2017 / NUS CS4249 / 3 WEEKS',
          description: 'Mobile food logging interface prototyping with careful study of design principles.',
          url: '',
          tags: ['MARVEL', 'UX']
        },
        {
          name: 'bubble',
          src: '',
          title: 'Bubble Chat',
          subtitle: '2016 / NUS CS3216 / 4 WEEKS',
          description: 'Topic-threaded mobile chat application using a real-time mobile chat event-based environment.',
          url: '',
          tags: ['REACT NATIVE', 'SOCKETS', 'NODE']
        },
        {
          name: 'weight',
          src: '',
          title: 'Weight',
          subtitle: '2016 / NUS NM3216 / 3 WEEKS',
          description: 'Infinite run game that pits the player against a gravity-field stage while maintaining weight.',
          url: '',
          tags: ['UNITY', 'GAME DESIGN']
        },
        {
          name: 'todo-list',
          src: '',
          title: 'TodoList',
          subtitle: '2016 / NUS CS2103T / 6 WEEKS',
          description: 'To-do list application with focus on natural language text input and keyboard interactions.',
          url: '',
          tags: ['JAVAFX', 'NATTY', 'JUNIT']
        }
      ]
    }
  },
  asyncData (context) {
    // called every time before loading the component
    return {}
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  },
  // ...
}
</script>

<!-- You should not write any CSS here, but use ~/assets/main.css instead -->
