<template>
  <div class='page pokemania project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- TODO: Screenshots and video segments of game in action for different effects -->
      <!-- TODO: Icons and glyphs for sections and items -->

      <TagsSection name='technologies' label='TECHNOLOGY' :items='technologies' />
      <HTMLSection name='about' label='ABOUT' :items='about' />
      <HTMLSection name='design' label='DESIGN' :items='design' />
      <HTMLSection name='features' label='FEATURES' :items='features' />
      <ActionsSection name='actions' :items='actions' />
    </div>
  </div>
</template>

<script>
import ActionsSection from '../../components/ActionsSection'
import HTMLSection from '../../components/HTMLSection'
import Jumbotron from '../../components/Jumbotron'
import Mockup from '../../components/Mockup'
import TagsSection from '../../components/TagsSection'

export default {
  components: {
    ActionsSection,
    HTMLSection,
    Jumbotron,
    Mockup,
    TagsSection
  },
  data () {
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
        src: '/images/projects/pokemania-1.png',
        orientation: 'portrait',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            {
              label: 'Swift',
              src: ''
            },
            {
              label: 'UIKit',
              src: ''
            },
            {
              label: 'Foundation',
              src: ''
            }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            {
              label: 'XCode',
              src: ''
            },
            {
              label: 'SwiftLint',
              src: ''
            },
            {
              label: 'Cocoapods',
              src: ''
            }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [
            {
              label: 'iOS',
              src: ''
            }
          ]
        },
      ],
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
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
          src: '',
          text: `
            The objectives of this project include learning how to write
            and publish pods, as well as to design and write modular iOS
            game application using the Model-View-Controller design pattern.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            This project was challenging due to the unavailability of
            external dependencies and the 3 weeks time limit imposed.
            It was also my first native iOS development experience.
          `
        },
      ],
      design: [
        {
          name: 'architecture',
          title: 'ARCHITECTURE',
          src: '',
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
          title: 'SCORE SYSTEM AND EFFECTS',
          src: '',
          text: `
            Pokémania has a combo score system that rewards different
            point multipliers based on the types of bubbles blasted.
            On top of the score system, different types of bubbles
            may have type-based or area-of-effect behaviours, allowing
            you to strategise your play. The bubble types include magnet,
            explosive, lightning, bonus, elemental and multi-elemental.
          `
        },
        {
          name: 'builder',
          title: 'STAGE BUILDER',
          src: '',
          text: `
            A stage builder is available for you to design unique stages
            on top of default levels. These stages can then be saved,
            played, as well as removed.
          `
        },
        {
          name: 'timed',
          title: 'TIMED STAGES',
          src: '',
          text: `
            Stages are timed to make the gameplay more thrilling.
          `
        },
        {
          name: 'aim',
          title: 'HOLD AND AIM',
          src: '',
          text: `
            You can tap to launch bubbles, or hold and swivel to aim.
          `
        },
        {
          name: 'pause',
          title: 'PAUSE AND RESUME',
          src: '',
          text: `
            You also have the option to pause and resume game sessions.
          `
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
