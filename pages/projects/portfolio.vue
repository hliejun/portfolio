<template>
  <div class='page portfolio project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- TODO: Screenshots and videos of mobile versions -->
      <!-- TODO: Icons and glyphs for sections and items -->

      <TagsSection name='technologies' label='TECHNOLOGY' :items='technologies' />
      <HTMLSection name='about' label='ABOUT' :items='about' />
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
          tags: [
            {
              label: 'Vue',
              src: ''
            },
            {
              label: 'Nuxt',
              src: ''
            },
            {
              label: 'AMP',
              src: ''
            },
            {
              label: 'SCSS',
              src: ''
            }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            {
              label: 'NPM',
              src: ''
            },
            {
              label: 'Photoshop',
              src: ''
            }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          items: [
            {
              label: 'Google App Engine',
              src: ''
            },
            {
              label: 'GitHub Pages',
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
            This portfolio lists some of my past work and projects, as well
            as my job history. It serves as a platform for me to share about
            myself, my interests and my work processes and outcomes.<br>
            <br>
            The site uses the Vue MVVM pattern and directives for reusable,
            lightweight components and to separate data from the views. It
            consists of AMP components for asynchronous loading of media and
            scripts to speed up load time. Media queries and SASS mixins are
            used to create responsive layouts that adapts to various screen
            sizes and orientations.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          src: '',
          text: `
            I created this portfolio to document my work, projects
            and learning experiences. It also served as an opportunity
            to learn the ropes of SEO and server-rendering, pick up the
            Vue MVVM framework and directives, as well as practice the
            use of AMPHTML to create performant webpages.<br>
            <br>
            In my experience with frontend web development, this was my
            first time stepping outside the realm of ReactJS and working
            with Vue and AMP.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            The main challenge that I faced would be to have AMP play nice
            with Nuxt and scripts. Due to the restrictions that AMP imposes,
            I relied on additional AMP dependencies and media queries for
            responsive component behaviours.<br>
            <br>
            Moving away from functional components in React, I took some time
            getting used to the Vue framework and use of directives to populate
            DOM elements.
          `
        },
      ],
      references: [
        {
          label: 'AMP Guide',
          description: `
            About AMP directives, restrictions, async components.
          `,
          src: '',
          url: 'https://www.ampproject.org/docs'
        },
        {
          label: 'Vue Guide',
          description: `
            Explains Vue directives and framework.
          `,
          src: '',
          url: 'https://vuejs.org/v2/guide'
        },
        {
          label: 'Nuxt Guide',
          description: `
            Useful for Nuxt configurations, custom headers, routing,
            rendering options, structure and attributes usage.
          `,
          src: '',
          url: 'https://nuxtjs.org/guide/views'
        },
        {
          label: 'Nuxt AMP Example',
          description: `
            Describes the integration of AMP with Nuxt, especially in
            header and metadata configurations.
          `,
          src: '',
          url: 'https://toor.co/blog/amp-pages-using-nuxt-js'
        },
        {
          label: 'SEO Starter Guide',
          description: `
            Guide to search engine optimisation by Google.
          `,
          src: '',
          url: 'https://support.google.com/webmasters/answer/7451184?hl=en'
        },
        {
          label: 'Nuxt SEO Guide',
          description: `
            Information on search engine optimisations for server-rendered
            Nuxt pages.
          `,
          src: '',
          url: 'https://medium.com/vue-mastery/best-practices-for-nuxt-js-seo-32399c49b2e5'
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
