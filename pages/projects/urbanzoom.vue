<template>
  <div class='page urbanzoom project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- Screenshots and videos of flow and suggestions -->

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
        title: 'UrbanZoom Assistant',
        subtitle: 'Google Assistant and Twilio agent that performs property valuation homes in Singapore.',
        actions: [
          {
            label: 'Try the Action',
            url: 'https://assistant.google.com/services/a/uid/0000002516830acd?hl=en&source=web'
          },
          {
            label: 'Dial In (SG)',
            url: 'tel:+6531388416'
          }
        ]
      },
      mockup: {
        src: '/images/projects/urbanzoom-1.png',
        orientation: 'portrait',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          items: [
            {
              src: '',
              label: 'Express',
              description: ''
            },
            {
              src: '',
              label: 'Dialogflow',
              description: ''
            },
            {
              src: '',
              label: 'TwiML',
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
              label: 'Google Actions',
              description: ''
            },
            {
              src: '',
              label: 'Postman',
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
              label: 'Firebase',
              description: ''
            },
            {
              src: '',
              label: 'Google App Engine',
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
            The UrbanZoom action was created to provide accessibility to UrbanZoom property valuation
            API to consumers, regardless of their technical knowledge and skills. This application
            was also created to demonstrate the accessibility and ease of integrating the UrbanZoom
            API for property valuation into web-based applications. I saw this project as a chance to
            try out the Dialogflow API, as well as to learn about voice UX design.
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            UrbanZoom agent is a Google Assistant agent built for UrbanZoom, with support for both speaker
            and screen surfaces, as well as accessible through phone calls. The agent handles queries
            on property price valuation for a specified postal code, providing accurate predictions on
            HDB and condominium prices, also known as ZoomValue. Users will provide a postal code, the
            flat type (for HDBs), floor number, unit number and floor area (auto-fill available) to complete
            the query.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            One of the biggest challenges would be to ensure accuracy and reliability in recognising addresses
            in voice commands. For users with Singaporean accent and especially for non-English speaking pioneers,
            getting the right addresses from voice commands would be difficult. This was made worse with difficult
            addresses and property names. My workaround was to prompt for postal addresses, then improve the
            reliability of reading floor, unit numbers and postal code from voice commands. The results were
            localised through a dictionary of corrections, generated from a series of tests conducted by locals.<br>
            <br>
            This agent was built before the availability of Google Duplex, as such one-click voice call integrations
            were unavailable, at least not directly. I integrated the agent with Twilio Programmable Voice service
            to receive and parse commands through phone calls, and ensured that the Dialogflow agent webhook was
            generic enough to support services other than Google Assistant, such as Telegram bot and
            Facebook Messenger.<br>
            <br>
            Another issue I had encountered would be the cold-start timings when serving the webhook off Firebase
            Functions. Due to poor cold-start timings on Firebase Functions, connections with the agent tend to
            break off midway due to timeouts, especially when traffic to the webhook was low or sporadic. Switching
            over to Google App Engine improved the experience tremendously.
          `
        },
      ],
      features: [
        {
          name: 'accuracy',
          title: 'ACCURACY',
          src: '',
          text: `
            UrbanZoom Assistant utilises the UrbanZoom API for highly accurate property valuation results.
            This allows the agent to provide reliable answers to user queries.
          `
        },
        {
          name: 'guided',
          title: 'GUIDED INTERFACE',
          src: '',
          text: `
            Dialogues with UrbanZoom Assistant is guided with clear instructions and feedback to prompt users
            for required fields such as postal code, floor and unit number. Housing type is automatically derived
            from the postal code, matching addresses are suggested when the user provide an incomplete postal code,
            and floor area is automatically fetched for homes already in the database.
          `
        },
        {
          name: 'agnostic',
          title: 'DEVICE AGNOSTIC',
          src: '',
          text: `
            Integrating with Google Action means the agent can be accessed through all Google Assistant enabled
            devices, regardless of the input surface. This means the application can be used with Google Home,
            iOS, Android and third-party Google Assistant enabled devices. With Twilio integration, the application
            is also accessible from land lines, mobile phones or VOIP devices. However, do note that the calls
            are not toll-free, and charges might be incurred by your service provider.
          `
        }
      ],
      references: [
        {
          src: '',
          label: 'Dialogflow Webhook API',
          description: `
            Guide to handle Dialogflow requests with custom responses using Promises.
          `
        },
        {
          src: '',
          label: 'Dialogflow Client API',
          description: `
            How to construct queries for Dialogflow agent from generic third-party applications.
          `
        },
        {
          src: '',
          label: 'Twilio TwiML Guide',
          description: `
            Instructions to control call sessions, handle voice and keypad inputs, build queries and hold calls.
          `
        }
      ],
      actions: [
        {
          label: 'React Chat',
          url: '/projects/reactchat',
          in: true
        },
        {
          label: 'Little Lives',
          url: '/projects/littlelives',
          in: true
        }
      ]
    }
  }
}
</script>
