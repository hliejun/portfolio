<template>
  <div class='page foodlogging project'>
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
  head () {
    return {
      title: 'Food Logging - hliejun/projects',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'UI/UX design group project on mobile food logger application.' },
        { name: 'viewport', content: 'width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1,user-scalable=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { property: 'og:title', content: 'Food Logging - hliejun/projects' },
        { property: 'og:description', content: 'UI/UX design group project on mobile food logger application.' },
        { property: 'og:url', content: 'hliejun.github.io' },
        { property: 'og:image', content: 'https://hliejun.github.io/images/meta/preview.png' }
      ]
    }
  },
  data () {
    return {
      jumbotron: {
        title: 'Food Logging',
        subtitle: 'UI/UX design group project on mobile food logger application.',
        actions: [
          {
            label: 'Lie Jun',
            url: 'https://marvelapp.com/30aicca'
          },
          {
            label: 'Jia Lin',
            url: 'https://marvelapp.com/272h5hc'
          },
          {
            label: 'Final',
            url: 'https://marvelapp.com/3aifcdb'
          },
          {
            label: 'Deck',
            url: 'https://docs.google.com/presentation/d/1C-1YvsayLtcTbMYFXw-r3_8-kw7GGPjPY69AhSX68W8/present?usp=sharing'
          }
        ]
      },
      mockup: {
        src: '/images/projects/foodlogging-1.jpg',
        orientation: 'portrait',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            { label: 'Marvel' },
            { label: 'CogTool' }
          ]
        }
      ],
      carpets: {
        about: '/images/projects/foodlogging-2.jpg'
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            This project is a UI/UX prototype of a mobile food logger application.
            The interface is based on an existing prototype application titled
            Nibble as a module requirement. The altered design is established
            by considering various UI/UX principles and laws, measured and compared
            through CogTool.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            The purpose of this food logger interaction design is to study
            the application of UI/UX laws and principles to practical design
            implementations for commercial applications.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            The main constraint for this project was to identify areas of improvement
            for an already polished product: Nibble. The suggested designs in our renditions
            of Nibble were purely based on CogTool analysis, since no product requirements
            were specified for the project.
          `
        },
      ],
      design: [
        {
          name: 'recognition',
          title: 'RECOGNITION OVER RECALL',
          src: '/images/projects/foodlogging-3.jpg',
          text: `
            Intuitive chromes that are commonly used across applications are chosen,
            such as the hamburger icon for menu, camera icon for camera, plus, minus
            icon for adjusting discrete values, and check icon with green highlight
            to indicate selection. Navigation action buttons are kept within the
            title, action or navigation bar by convention to prime the user of the
            application flow and behaviour.
          `
        },
        {
          name: 'tolerance',
          title: 'BUTTON TOLERANCE',
          src: '/images/projects/foodlogging-4.jpg',
          text: `
            Buttons are designed to be wide and large for tolerance by providing
            larger areas of interaction. This can be seen especially in the "Add a Meal"
            button, the "Results List" items, and the "Add to Diary" button. They are
            also stuck to the edges as a Navigation Bar element or a floating button
            for pointing tolerance and consistency.
          `
        },
        {
          name: 'accessibility',
          title: 'ACCESSIBILITY',
          src: '/images/projects/foodlogging-5.jpg',
          text: `
            Redundancies are added for accessibility, such as the "Add a Meal"
            button that compliments the camera button at the top of the screen.
          `
        },
        {
          name: 'time',
          title: 'SCROLL, HOMING & COGNITION',
          src: '/images/projects/foodlogging-6.jpg',
          text: `
            Most buttons are flushed to the edge of the screen for reduced homing time.
            Non-interactable widgets such as the dashboard are resized to save on
            scroll time. The number of pages to navigate is reduced to lighten
            cognitive load when processing changes in context.
          `
        }
      ],
      team: [
        {
          label: 'Lee Jia Lin',
          description: `
            Jia Lin was responsible for her initial design. We worked on the UX flow, slides
            and CogTool calculations for the combined design together.
          `,
          src: '/images/profiles/jialin.jpg',
          url: 'http://jlin95.github.io'
        },
        {
          label: 'Huang Lie Jun',
          description: `
            I worked on my design and the combined design with Jia Lin.
          `,
          src: '/images/profiles/liejun.jpg',
          url: 'https://github.com/hliejun'
        }
      ],
      references: [
        {
          label: 'CogTool Guide',
          description: `
            Instructions and tutorials on using CogTool for analysis.
          `,
          src: '/images/links/cogtool.jpg',
          url: 'https://github.com/cogtool/documentation/blob/master/end-user/user-guide/CogToolUserGuide_1_2%202.pdf'
        },
        {
          label: 'Laws of UX',
          description: `
            Guidelines, principles and laws used in UX design.
          `,
          src: '/images/links/lawsofux.jpg',
          url: 'https://lawsofux.com'
        },
        {
          label: 'Nibble',
          description: `
            More about Nibble, an amazing food logger prototype by Chng Xinni.
          `,
          src: '/images/links/nibble.jpg',
          url: 'http://xinni.co/nibble.html'
        }
      ],
      actions: [
        {
          label: 'SAT Solver',
          url: '/projects/satsolver',
          in: true
        },
        {
          label: 'Bubble Chat',
          url: '/projects/bubble',
          in: true
        }
      ]
    }
  }
}
</script>
