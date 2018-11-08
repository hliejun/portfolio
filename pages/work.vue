<template>
  <div class='page work'>
    <Jumbotron :name='jumbotron.name' :title='jumbotron.title' :subtitle='jumbotron.subtitle' :src='jumbotron.src' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start'intersection-ratios='.4'layout='nodisplay' />
      <div class='page__container'>
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
        title: './commits',
        subtitle: 'showcase of some projects that I have worked on',
        // src: '/vectors/jumbotron/computer.svg'
      },
      projects: [
        {
          name: 'portfolio',
          src: '',
          title: 'Portfolio',
          subtitle: '2018 / PERSONAL / 1 WEEK',
          description: 'Lightweight personal portfolio website and experimenting with NuxtJS and AMPHTHML.',
          url: '/projects/portfolio',
          tags: ['NUXT', 'VUE', 'AMP']
        },
        {
          name: 'react-chat',
          src: '/images/previews/react-chat.png',
          title: 'React Chat',
          subtitle: '2018 / PERSONAL / 2 WEEKS',
          description: 'Extensible ReactJS presentational chat components written as an NPM library.',
          url: '/projects/reactchat',
          tags: ['REACT', 'STORYBOOK', 'ROLLUP']
        },
        {
          name: 'urbanzoom',
          src: '/images/previews/urbanzoom.png',
          title: 'Urbanzoom Assistant',
          subtitle: '2018 / FREELANCE / 6 WEEKS',
          description: 'Property valuation Google Assistant agent accessible through Twilio Voice.',
          url: '/projects/urbanzoom',
          tags: ['DIALOGFLOW', 'EXPRESS', 'TWILIO']
        },
        {
          name: 'little-lives',
          src: '/images/previews/little-lives.png',
          title: 'Little Lives Check-In',
          subtitle: '2018 / NUS CS3217 / 5 WEEKS',
          description: 'Pre-school attendance-taking iOS application made for LittleLives.',
          url: '/projects/littlelives',
          tags: ['IOS', 'VISION', 'AZURE FACE']
        },
        {
          name: 'pokemania',
          src: '/images/previews/pokemania.png',
          title: 'Pokémania',
          subtitle: '2018 / NUS CS3217 / 3 WEEKS',
          description: 'Pokémon-themed Bubble Blast game with a simple Physics and game engine library.',
          url: '/projects/pokemania',
          tags: ['IOS', 'COCOA TOUCH']
        },
        {
          name: 'bitsy',
          src: '/images/previews/bitsy.png',
          title: 'Bitsy Pixel Story',
          subtitle: '2018 / NUS NM3222 / 1 WEEK',
          description: 'Explorative pixel-art story focused on replay and discoverability.',
          url: '/projects/bitsy',
          tags: ['BITSY', 'STORYTELLING']
        },
        {
          name: 'hypedyn',
          src: '/images/previews/hypedyn.png',
          title: 'HypeDyn Text Stories',
          subtitle: '2018 / NUS NM3222 / 1 WEEK',
          description: 'Text-based interactive stories focused on emotions, choice as agency and replay.',
          url: '/projects/hypedyn',
          tags: ['HYPEDYN', 'STORYTELLING']
        },
        {
          name: 'sat-solver',
          src: '/images/previews/sat-solver.png',
          title: 'SAT Solver',
          subtitle: '2018 / NUS CS4244 / 5 WEEKS',
          description: 'Implementing and comparing various satisfiability solving techniques and heuristics.',
          url: '/projects/satsolver',
          tags: ['RESEARCH', 'DPLL', 'CDCL']
        },
        {
          name: 'food-logging',
          src: '/images/previews/food-logging.png',
          title: 'Food Logging',
          subtitle: '2017 / NUS CS4249 / 3 WEEKS',
          description: 'Mobile food logging interface prototyping with careful study of design principles.',
          url: '/projects/foodlogging',
          tags: ['MARVEL', 'UX']
        },
        {
          name: 'bubble',
          src: '/images/previews/bubble.png',
          title: 'Bubble Chat',
          subtitle: '2016 / NUS CS3216 / 4 WEEKS',
          description: 'Topic-threaded mobile chat application using a real-time mobile chat event-based environment.',
          url: '/projects/bubble',
          tags: ['REACT NATIVE', 'SOCKETS', 'NODE']
        },
        {
          name: 'weight',
          src: '/images/previews/weight.png',
          title: 'Weight',
          subtitle: '2016 / NUS NM3216 / 3 WEEKS',
          description: 'Infinite run game that pits the player against a gravity-field stage while maintaining weight.',
          url: '/projects/weight',
          tags: ['UNITY', 'GAME DESIGN']
        },
        {
          name: 'todo-list',
          src: '/images/previews/todolist.png',
          title: 'TodoList',
          subtitle: '2016 / NUS CS2103T / 6 WEEKS',
          description: 'To-do list application with focus on natural language text input and keyboard interactions.',
          url: '/projects/todolist',
          tags: ['JAVAFX', 'NATTY', 'JUNIT']
        }
      ]
    }
  }
}
</script>
