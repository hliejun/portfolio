<template>
  <div class='page portfolio project'>
    <div class='project__header'>
      <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
      <Jumbotron
        :name='jumbotron.name'
        :title='jumbotron.title'
        :subtitle='jumbotron.subtitle'
        :src='jumbotron.src'
        :actions='jumbotron.actions' />
    </div>
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- Screenshots and videos of mobile versions -->

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
        title: 'Portfolio',
        subtitle: 'Portfolio website documenting my personal work and projects.',
        actions: [
          {
            label: 'GitHub Repo',
            url: 'https://github.com/hliejun/portfolio'
          }
        ]
      },
      mockup: {
        src: '/images/projects/portfolio-1.png',
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
              label: 'Vue',
              description: ''
            },
            {
              src: '',
              label: 'Nuxt',
              description: ''
            },
            {
              src: '',
              label: 'AMP',
              description: ''
            },
            {
              src: '',
              label: 'SCSS',
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
              label: 'NPM',
              description: ''
            },
            {
              src: '',
              label: 'Photoshop',
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
              label: 'Google App Engine',
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
            I created this portfolio to document my work, projects
            and learning experiences. It also served as an opportunity
            to learn the ropes of SEO and server-rendering, pick up the
            Vue MVVM framework and directives, as well as practice the
            use of AMPHTML to create performant webpages.

            In my experience with frontend web development, this was my
            first time stepping outside the realm of ReactJS and working
            with Vue and AMP.
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            In this project, I took advantage of Vue MVVM pattern and directives
            to design reusable, lightweight components and separate data from
            the views.

            I also made use of AMP components for asynchronous loading of media
            and scripts to speed up load time.

            Media queries and SASS mixins are used to create responsive layouts
            that adapts to various screen sizes and orientations.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            The main challenge that I faced would be to have AMP play nice with
            Nuxt and scripts. Due to the restrictions that AMP imposes, I relied
            on additional AMP dependencies and media queries for responsive
            component behaviours.

            Moving away from functional components in React, I took some time getting
            used to the Vue framework and use of directives to populate DOM elements.
          `
        },
      ],
      references: [
        {
          src: '',
          label: 'AMP Guide',
          description: `
            About AMP directives, restrictions, async components.
          `
        },
        {
          src: '',
          label: 'Vue Guide',
          description: `
            Explains Vue directives and framework.
          `
        },
        {
          src: '',
          label: 'Nuxt Guide',
          description: `
            Useful for Nuxt configurations, custom headers, routing,
            rendering options, structure and attributes usage.
          `
        },
        {
          src: '',
          label: 'Nuxt AMP Example',
          description: `
            Describes the integration of AMP with Nuxt, especially in header and metadata configurations.
          `
        },
        {
          src: '',
          label: 'AMP SEO Guide',
          description: `
            Guide to search engine optimisations for AMP webpages.
          `
        },
        {
          src: '',
          label: 'Nuxt SEO Guide',
          description: `
            Details on search engine optimisations for server-rendered Nuxt projects.
          `
        }
      ],
      actions: [
        {
          label: 'Return',
          url: '/work',
          in: true
        },
        {
          label: 'React Chat',
          url: '/projects/reactchat',
          in: true
        }
      ]
    }
  }
}
</script>
