<template>
  <div class="page work">
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
        intersection-ratios=".4"
        layout="nodisplay"
      />
      <div class="page__container">
        <div class="work__gallery">
          <PreviewCard
            v-for="project in projects"
            :key="project.name"
            :description="project.description"
            :name="project.name"
            :src="project.src"
            :subtitle="project.subtitle"
            :tags="project.tags"
            :title="project.title"
            :url="project.url"
          />
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
  head() {
    return {
      title: 'Projects - hliejun',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Projects - hliejun'
        },
        {
          hid: 'description',
          name: 'description',
          content: "Lie Jun's ongoing and completed projects or creatives."
        },
        { property: 'og:title', content: 'Projects - hliejun' },
        {
          property: 'og:description',
          content: "Lie Jun's ongoing and completed projects or creatives."
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content: 'https://hliejun.github.io/images/meta/work.jpg'
        }
      ],
      link: [{ rel: 'canonical', href: `${process.env.HOST}/work` }]
    }
  },
  data() {
    return {
      jumbotron: {
        name: 'computer',
        title: './work',
        subtitle: 'showcase of some projects that I have worked on',
        actions: [
          {
            label: 'GitHub',
            url: 'https://github.com/hliejun'
          },
          {
            label: 'Dribbble',
            url: 'https://dribbble.com/hliejun'
          }
        ]
      },
      projects: [
        {
          name: 'ethereum-explorer',
          src: '/images/previews/ethereum-explorer.jpg',
          title: 'Ethereum Explorer',
          subtitle: '2019 / PERSONAL / 3 WEEKS',
          description:
            'Responsive block explorer web application to browse Ethereum transactions.',
          url: '/projects/ethereumexp',
          tags: ['REACT', 'REDUX', 'EXPRESS']
        },
        {
          name: 'whatsapp-widgets',
          src: '/images/previews/whatsapp-widgets.jpg',
          title: 'Widgets for WhatsApp™',
          subtitle: '2018 / PERSONAL / 1 WEEK',
          description:
            'Android widgets for quick access to WhatsApp™ contacts, designed for elderly.',
          url: '/projects/whatsappwidgets',
          tags: ['JAVA', 'ANDROID', 'GRADLE']
        },
        {
          name: 'portfolio',
          src: '/images/previews/portfolio.jpg',
          title: 'Portfolio',
          subtitle: '2018 / PERSONAL / 4 WEEKS',
          description:
            'Lightweight personal portfolio website and experimenting with NuxtJS and AMPHTHML.',
          url: '/projects/portfolio',
          tags: ['VUE', 'NUXT', 'AMP']
        },
        {
          name: 'react-chat',
          src: '/images/previews/react-chat.jpg',
          title: 'React Chat',
          subtitle: '2018 / PERSONAL / 2 WEEKS',
          description:
            'Extensible ReactJS presentational chat components written as an NPM library.',
          url: '/projects/reactchat',
          tags: ['REACT', 'ROLLUP', 'STORYBOOK']
        },
        {
          name: 'urbanzoom',
          src: '/images/previews/urbanzoom.jpg',
          title: 'Urbanzoom Assistant',
          subtitle: '2018 / FREELANCE / 6 WEEKS',
          description:
            'Property valuation Google Assistant agent accessible through Twilio Voice.',
          url: '/projects/urbanzoom',
          tags: ['EXPRESS', 'DIALOGFLOW', 'TWILIO']
        },
        {
          name: 'little-lives',
          src: '/images/previews/little-lives.jpg',
          title: 'Little Lives Check-In',
          subtitle: '2018 / NUS CS3217 / 5 WEEKS',
          description:
            'Pre-school attendance-taking iOS application made for LittleLives.',
          url: '/projects/littlelives',
          tags: ['SWIFT', 'VISION', 'AZURE FACE']
        },
        {
          name: 'pokemania',
          src: '/images/previews/pokemania.jpg',
          title: 'Pokémania',
          subtitle: '2018 / NUS CS3217 / 3 WEEKS',
          description:
            'Pokémon-themed Bubble Blast game with a simple Physics and game engine library.',
          url: '/projects/pokemania',
          tags: ['SWIFT', 'UIKIT', 'COCOAPODS']
        },
        {
          name: 'bitsy',
          src: '/images/previews/bitsy.jpg',
          title: 'Bitsy Pixel Story',
          subtitle: '2018 / NUS NM3222 / 1 WEEK',
          description:
            'Explorative pixel-art story focused on replay and discoverability.',
          url: '/projects/bitsy',
          tags: ['BITSY', 'HTML', 'CSS']
        },
        {
          name: 'hypedyn',
          src: '/images/previews/hypedyn.jpg',
          title: 'HypeDyn Text Stories',
          subtitle: '2018 / NUS NM3222 / 1 WEEK',
          description:
            'Text-based interactive stories focused on emotions, agency of choice and replay.',
          url: '/projects/hypedyn',
          tags: ['HYPEDYN', 'HTML', 'CSS']
        },
        {
          name: 'sat-solver',
          src: '/images/previews/sat-solver.jpg',
          title: 'SAT Solver',
          subtitle: '2018 / NUS CS4244 / 5 WEEKS',
          description:
            'Implementing and comparing various satisfiability solving techniques and heuristics.',
          url: '/projects/satsolver',
          tags: ['JAVA', 'JUNIT', 'SHELL']
        },
        {
          name: 'food-logging',
          src: '/images/previews/food-logging.jpg',
          title: 'Food Logging',
          subtitle: '2017 / NUS CS4249 / 3 WEEKS',
          description:
            'Mobile food logging interface prototyping with careful study of design principles.',
          url: '/projects/foodlogging',
          tags: ['MARVEL', 'COGTOOLS']
        },
        {
          name: 'bubble',
          src: '/images/previews/bubble.jpg',
          title: 'Bubble Chat',
          subtitle: '2016 / NUS CS3216 / 4 WEEKS',
          description:
            'Topic-threaded mobile chat application using a real-time mobile chat event-based environment.',
          url: '/projects/bubble',
          tags: ['REACT NATIVE', 'SOCKETS', 'SQLITE']
        },
        {
          name: 'weight',
          src: '/images/previews/weight.jpg',
          title: 'Weight',
          subtitle: '2016 / NUS NM3216 / 3 WEEKS',
          description:
            'Infinite run game that pits the player against a gravity-field stage while maintaining weight.',
          url: '/projects/weight',
          tags: ['C#', 'UNITY']
        },
        {
          name: 'todo-list',
          src: '/images/previews/todolist.jpg',
          title: 'TodoList',
          subtitle: '2016 / NUS CS2103T / 6 WEEKS',
          description:
            'To-do list application with focus on natural language text input and keyboard interactions.',
          url: '/projects/todolist',
          tags: ['JAVAFX', 'CONTROLSFX', 'JUNIT']
        }
      ]
    }
  }
}
</script>
