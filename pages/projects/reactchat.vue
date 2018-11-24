<template>
  <div class='page reactchat project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.1' layout='nodisplay' />

      <!-- TODO: Screenshots and videos of mobile and responsive -->
      <!-- TODO: Icons and glyphs for sections and items -->

      <TagsSection name='technologies' label='TECHNOLOGY' :items='technologies' />
      <HTMLSection name='about' label='ABOUT' :items='about' />
      <HTMLSection name='design' label='DESIGN' :items='design' />
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
  data () {
    return {
      jumbotron: {
        title: 'React Chat',
        subtitle: 'Extensible presentational components for ReactJS chat interfaces, packaged as an NPM library.',
        actions: [
          {
            label: 'Docs',
            url: 'https://hliejun.github.io/react-chat'
          },
          {
            label: 'NPM Repo',
            url: 'https://www.npmjs.com/package/@hliejun/react-chat'
          },
          {
            label: 'Storybook',
            url: 'https://hliejun.github.io/react-chat/docs'
          }
        ]
      },
      mockup: {
        src: '/images/projects/reactchat-1.png',
        orientation: 'landscape',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            {
              label: 'React',
              src: ''
            },
            {
              label: 'SCSS',
              src: ''
            },
            {
              label: 'Webpack',
              src: ''
            },
            {
              label: 'Rollup',
              src: ''
            },
            {
              label: 'Babel',
              src: ''
            },
            {
              label: 'Storybook',
              src: ''
            }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            {
              label: 'Yarn',
              src: ''
            },
            {
              label: 'ESLint',
              src: ''
            },
            {
              label: 'SASSLint',
              src: ''
            }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [
            {
              label: 'NPM',
              src: ''
            },
            {
              label: 'GitHub Pages',
              src: ''
            },
            {
              label: 'Travis CI',
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
            The React Chat library consists of a ChatList and a ChatRoom
            component, each extensible through receiving a collection of
            props inputs. The components are entirely presentational and
            only contain view logic. They can be used in combination to
            create a holistic chat application.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          src: '',
          text: `
            While I was working for NodeFlair, I was tasked to create a
            responsive messaging view for their webpage. I noticed that
            there weren't many extensible chat component libraries available
            in the ReactJS community, especially since chat applications
            are typically better supported in a native environment with
            access to native push notification engines and data stores.<br>
            <br>
            However, web chat components are still relevant for users to
            browse conversations without the hassle of downloading an
            application. They are also useful for CRM chat services,
            progressive web applications and even cross-platform desktop
            applications using frameworks such as Electron. I took the
            opportunity to learn writing and publishing a reusable,
            presentational React component library on NPM, extensible for
            a wide variety of use cases.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            A substantial part of the project was about setting up the
            environment for a React component micro library. One main
            concern was to keep the library and bundle(s) size small to
            reduce the footprint on the client application.<br>
            <br>
            Another challenge was to ensure abstraction of business logic,
            writing function hooks as props or contexts to be received.
            To ensure the library could be utilised for a great variety
            of use cases, a lot of optional and generic props were provided,
            along with proptypes checking.
          `
        },
      ],
      design: [
        {
          name: 'components',
          title: 'COMPONENTS',
          src: '',
          text: `
            I adopted the presentational component design pattern for ChatList,
            ChatRoom and their functional child components. Data is received
            and provided through contexts or props. For stateless children
            that could only be affected through contexts and props data, they
            were written as pure components to optimise the rendering lifecycle.
            ChatList and ChatRoom could then be used in container components
            on the client-side where business logic could be defined and hooked
            up with the presenters.
          `
        },
        {
          name: 'bundling',
          title: 'LIBRARY BUNDLING',
          src: '',
          text: `
            Using Rollup configurations, I exported the ChatList and ChatRoom
            component together as a single module in both UMD and ES module
            formats. The UMD format is compatible with both browser script import
            and NodeJS module import. The additional ES module format allows for
            optimisation by tree shaking to resolve redundant imports and bundle
            code. This is useful for optimising native loading in ES-module aware
            bundlers. Marking of external and peer dependencies also prevented
            Rollup from bundling dependencies into the library unnecessarily.
          `
        }
      ],
      features: [
        {
          name: 'extensible',
          title: 'EXTENSIBLE PROPS',
          src: '',
          text: `
            The functionalities of the components are extensible by optional
            props. This allows you to provide handler functions as props to
            customise view interaction and event behaviours. You can opt-in
            to features such as menu actions, avatar link, chat item loaders,
            and many more. There are also opt-out options, where you can
            explicitly indicate for the search bar or avatar to be hidden,
            for example. This makes the chat components highly customisable.
          `
        },
        {
          name: 'actions',
          title: 'CUSTOM MENU AND ACTIONS',
          src: '',
          text: `
            The chat list items and message items can optionally trigger an
            action menu, of which the menu options can be customised through
            supplying event callbacks as props.
          `
        },
        {
          name: 'search',
          title: 'SEARCH AND FILTER',
          src: '',
          text: `
            Search and filter bars are available in both ChatList and ChatRoom
            components, and they support both live and manual search behaviours.
            Search behaviours can be customised in container components and hooked
            to the presenter through a callback function, along with other business
            logic.
          `
        },
        {
          name: 'responsive',
          title: 'RESPONSIVE DESIGN',
          src: '',
          text: `
            Chat components are responsive to different screen sizes, and works
            well for mobile, tablet and desktop environment. Layouts are dynamic,
            with some elements such as avatar and action menu exclusive to specific
            view classes depending on the availability of the screen real estate.
          `
        },
        {
          name: 'layouts',
          title: 'SWITCHABLE LAYOUTS',
          src: '',
          text: `
            2 distinct layout designs are supported, one with staggered messages
            similar to chat applications such as WhatsApp and Telegram, and another
            with aligned messages seen on Slack and web forums.
          `
        },
        {
          name: 'async',
          title: 'ASYNCHRONOUS IMAGES',
          src: '',
          text: `
            Images are loaded asynchronously, with options to display loaders or
            placeholders preloaded in the library.
          `
        },
        {
          name: 'fallback',
          title: 'FALLBACK ASSETS',
          src: '',
          text: `
            Fallback assets are available as preloaded polymer icons. Lettered
            initials avatars are available as placeholders when avatar images
            are unavailable.
          `
        },
        {
          name: 'styling',
          title: 'BEM NOTATIONS',
          src: '',
          text: `
            Classnames library and BEM notations are used in styling, exposing
            customisable and standardised handles for custom styling of components.
          `
        }
      ],
      references: [
        {
          label: 'React Library Guide',
          description: `
            Article on setting up the environment for publishing ReactJS libraries.
          `,
          src: '',
          url: 'https://hackernoon.com/making-of-a-component-library-for-react-e6421ea4e6c7'
        },
        {
          label: 'Rollup Bundling Guide',
          description: `
            Article on plugins, loaders and bundling configurations for Rollup.
          `,
          src: '',
          url: 'https://code.lengstorf.com/learn-rollup-js'
        },
        {
          label: 'React Pure Components Guide',
          description: `
            Writing and optimising stateless components.
          `,
          src: '',
          url: 'https://lucybain.com/blog/2018/react-js-pure-component'
        }
      ],
      actions: [
        {
          label: 'Portfolio',
          url: '/projects/portfolio',
          in: true
        },
        {
          label: 'UrbanZoom',
          url: '/projects/urbanzoom',
          in: true
        }
      ]
    }
  }
}
</script>
