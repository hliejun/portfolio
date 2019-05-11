<template>
  <div class="page pokemania project">
    <amp-image-lightbox
      id="lightbox"
      class="gallery__lightbox"
      layout="nodisplay"
    />
    <Mockup
      :webp="mockup.webp"
      :src="mockup.src"
      :orientation="mockup.orientation"
      :type="mockup.type"
    />
    <Jumbotron
      :actions="jumbotron.actions"
      :name="jumbotron.name"
      :src="jumbotron.src"
      :subtitle="jumbotron.subtitle"
      :title="jumbotron.title"
    />
    <div class="page__content">
      <amp-position-observer
        on="enter:fadeIn.start"
        intersection-ratios=".3"
        layout="nodisplay"
      />
      <TagsSection
        name="technologies"
        label="TECHNOLOGY"
        :items="technologies"
      />
      <HTMLSection
        name="about"
        label="ABOUT"
        :items="about"
        :carpet="carpets.about"
        :carpet-fallback="carpets.aboutFallback"
      />
      <HTMLSection name="design" label="DESIGN" :items="design" />
      <HTMLSection name="features" label="FEATURES" :items="features" />
      <LinksSection name="references" label="REFERENCES" :items="references" />
      <ActionsSection name="actions" :items="actions" />
    </div>
  </div>
</template>

<script>
import ActionsSection from '../../components/ActionsSection'
import HTMLSection from '../../components/HTMLSection'
import Jumbotron from '../../components/Jumbotron'
import LinksSection from '../../components/LinksSection'
import Mockup from '../../components/Mockup'
import TagsSection from '../../components/TagsSection'

export default {
  components: {
    ActionsSection,
    HTMLSection,
    Jumbotron,
    LinksSection,
    Mockup,
    TagsSection
  },
  head() {
    return {
      title: 'Pokemania - hliejun/projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pokémon-themed bubble blast iOS game application.'
        },
        { property: 'og:title', content: 'Pokemania - hliejun/projects' },
        {
          property: 'og:description',
          content: 'Pokémon-themed bubble blast iOS game application.'
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content: 'https://hliejun.github.io/images/meta/preview.png'
        }
      ]
    }
  },
  data() {
    return {
      jumbotron: {
        title: 'Pokémania',
        subtitle: 'Pokémon-themed bubble blast iOS game application.',
        actions: [
          {
            label: 'GitHub Repo',
            url: 'https://github.com/hliejun/Pokemania'
          },
          {
            label: 'See Submissions',
            url: 'https://youtu.be/Ha_HiwbrJyw'
          }
        ]
      },
      mockup: {
        webp: '/images/projects/pokemania-1.webp',
        src: '/images/projects/pokemania-1.jpg',
        orientation: 'portrait',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'Swift' },
            { label: 'UIKit' },
            { label: 'Foundation' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            { label: 'XCode' },
            { label: 'SwiftLint' },
            { label: 'Cocoapods' }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [{ label: 'iOS' }]
        }
      ],
      carpets: {
        about: '/images/projects/pokemania-2.webp',
        aboutFallback: '/images/projects/pokemania-2.jpg'
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            Pokémania is an individual project for NUS module CS3217. It's
            a Pokémon-themed bubble blast game built from scratch without
            external dependencies, GameKit, or SpriteKit. The project
            only involves UIKit and Foundation. I wrote my own simple
            game and physics library to be importable through Cocoapods.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            The objectives of this project include learning how to write
            and publish pods, as well as to design and write modular iOS
            game application using the Model-View-Controller design pattern.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            This project was challenging due to the unavailability of
            external dependencies and the 3 weeks time limit imposed.
            It was also my first native iOS development experience.
          `
        }
      ],
      design: [
        {
          name: 'architecture',
          title: 'ARCHITECTURE',
          webp: '/images/projects/pokemania-3.webp',
          src: '/images/projects/pokemania-3.jpg',
          text: `
            This project was designed using the Model View Controller pattern.
            Controllers and Views are connected through Delegates and
            shared behaviours of bubbles across different effects are
            handled using inheritance and sub-class substitutivity.
          `
        }
      ],
      features: [
        {
          name: 'effects',
          title: 'SCORE SYSTEM & EFFECTS',
          video: '/videos/project-pokemania-01.mp4',
          webm: '/videos/project-pokemania-01.webm',
          text: `
            Pokémania has a combo score system that rewards different
            point multipliers based on the types of bubbles blasted.
            On top of the score system, different types of bubbles
            may have type-based or area-of-effect behaviours, allowing
            you to strategise your play. The bubble types include magnet,
            explosive, lightning, bonus, elemental and multi-elemental.
            This video showcases the effect of magnetic bubbles.
          `
        },
        {
          name: 'builder',
          title: 'STAGE BUILDER',
          video: '/videos/project-pokemania-02.mp4',
          webm: '/videos/project-pokemania-02.webm',
          text: `
            A stage builder is available for you to design unique stages
            on top of default levels. These stages can then be saved,
            played, as well as removed.
          `
        },
        {
          name: 'timed',
          title: 'TIMED STAGES',
          video: '/videos/project-pokemania-03.mp4',
          webm: '/videos/project-pokemania-03.webm',
          text: `
            Stages are timed to make the gameplay more thrilling.
          `
        },
        {
          name: 'aim',
          title: 'HOLD & AIM',
          video: '/videos/project-pokemania-04.mp4',
          webm: '/videos/project-pokemania-04.webm',
          text: `
            You can tap to launch bubbles, or hold and swivel to aim.
          `
        },
        {
          name: 'pause',
          title: 'PAUSE & RESUME',
          video: '/videos/project-pokemania-05.mp4',
          webm: '/videos/project-pokemania-05.webm',
          text: `
            You also have the option to pause and resume game sessions.
          `
        }
      ],
      references: [
        {
          label: 'Stanford CS193P Swift Programming',
          description: `
            Stanford course video playlist on Swift programming and
            developing iOS applications.
          `,
          src: '/images/links/youtube.jpg',
          url:
            'https://www.youtube.com/playlist?list=PLPA-ayBrweUzGFmkT_W65z64MoGnKRZMq'
        },
        {
          label: 'Cocoapods Guide',
          description: `
            Guide to start publishing and importing Swift dependencies using Cocoapods.
          `,
          src: '/images/links/cocoapods.jpg',
          url: 'https://guides.cocoapods.org/using/getting-started.html'
        }
      ],
      actions: [
        {
          label: 'Little Lives',
          url: '/projects/littlelives',
          in: true
        },
        {
          label: 'Bitsy Story',
          url: '/projects/bitsy',
          in: true
        }
      ]
    }
  }
}
</script>
