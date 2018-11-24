<template>
  <div class='page foodlogging project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- TODO: Video and screenshots of interaction designs (incl original Nibble) -->
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
        src: '/images/projects/foodlogging-1.png',
        orientation: 'portrait',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            {
              label: 'Marvel',
              src: ''
            },
            {
              label: 'CogTool',
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
            This project is a UI/UX prototype of a mobile food logger application.
            The interface is based on an existing prototype application titled
            Nibble as a module requirement. The improved design is established
            by considering various UI/UX principles and laws, measured and compared
            through CogTool.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          src: '',
          text: `
            The purpose of this food logger interaction design is to study
            the application of UI/UX laws and principles to practical design
            implementations for commercial applications.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            The main constraint for this project was to identify areas of improvement
            for an already polished product: Nibble. The suggested improvements
            were purely based on CogTool analysis, since no product requirements were
            specified for the project.
          `
        },
      ],
      design: [
        {
          name: 'recognition',
          title: 'Recognition Over Recall',
          src: '',
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
          title: 'Button Tolerance',
          src: '',
          text: `
            Buttons are designed to be wide and large for better tolerance by providing
            larger areas of interaction. This can be seen especially in the "Add a Meal"
            button, the "Results List" items, and the "Add to Diary" button. They are
            also stuck to the edges as a Navigation Bar element or a floating button
            for better pointing tolerance and consistency.
          `
        },
        {
          name: 'accessibility',
          title: 'Accessibility',
          src: '',
          text: `
            Redundancies are added for better accessibility, such as the "Add a Meal"
            button that compliments the camera button at the top of the screen.
          `
        },
        {
          name: 'time',
          title: 'Scroll, Homing and Cognition Time',
          src: '',
          text: `
            Most buttons are flushed to the edge of the screen for reduced homing time.
            Non-interactable widgets such as the dashboard are concisely sized to reduce
            unnecessary bulk in the page and save on scroll time. The number of pages to
            navigate is reduced to prevent adding unnecessary congitive time when
            processing changes in context.
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
          src: '',
          url: 'http://jlin95.github.io'
        },
        {
          label: 'Huang Lie Jun',
          description: `
            I worked on my design and the combined design with Jia Lin.
          `,
          src: '',
          url: 'https://github.com/hliejun'
        }
      ],
      references: [
        {
          label: 'CogTool Guide',
          description: `
            Instructions and tutorials on using CogTool for analysis.
          `,
          src: '',
          url: 'https://github.com/cogtool/documentation/blob/master/end-user/user-guide/CogToolUserGuide_1_2%202.pdf'
        },
        {
          label: 'Law of UX',
          description: `
            Guidelines, principles and laws used in UX design.
          `,
          src: '',
          url: 'https://lawsofux.com'
        },
        {
          label: 'Nibble',
          description: `
            More about Nibble, an amazing food logger prototype by Chng Xinni.
          `,
          src: '',
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
