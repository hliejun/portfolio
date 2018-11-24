<template>
  <div class='page weight project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- TODO: Video of gameplay, screenshots -->
      <!-- TODO: Icons and glyphs for sections and items -->

      <TagsSection name='technologies' label='TECHNOLOGY' :items='technologies' />
      <HTMLSection name='about' label='ABOUT' :items='about' />
      <HTMLSection name='design' label='DESIGN' :items='design' />
      <LinksSection name='team' label='TEAM' :items='team' />
      <LinksSection name='references' label='REFERENCES' :items='references' />
      <ActionsSection name='actions' :items='actions' />
    </div>
  </div>
</template>

<script>
import ActionsSection from '../../components/ActionsSection'
import HTMLSection from '../../components/HTMLSection'
import Jumbotron from '../../components/Jumbotron'
import Mockup from '../../components/Mockup'
import LinksSection from '../../components/LinksSection'
import TagsSection from '../../components/TagsSection'

export default {
  components: {
    ActionsSection,
    HTMLSection,
    Jumbotron,
    Mockup,
    LinksSection,
    TagsSection
  },
  data () {
    return {
      jumbotron: {
        title: 'Weight',
        subtitle: 'Group project on gravity-driven infinite run mini-game made using Unity.',
        actions: [
          {
            label: 'Game Release',
            url: 'https://github.com/hliejun/Weight/releases'
          }
        ]
      },
      mockup: {
        src: '/images/projects/weight-1.png',
        orientation: 'landscape',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            {
              label: 'C#',
              src: ''
            }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            {
              label: 'Unity',
              src: ''
            }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [
            {
              label: 'Windows',
              src: ''
            },
            {
              label: 'macOS',
              src: ''
            }
          ]
        }
      ],
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            Weight is a infinite runner where you control the gravity shift
            in a room. You control the fate of a fox who has had some bad
            mushrooms and is therefore stuck in a dream. You must maintain
            the healthy weight to maximise your speed of avoiding evil
            alter-egos and strategically eating or avoiding mushrooms.
            If you run into your evil half, become under or overweight,
            the game ends.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          src: '',
          text: `
            The objective of Weight was to experiment with infinite runner
            game design and learn how to use Unity to create a simple 2D
            platformer.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            This project was difficult as it was my first time trying out
            Unity and I'm the only programmer in the team. It was also
            challenging to procure game assets and meet the module
            requirements of an infinite run game.
          `
        },
      ],
      design: [
        {
          name: 'progression',
          title: 'Game Progression',
          src: '',
          text: `
            As the game progresses, evil halfs and mushrooms will spawn
            at an increasing rate. This increase the difficulty by reducing
            the safe spaces for the player and makes it harder to avoid the
            mushrooms and the evil halfs.
          `
        },
        {
          name: 'balance',
          title: 'Balancing Mechanisms',
          src: '',
          text: `
            Evil halfs are spawned at random locations with a buffer period.
            Mushrooms can be avoided or eaten to adjust the weight of the
            fox. The reapers and mushrooms will disappear after some time
            to reduce the clutter. Obstacles in the dream room are randomised
            at the start of the game session.
          `
        }
      ],
      team: [
        {
          label: 'Ashley Tan',
          description: `
            Ashley was the writer and UI designer. She helped Bettina with
            asset creation.
          `,
          src: ''
        },
        {
          label: 'Bettina Tan',
          description: `
            Bettina was our asset and content creator. She drew game
            graphics, procured music and fonts.
          `,
          src: ''
        },
        {
          label: 'Koh Tze Hui',
          description: `
            Tze Hui was the producer and QA. She validated and documented
            the game development.
          `,
          src: ''
        },
        {
          label: 'Huang Lie Jun',
          description: `
            I worked on game prototyping and implementation using Unity.
          `,
          src: ''
        }
      ],
      references: [
        {
          label: '2D Unity Tutorials',
          description: `
            Tutorials on building a 2D game in Unity.
          `,
          src: '',
          url: ''
        }
      ],
      actions: [
        {
          label: 'Bubble Chat',
          url: '/projects/bubble',
          in: true
        },
        {
          label: 'ToDoList',
          url: '/projects/todolist',
          in: true
        }
      ]
    }
  }
}
</script>
