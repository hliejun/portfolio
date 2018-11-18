<template>
  <div class='page bitsy project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- Screenshots of scenes and video of interactions -->

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
        title: 'Missing Children of Ann Siang Hill',
        subtitle: 'Interactive pixel story made using Bitsy.',
        actions: [
          {
            label: 'Story',
            url: 'https://hliejun.github.io/bitsy-story'
          },
          {
            label: 'itch.io',
            url: 'https://hliejun.itch.io/missing-children-of-ann-siang-hill'
          },
          {
            label: 'About Bitsy',
            url: 'https://ledoux.itch.io/bitsy'
          }
        ]
      },
      mockup: {
        src: '/images/projects/bitsy-1.png',
        orientation: 'landscape',
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
              label: 'Bitsy',
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
              label: 'itch.io',
              description: ''
            },
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
            The goal of this project was to learn about the agency of exploration: uncovering a story through
            unordered discovery and gameplay, driven by interactions and dialogues between characters and
            key items. It was also an avenue for me to fiddle with pixel art and game design.
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            Set in the small town of Ann Siang Hill, an infamous cold case on children going missing led to the
            abandonment of the ghastly neighbourhood. Inspector Tan took the case into his own hands for personal
            reasons, only to struggle between hallucinations and reality. The mysterious visions he encounters as
            he travels through the ghost town looking for clues leads him closer towards the larger truth behind the
            disappearances of the children.<br>
            <br>
            Throughout the game, you will discover visions of the past through the persona. This is indicated by
            entering a colorized version of the scene. You may also pick up evidences from NPCs or props on the grounds.
            These evidences will hint at the places to go, or unravel bits of pieces of the storyline.
            You are encouraged to replay a couple of times to get the whole story!
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            This project was challenging in the limitations to the use of sprites, rooms and items due to
            module restrictions. Also, Bitsy hacks were not allowed in the module as well. However, these
            restrictions did encourage creative and interesting workarounds, such as hiding entrypoints
            to conversation or event-triggered scenes and using dialogues to guide players to these hiding
            spots as the story unfolds.
          `
        },
      ],
      design: [
        {
          name: 'world',
          title: 'GAME WORLD',
          src: '',
          text: `
            The game world comprises of 9 distinct scenes, of which 6 scenes have alternate dimensions. Key items
            are scattered among these scenes, supplemented with monologues that unravel the plot. Characters
            can only be found in scenes of the past. Interacting with these NPCs will give clues to their identities,
            as well as the role they play in the story. Depending on your possession of items, characters will
            have different replies in their conversations.
          `
        }
      ],
      features: [
        {
          name: 'dimensions',
          title: 'ALTERNATE DIMENSIONS',
          src: '',
          text: `
            You can travel between dimensions within scenes to interact with the past. These special rooms
            represent the haunting of the past on the protagonist, and can be interpreted in many ways such as
            hallucinations, supernatural occurrences, time portals, recalls, etc. They are distinct from the present
            dimension in that they are coloured, filled with NPCs and have slight differences in furnishings.
          `
        },
        {
          name: 'hidden',
          title: 'HIDDEN ITEMS',
          src: '',
          text: `
            Some items are hidden from plain sight. This allows you to explore the area, focus on dialogues
            and the storyline to make interactions with the environment. It can also become a thrilling
            "treasure hunt" if you prefer searching for them to listening for hints in dialogues.
          `
        },
        {
          name: 'intricate',
          title: 'INTRICATE PIXEL ART AND DIALOGUES',
          src: '',
          text: `
            Each glyph, item, or character is designed meticulously to capture traits, setting and character
            personalities in the scene. Some designs are animated to illustrate events or create ambience.
          `
        },
        {
          name: 'parrot',
          title: 'PARROT',
          src: '',
          text: `
            You will find a parrot in the park scene, imitating random lines of passers-by. The parrot is
            a mechanism to capture the story from a spectator's point of view, and provides a different
            perspective to the story. The imitated lines will hint at the story, as well as your objectives
            in different scenes.
          `
        }
      ],
      references: [
        {
          src: '',
          label: 'Balloon Diaspora',
          description: `
            A game by Cardboard Computer focusing on the agency of exploration and emotion through dialogues.
          `
        },
        {
          src: '',
          label: 'Glass',
          description: `
            Interactive text story by Emily Short, putting the narrative in a spectator's perspective.
          `
        },
        {
          src: '',
          label: 'Galatea',
          description: `
            Also created by Emily Short, an interactive text story that inspires player to form associations
            between key objects and entities with story fragments.
          `
        }
      ],
      actions: [
        {
          label: 'Pokémania',
          url: '/projects/pokemania',
          in: true
        },
        {
          label: 'HypeDyn Stories',
          url: '/projects/hypedyn',
          in: true
        }
      ]
    }
  }
}
</script>
