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

      <!-- Screenshots and video segments of game in action for different effects -->

      <div class='project__section technologies' v-if='technologies.length'>
        <div class='section__title'>TECHNOLOGY</div>
        <div class='section__container'>
          <div v-bind:class="['section__items', section.name]" v-for='section in technologies'>
            <div class='section__subtitle'>{{section.title}}</div>
            <div class='section__row'>
              <div class='section__item tag' v-for='item in section.items'>
                <amp-img class='section__item-icon' v-if='item.src' v-bind:src='item.src' height='1' width='1' />
                <span class='section__item-label tag' v-if='item.label'>{{item.label}}</span>
                <span class='section__item-description' v-if='item.description'>{{item.description}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='project__section about' v-if='about.length'>
        <div class='section__title'>ABOUT</div>
        <div v-bind:class="['section__items', section.name]" v-for='section in about'>
          <div class='section__subtitle'>{{section.title}}</div>
          <amp-img class='section__item-image' v-if='section.src' v-bind:src='section.src' height='1' width='1' />
          <div v-bind:class="['section__item-text', section.name]" v-if='section.text' v-html='section.text' />
        </div>
      </div>
      <div class='project__section design' v-if='design.length'>
        <div class='section__title'>DESIGN</div>
        <div v-bind:class="['section__items', section.name]" v-for='section in design'>
          <div class='section__subtitle'>{{section.title}}</div>
          <amp-img class='section__item-image' v-if='section.src' v-bind:src='section.src' height='1' width='1' />
          <div v-bind:class="['section__item-text', section.name]" v-if='section.text' v-html='section.text' />
        </div>
      </div>
      <div class='project__section features' v-if='features.length'>
        <div class='section__title'>FEATURES</div>
        <div v-bind:class="['section__items', section.name]" v-for='section in features'>
          <div class='section__subtitle'>{{section.title}}</div>
          <amp-img class='section__item-image' v-if='section.src' v-bind:src='section.src' height='1' width='1' />
          <div v-bind:class="['section__item-text', section.name]" v-if='section.text' v-html='section.text' />
        </div>
      </div>
      <div class='project__section actions'>
        <div class='project__actions' v-if='actions.length'>
          <a
            class='project__link'
            v-for='action in actions'
            v-bind:href='action.url'
            v-bind:target="action.in ? '_self' : '_blank'">
            <div class='code button project__button'>
              {{action.label}}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from '../../components/Jumbotron'
import Mockup from '../../components/Mockup'

export default {
  components: {
    Jumbotron,
    Mockup
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
          items: [
            {
              src: '',
              label: 'Swift',
              description: ''
            },
            {
              src: '',
              label: 'UIKit',
              description: ''
            },
            {
              src: '',
              label: 'Foundation',
              description: ''
            }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          items: [
            {
              src: '',
              label: 'XCode',
              description: ''
            },
            {
              src: '',
              label: 'SwiftLint',
              description: ''
            },
            {
              src: '',
              label: 'Cocoapods',
              description: ''
            }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          items: [
            {
              src: '',
              label: 'iOS',
              description: ''
            }
          ]
        },
      ],
      about: [
        {
          name: 'motivation',
          title: 'MOTIVATION',
          src: '',
          text: `
            The objectives of this project include learning how to write and publish pods, as well as to design
            and write modular iOS game application using the Model-View-Controller design pattern.
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            Pokémania is an individual project for NUS module CS3217, a Pokémon-themed bubble blast game built from
            scratch without external dependencies, GameKit, or SpriteKit. The project only involves UIKit and Foundation.
            I wrote my own simple game and physics library to be importable through Cocoapods.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            This project was challenging due to the unavailability of external dependencies and the 3 weeks time limit
            imposed. It was also my first native iOS development experience.
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
          `
        }
      ],
      features: [
        {
          name: 'effects',
          title: 'SCORE SYSTEM AND EFFECTS',
          src: '',
          text: `
            Pokémania has a combo score system that rewards different point multipliers based on
            the types of bubbles blasted. On top of the score system, different types of bubbles
            may have type-based or area-of-effect behaviours, allowing you to strategise your play.
            The bubble types include magnet, explosive, lightning, bonus, elemental and multi-elemental.
          `
        },
        {
          name: 'builder',
          title: 'STAGE BUILDER',
          src: '',
          text: `
            A stage builder is available for you to design unique stages on top of default levels. These
            stages can then be saved, played, as well as removed.
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
