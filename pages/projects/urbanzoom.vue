<template>
  <div class='page urbanzoom project'>
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
      title: 'UrbanZoom Assistant - hliejun',
      meta: [
        { hid: 'description', name: 'description', content: 'Google Assistant and Twilio agent that performs property valuation homes in Singapore.' }
      ]
    }
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
        src: '/images/projects/urbanzoom-1.jpg',
        orientation: 'portrait',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'Express' },
            { label: 'Dialogflow' },
            { label: 'TwiML' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            { label: 'Google Actions' },
            { label: 'Postman' }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [
            { label: 'Firebase' },
            { label: 'Google App Engine' }
          ]
        }
      ],
      carpets: {
        about: '/images/projects/urbanzoom-2.jpg'
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            UrbanZoom agent is a Google Assistant application built for property price
            prediction of Singapore homes, with support for Google Assistant users,
            Google Home devices, as well as non-technical users through phone calls.
            The agent handles queries on property price valuation for a specified
            postal code, providing accurate predictions on HDB and condominium prices,
            also known as ZoomValue. Users will provide a postal code, the flat type
            (for HDBs), floor number, unit number and floor area (auto-fill available)
            to complete the query.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            The UrbanZoom action was created to make UrbanZoom property valuation
            API accessible to consumers, regardless of their technical knowledge
            and skills. This application was also created to demonstrate the
            accessibility and ease of integrating the UrbanZoom API for property
            valuation into web-based applications. I saw this project as a chance to
            try out the Dialogflow API, as well as to learn about voice UX design.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            One of the biggest challenges would be to ensure accuracy and reliability
            in speech-to-text recognition of addresses. For users with Singaporean accent
            and especially for non-English speaking pioneers, getting the right addresses
            from voice commands would be difficult. This was made worse with complex and native
            addresses. My workaround was to prompt for postal addresses, then improve the
            reliability of reading floor, unit numbers and postal code from voice commands.
            The results were localised through a dictionary of corrections, generated from a
            series of tests conducted by locals.<br>
            <br>
            This agent was built before the availability of Google Duplex. As such, one-click
            voice call integrations were unavailable, at least not directly. I integrated the
            agent with Twilio Programmable Voice service to receive and parse commands through
            phone calls and ensured that the Dialogflow agent webhook was generic enough to
            support services other than Google Assistant, such as Telegram bot and Facebook
            Messenger.<br>
            <br>
            Another issue I had encountered would be the cold-start timings when serving the
            webhook off Firebase Functions. Due to poor cold-start timings on Firebase Functions,
            connections with the agent tend to time-out and break off midway, especially when
            traffic to the webhook was low or sporadic. Switching over to Google App Engine
            improved the experience tremendously.
          `
        },
      ],
      features: [
        {
          name: 'accuracy',
          title: 'ACCURACY',
          src: '/images/projects/urbanzoom-3.jpg',
          text: `
            UrbanZoom Assistant utilises the UrbanZoom API for highly accurate
            property valuation results. This allows the agent to provide reliable
            answers to user queries.
          `
        },
        {
          name: 'guided',
          title: 'GUIDED INTERFACE',
          video: '/videos/project-urbanzoom-01.mp4',
          webm: '/videos/project-urbanzoom-01.webm',
          text: `
            Dialogues with UrbanZoom Assistant are guided with clear instructions
            and feedback to prompt users for required fields such as postal code,
            floor and unit number. Housing type is automatically derived from the
            postal code, matching addresses are suggested when the user provide an
            incomplete postal code and the floor area is automatically fetched for
            homes already in the database.
          `
        },
        {
          name: 'agnostic',
          title: 'DEVICE AGNOSTIC',
          src: '/images/projects/urbanzoom-4.jpg',
          text: `
            Integrating with Google Action means the agent can be accessed through
            all Google Assistant enabled devices, regardless of the input surface.
            The agent can be used with Google Home, iOS, Android and third-party
            Google Assistant enabled devices. With Twilio integration, the application
            is also accessible from land lines, mobile phones or VOIP devices.
            However, note that the calls are not toll-free, and charges might be
            incurred by your service provider.
          `
        }
      ],
      references: [
        {
          label: 'Dialogflow Fulfillment Webhook API',
          description: `
            Fulfillment API repository with guide on handling Dialogflow requests and
            custom responses using Promises.
          `,
          src: '/images/links/github.jpg',
          url: 'https://github.com/dialogflow/dialogflow-fulfillment-nodejs'
        },
        {
          label: 'Dialogflow Client API',
          description: `
            Client API repository for constructing Dialogflow queries from generic
            third-party applications or agents.
          `,
          src: '/images/links/github.jpg',
          url: 'https://github.com/googleapis/nodejs-dialogflow'
        },
        {
          label: 'Twilio TwiML Guide',
          description: `
            Instructions to control call sessions, handle voice and keypad inputs,
            build queries and hold calls.
          `,
          src: '/images/links/twilio.jpg',
          url: 'https://www.twilio.com/docs/voice/twiml'
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
