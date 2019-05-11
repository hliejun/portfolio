<template>
  <div class="page bitsy project">
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
      title: 'Missing Children - hliejun/projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Interactive pixel story made using Bitsy.'
        },
        {
          property: 'og:title',
          content: 'Missing Children - hliejun/projects'
        },
        {
          property: 'og:description',
          content: 'Interactive pixel story made using Bitsy.'
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
        webp: '/images/projects/bitsy-1.webp',
        src: '/images/projects/bitsy-1.jpg',
        orientation: 'landscape',
        type: 'wide'
      },
      carpets: {
        about: '/images/projects/bitsy-2.webp',
        aboutFallback: '/images/projects/bitsy-2.jpg'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [{ label: 'Javascript' }, { label: 'HTML' }, { label: 'CSS' }]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [{ label: 'Bitsy' }]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [{ label: 'itch.io' }, { label: 'GitHub Pages' }]
        }
      ],
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            Set in the small town of Ann Siang Hill, an infamous cold case
            on children going missing led to the abandonment of the ghastly
            neighbourhood. Inspector Tan took the case into his own hands
            for personal reasons, only to struggle between hallucinations
            and reality. The mysterious visions he encounters as he travels
            through the ghost town looking for clues leads him closer towards
            the larger truth behind the disappearances of the children.<br>
            <br>
            Throughout the game, you will discover visions of the past through
            the persona. This is indicated by entering a colorized version of
            the scene. You may also pick up evidences from NPCs or props on
            the ground. These evidences will hint at the places to go, or
            unravel bits of pieces of the storyline. You are encouraged to
            replay a couple of times to get the whole story!
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            The goal of this pixel story was to learn about the agency of
            exploration, unraveling a story through unordered discovery
            and gameplay, driven by interactions and dialogues between
            characters and key items. It was also an avenue for me to
            fiddle with pixel art and game design.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            There were module limitations set on the use of sprites, rooms
            and items. Bitsy hacks were not allowed too. However, these
            restrictions did encourage interesting workarounds, such as
            hiding entrypoints to conversation or event-triggered scenes
            and using dialogues to guide players to these hiding spots.
          `
        }
      ],
      design: [
        {
          name: 'world',
          title: 'GAME WORLD',
          webp: '/images/projects/bitsy-3.webp',
          src: '/images/projects/bitsy-3.jpg',
          text: `
            The game world comprises of 9 distinct scenes, 6 of them with
            alternate dimensions. Key items are scattered among these scenes,
            supplemented with monologues that unravel the plot. Characters can
            only be found in scenes of the past. Interacting with these NPCs
            will give clues to their identities, as well as the role they play
            in the story. Depending on your possession of items, characters
            will have different replies to your conversations.
          `
        }
      ],
      features: [
        {
          name: 'dimensions',
          title: 'ALTERNATE DIMENSIONS',
          video: '/videos/project-bitsy-01.mp4',
          webm: '/videos/project-bitsy-01.webm',
          text: `
            You can travel between scenes to interact across dimensions. These
            special dimensions represent the haunting of the past. To the
            protagonist, it can be interpreted in many forms: hallucinations,
            supernatural occurrences, time portals, recalls, etc. They are
            distinct from the present dimensions in that they are coloured,
            filled with NPCs and have slight differences in their setting.
          `
        },
        {
          name: 'hidden',
          title: 'HIDDEN ITEMS',
          video: '/videos/project-bitsy-02.mp4',
          webm: '/videos/project-bitsy-02.webm',
          text: `
            Some items are hidden from plain sight. This allows you to explore
            the area, focus on dialogues and the storyline to make interactions
            with the environment. It can also become a thrilling "treasure hunt"
            if you prefer searching for them to listening for hints in dialogues.
          `
        },
        {
          name: 'intricate',
          title: 'INTRICATE PIXEL ART & DIALOGUES',
          video: '/videos/project-bitsy-03.mp4',
          webm: '/videos/project-bitsy-03.webm',
          text: `
            Each glyph, item, or character is designed meticulously to capture
            traits, setting and character personalities in the scene. Some designs
            are animated to illustrate events or create ambience.
          `
        },
        {
          name: 'parrot',
          title: 'PARROT',
          video: '/videos/project-bitsy-04.mp4',
          webm: '/videos/project-bitsy-04.webm',
          text: `
            You will find a parrot in the park scene, imitating random lines
            of passers-by. The parrot is a mechanism to capture the story from
            a spectator's point of view, and provides a different perspective
            to the story. The imitated lines will hint at the story, as well
            as your objectives in different scenes.
          `
        }
      ],
      references: [
        {
          label: 'Balloon Diaspora',
          description: `
            A game by Cardboard Computer focusing on the agency of exploration
            and emotion through dialogues.
          `,
          src: '/images/links/balloondiaspora.jpg',
          url: 'http://cardboardcomputer.com/games/balloon-diaspora'
        },
        {
          label: 'Glass',
          description: `
            Interactive text story by Emily Short, putting the narrative in a
            spectator's perspective.
          `,
          src: '/images/links/glass.jpg',
          url: 'http://inform7.com/learn/eg/glass/play.html'
        },
        {
          label: 'Galatea',
          description: `
            Also created by Emily Short, an interactive text story that inspires
            player to form associations between key objects and entities with
            story fragments.
          `,
          src: '/images/links/galatea.jpg',
          url: 'http://pr-if.org/play/galatea'
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
