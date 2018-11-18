<template>
  <div class='page reactchat project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.1' layout='nodisplay' />

      <!-- Screenshots and videos of mobile and responsive -->

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
          items: [
            {
              src: '',
              label: 'React',
              description: ''
            },
            {
              src: '',
              label: 'SCSS',
              description: ''
            },
            {
              src: '',
              label: 'Webpack',
              description: ''
            },
            {
              src: '',
              label: 'Rollup',
              description: ''
            },
            {
              src: '',
              label: 'Babel',
              description: ''
            },
            {
              src: '',
              label: 'Storybook',
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
              label: 'Yarn',
              description: ''
            },
            {
              src: '',
              label: 'ESLint',
              description: ''
            },
            {
              src: '',
              label: 'SASSLint',
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
              label: 'NPM',
              description: ''
            },
            {
              src: '',
              label: 'GitHub Pages',
              description: ''
            },
            {
              src: '',
              label: 'Travis CI',
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
            While I was working for NodeFlair, I was tasked to create a responsive messaging view
            for their webpage. I noticed that there aren't many extensible chat component libraries
            available in the ReactJS community, especially since chat applications are typically
            better supported in a native environment with access to native push notification engines
            and data stores.<br>
            <br>
            However, web chat components are still relevant for users to browse conversations
            without the hassle of downloading an application. They are also useful for progressive
            web applications, even cross-platform desktop applications using frameworks such as
            Electron. I took the opportunity to learn writing and publishing a reusable, presentational
            React component library on NPM, extensible for a wide variety of use cases.
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            The React Chat library consists of a ChatList and a ChatRoom component, each extensible
            through receiving a collection of props inputs. The components are entirely presentational
            and only contain view logic. They can be used in combination to create a holistic chat
            application.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            A substantial part of the project was about setting up the environment to publish the components
            as a library. One main concern was to keep the library and bundle(s) size small to reduce the
            footprint on the client application.<br>
            <br>
            Another challenge was to ensure abstraction of business logic, writing function hooks as props
            or contexts to be received. To ensure the library could be utilised for a great variety of use cases,
            a lot of optional and generic props were provisioned, along with proptypes checking.
          `
        },
      ],
      design: [
        {
          name: 'components',
          title: 'COMPONENTS',
          src: '',
          text: `
            I adopted the presentational component design pattern for ChatList, ChatRoom and their functional
            child components. Data was received and provided through contexts or props. For stateless children
            that could only be affected through contexts and props data, they were written as pure components
            to optimise the rendering lifecycle. ChatList and ChatRoom could then be used in container components
            on the client-side where business logic could be defined and hooked up with the presenters.
          `
        },
        {
          name: 'bundling',
          title: 'LIBRARY BUNDLING',
          src: '',
          text: `
            Using Rollup configurations, I exported the ChatList and ChatRoom component together as
            a single module in both UMD and ES module formats. The UMD format is compatible with both
            browser script import and NodeJS module import. The additional ES module format allows
            for optimisation by tree shaking to resolve redundant imports and bundle code. This is useful
            for optimising native loading in ES-module aware bundlers. Marking of external and peer
            dependencies also prevented Rollup from bundling dependencies into the library unnecessarily.
          `
        }
      ],
      features: [
        {
          name: 'extensible',
          title: 'EXTENSIBLE PROPS',
          src: '',
          text: `
            The functionalities of the components are extensible by optional props. This allows
            you to provide handler functions as props to customise view interaction and event
            behaviours. You can opt-in to features such as menu actions, avatar link, chat item
            loaders, and many more. There are also opt-out options, where you can explicitly
            indicate for the search bar or avatar to be hidden, for example. This makes the chat
            components highly customisable.
          `
        },
        {
          name: 'actions',
          title: 'CUSTOM MENU AND ACTIONS',
          src: '',
          text: `
            The chat list items and message items can optionally trigger an action menu, of which
            the menu options can be customised through supplying event callbacks as props.
          `
        },
        {
          name: 'search',
          title: 'SEARCH AND FILTER',
          src: '',
          text: `
            Search and filter bars are available in both ChatList and ChatRoom components, and they
            support both live and manual search behaviours. Search behaviours can be customised in
            container components and hooked to the presenter through a callback function, along
            with other business logic.
          `
        },
        {
          name: 'responsive',
          title: 'RESPONSIVE DESIGN',
          src: '',
          text: `
            Chat components are responsive to different screen sizes, and works well for mobile, tablet
            and desktop environment. Layouts are dynamic, with some elements such as avatar and action
            menu exclusive to specific view classes depending on the availability of the screen real estate.
          `
        },
        {
          name: 'layouts',
          title: 'SWITCHABLE LAYOUTS',
          src: '',
          text: `
            2 distinct layout designs are supported, one with staggered messages similar to chat
            applications such as WhatsApp and Telegram, and another with aligned messages seen on
            Slack and discussion forums.
          `
        },
        {
          name: 'async',
          title: 'ASYNCHRONOUS IMAGES',
          src: '',
          text: `
            Images are loaded asynchronously, with options to display loaders or placeholders
            preloaded in the library.
          `
        },
        {
          name: 'fallback',
          title: 'FALLBACK ASSETS',
          src: '',
          text: `
            Fallback assets are available as preloaded polymer icons. Lettered initials avatars are
            available as placeholders when avatar images are unavailable.
          `
        },
        {
          name: 'styling',
          title: 'BEM NOTATIONS',
          src: '',
          text: `
            Classnames library and BEM notations are used in styling, exposing customisable and standardised
            handles for custom styling of components.
          `
        }
      ],
      references: [
        {
          src: '',
          label: 'Hackernoon React Library Guide',
          description: `
            Advice on setting up the environment for publishing ReactJS libraries.
          `
        },
        {
          src: '',
          label: 'Rollup Bundling Guide',
          description: `
            Loaders, bundle splitting and module export configurations.
          `
        },
        {
          src: '',
          label: 'React Pure Components Guide',
          description: `
            Writing and optimising stateless components.
          `
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
