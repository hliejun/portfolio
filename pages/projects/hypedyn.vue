<template>
  <div class='page hypedyn project'>
    <amp-image-lightbox id='lightbox' class='gallery__lightbox' layout='nodisplay' />
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />
      <TagsSection name='technologies' label='TECHNOLOGY' :items='technologies' />
      <HTMLSection name='about' label='ABOUT' :items='about' :carpet='carpets.about' />
      <HTMLSection name='features' label='FEATURES' :items='features' />
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
  head () {
    return {
      title: 'HypeDyn Stories - hliejun/projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Interactive text stories made using HypeDyn.' },
        { property: 'og:title', content: 'HypeDyn Stories - hliejun/projects' },
        { property: 'og:description', content: 'Interactive text stories made using HypeDyn.' },
        { property: 'og:url', content: 'hliejun.github.io' },
        { property: 'og:image', content: 'https://hliejun.github.io/images/meta/preview.png' }
      ]
    }
  },
  data () {
    return {
      jumbotron: {
        title: 'HypeDyn Stories',
        subtitle: 'Interactive text stories made using HypeDyn.',
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
        src: '/images/projects/hypedyn-1.jpg',
        orientation: 'portrait',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'Javascript' },
            { label: 'HTML' },
            { label: 'CSS' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            { label: 'HypeDyn' }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [
            { label: 'GitHub Pages' }
          ]
        }
      ],
      carpets: {
        about: '/images/projects/hypedyn-2.jpg'
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            Air Crash Investigation is a story about choice and replayability.
            The player puts herself in the shoes of the flight investigator and
            make a series of decisions, each branching into a segment or piece of
            the story about different suspects, as well as the private life of
            the investigator. Depending on the decisions made by the player, such
            as accusations on suspects, the story turns out differently and reaches
            a different ending.<br>
            <br>
            The Patrol, on the other hand, is story much motivated by the development of
            emotions through dialogues. The story focuses on a security guard on patrol
            making conversations with his buddy, and these conversations would eventually
            build up the emotions at various scenes, the relationships and profile of the
            characters and shed light on the truth behind the story.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            These stories were helpful in learning about various techniques and agencies
            of interactive storytelling. This project was also about learning to use HypeDyn,
            a tool to build interactive text stories by creating and linking story fragments.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            The challenge with this project was to tell a story without long narratives
            or graphical media. Instead, I had to rely on emotions, choices, dialogues,
            re-readings, performances to build a story through the player's interaction
            with the text.
          `
        },
      ],
      features: [
        {
          name: 'interactivity',
          title: 'READER INCLUSION',
          src: '/images/projects/hypedyn-3.jpg',
          text: `
            These interactive text stories are heavily littered with action and decision
            links, engaging readers with the plot progression with inclusive inputs and
            dynamic outcomes.
          `
        },
        {
          name: 'branched',
          title: 'BRANCHED ACTIONS OR ENDINGS',
          src: '/images/projects/hypedyn-4.jpg',
          text: `
            Your actions and decisions will have an impact on either the immediate outcome,
            or the eventual endings of the stories. These variances in plot are customised
            to your decisions, and they encourage you to re-read or replay and discover
            alternate consequences.
          `
        },
        {
          name: 'ascii',
          title: 'ASCII ART',
          src: '/images/projects/hypedyn-5.jpg',
          text: `
            The stories are decorated with ASCII art designed to illustrate the setting
            for different stages or scenes in the stories.
          `
        }
      ],
      references: [
        {
          label: 'Six Key Design Strategies for Replay Stories',
          description: `
            Article on replay and re-reading by Janet H. Murray.
          `,
          src: '/images/links/inventingthemedium.jpg',
          url: 'https://inventingthemedium.com/2013/05/15/six-key-design-strategies-for-replay-stories'
        },
        {
          label: 'Agency Reconsidered',
          description: `
            Paper on agency by Wardrip-Fruin et. al.
          `,
          src: '/images/links/digra.jpg',
          url: 'http://www.digra.org/wp-content/uploads/digital-library/09287.41281.pdf'
        },
        {
          label: 'Their Angelic Understanding',
          description: `
            Interactive story by Porpentine.
          `,
          src: '/images/links/angelicunderstanding.jpg',
          url: 'http://aliendovecote.com/uploads/twine/angels/angel.html'
        },
        {
          label: 'Aisle',
          description: `
            Interactive story by Sam Barlow.
          `,
          src: '/images/links/aisle.jpg',
          url: 'https://www.ifiction.org/games/playz.php?cat=&game=232&mode=html'
        },
        {
          label: 'Incidental Character Choices in Balloon Diaspora',
          description: `
             Article on agency of choice by Gregory Weir.
          `,
          src: '/images/links/gamesetwatch.jpg',
          url: 'http://www.gamesetwatch.com/2011/04/incidental_character_choices_i.php'
        },
        {
          label: 'Accretive Player Character',
          description: `
            Article on play character discovery by Emily Short.
          `,
          src: '/images/links/gamasutra.jpg',
          url: 'https://www.gamasutra.com/view/news/115115/Analysis_The_Accretive_Player_Character.php'
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
