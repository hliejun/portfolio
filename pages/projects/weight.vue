<template>
  <div class="page weight project">
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
      <LinksSection name="team" label="TEAM" :items="team" />
      <LinksSection name="references" label="REFERENCES" :items="references" />
      <ActionsSection name="actions" :items="actions" />
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
  head() {
    return {
      title: 'Weight - hliejun/projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Gravity-driven infinite run mini-game made using Unity.'
        },
        { property: 'og:title', content: 'Weight - hliejun/projects' },
        {
          property: 'og:description',
          content: 'Gravity-driven infinite run mini-game made using Unity.'
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
        title: 'Weight',
        subtitle: 'Gravity-driven infinite run mini-game made using Unity.',
        actions: [
          {
            label: 'Game Release',
            url: 'https://github.com/hliejun/Weight/releases'
          }
        ]
      },
      mockup: {
        webp: '/images/projects/weight-1.webp',
        src: '/images/projects/weight-1.jpg',
        orientation: 'landscape',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [{ label: 'C#' }]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [{ label: 'Unity' }]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [{ label: 'Windows' }, { label: 'macOS' }]
        }
      ],
      carpets: {
        about: '',
        aboutFallback: ''
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
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
          text: `
            The objective of Weight was to experiment with infinite runner
            game design and learn how to use Unity to create a simple 2D
            platformer.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            This project was difficult as it was my first time trying out
            Unity and I'm the only programmer in the team. It was also
            challenging to procure game assets and meet the module
            requirements of an infinite run game.
          `
        }
      ],
      design: [
        {
          name: 'progression',
          title: 'GAME PROGRESSION',
          video: '/videos/project-weight-01.mp4',
          webm: '/videos/project-weight-01.webm',
          text: `
            As the game progresses, evil halfs and mushrooms will spawn
            at an increasing rate. This increase the difficulty by reducing
            the safe spaces for the player and makes it harder to avoid the
            mushrooms and the evil halfs.
          `
        },
        {
          name: 'balance',
          title: 'BALANCING MECHANISM',
          video: '/videos/project-weight-02.mp4',
          webm: '/videos/project-weight-02.webm',
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
          src: '/images/profiles/placeholder.jpg',
          description: `
            Ashley was the writer and UI designer. She helped Bettina with
            asset creation.
          `
        },
        {
          label: 'Bettina Tan',
          src: '/images/profiles/placeholder.jpg',
          description: `
            Bettina was our asset and content creator. She drew game
            graphics, procured music and fonts.
          `
        },
        {
          label: 'Koh Tze Hui',
          src: '/images/profiles/placeholder.jpg',
          description: `
            Tze Hui was the producer and QA. She validated and documented
            the game development.
          `
        },
        {
          label: 'Huang Lie Jun',
          src: '/images/profiles/liejun.jpg',
          description: `
            I worked on game prototyping and implementation using Unity.
          `
        }
      ],
      references: [
        {
          label: '2D Unity Tutorials',
          description: `
            Tutorials on building a 2D game in Unity.
          `,
          src: '/images/links/unity.jpg',
          url: 'https://unity3d.com/learn/tutorials/s/2d-game-creation'
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
