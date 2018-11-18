<template>
  <div class='page hypedyn project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- Screenshots of different scenes, video showing interactions for interactions -->

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
      <div class='project__section features' v-if='features.length'>
        <div class='section__title'>FEATURES</div>
        <div v-bind:class="['section__items', section.name]" v-for='section in features'>
          <div class='section__subtitle'>{{section.title}}</div>
          <amp-img class='section__item-image' v-if='section.src' v-bind:src='section.src' height='1' width='1' />
          <div v-bind:class="['section__item-text', section.name]" v-if='section.text' v-html='section.text' />
        </div>
      </div>
      <div class='project__section references' v-if='references.length'>
        <div class='section__title'>REFERENCES</div>
        <div class='section__items'>
          <div class='section__item' v-for='item in references'>
            <amp-img class='section__item-icon' v-if='item.src' v-bind:src='item.src' height='1' width='1' />
            <span class='section__item-label' v-if='item.label'>{{item.label}}</span>
            <span class='section__item-description' v-if='item.description'>{{item.description}}</span>
          </div>
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
        title: 'HypeDyn Stories',
        subtitle: 'Interactive textual stories made using HypeDyn.',
        actions: [
          {
            label: 'Air Crash',
            url: 'https://hliejun.github.io/hypedyn-air-crash-investigation'
          },
          {
            label: 'Patrol',
            url: 'https://hliejun.github.io/hypedyn-the-patrol'
          },
          {
            label: 'About HypeDyn',
            url: 'http://www.narrativeandplay.org/hypedyn'
          }
        ]
      },
      mockup: {
        src: '/images/projects/hypedyn-1.png',
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
              label: 'Javascript',
              description: ''
            },
            {
              src: '',
              label: 'HTML',
              description: ''
            },
            {
              src: '',
              label: 'CSS',
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
              label: 'HypeDyn',
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
              label: 'GitHub Pages',
              description: ''
            }
          ]
        }
      ],
      about: [
        {
          name: 'motivation',
          title: 'MOTIVATION',
          src: '',
          text: `
            These stories were helpful in learning about various techniques and agencies of interactive storytelling.
            This project was also about learning to use HypeDyn, a tool to build interactive text stories by creating
            and linking story fragments.
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            Air Crash Investigation is a story about choice and replayability. The player puts herself in the shoes
            of the flight investigator and make a series of decisions, each branching into a segment or piece of
            the story about different suspects, as well as the private life of the investigator. Depending on the
            decisions made by the player, such as accusations on suspects, the story turns out differently and reaches
            a different ending.<br>
            <br>
            The Patrol is story much motivated by the development of emotions through dialogues. The story focuses on
            a security guard on patrol making conversations with his buddy, and these conversations would eventually
            build up the emotions at various scenes, the relationships and profile of the characters and shed light
            on the truth behind the story.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            The challenge with this project was to tell a story without long narratives or graphical media.
            Instead, I had to rely on emotions, choices, dialogues, re-readings, performances to build a
            story through the player's interaction with the text.
          `
        },
      ],
      features: [
        {
          name: 'interactivity',
          title: 'READER INCLUSION AND INTERACTIVITY',
          src: '',
          text: `
            These interactive text stories are heavily littered with action and decision links, engaging
            readers with the plot progression.
          `
        },
        {
          name: 'branched',
          title: 'BRANCHED ACTIONS OR ENDINGS',
          src: '',
          text: `
            Your actions and decisions will have an impact on either the immediate outcome, or the eventual
            endings of the stories. These variances in plot are customised to your decisions, and they encourage
            you to re-read or replay and discover alternate consequences.
          `
        },
        {
          name: 'ascii',
          title: 'ASCII ART',
          src: '',
          text: `
            The stories are decorated with ASCII art designed to illustrate the setting for different stages or scenes
            in the stories.
          `
        }
      ],
      references: [
        {
          src: '',
          label: 'Six Key Design Strategies for Replay Stories',
          description: `
            Article on replay and re-reading by Janet H. Murray.
          `
        },
        {
          src: '',
          label: 'Agency Reconsidered',
          description: `
            Paper on agency by Wardrip-Fruin et. al.
          `
        },
        {
          src: '',
          label: 'Their Angelic Understanding',
          description: `
            Interactive story by Porpentine.
          `
        },
        {
          src: '',
          label: 'Aisle',
          description: `
            Interactive story by Sam Barlow.
          `
        },
        {
          src: '',
          label: 'Incidental Character Choices in Balloon Diaspora',
          description: `
             Article on agency of choice by Gregory Weir.
          `
        },
        {
          src: '',
          label: 'Accretive Player Character',
          description: `
            Article on play character discovery by Emily Short.
          `
        }
      ],
      actions: [
        {
          label: 'Bitsy Story',
          url: '/projects/bitsy',
          in: true
        },
        {
          label: 'SAT Solver',
          url: '/projects/satsolver',
          in: true
        }
      ]
    }
  }
}
</script>
