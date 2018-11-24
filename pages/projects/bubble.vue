<template>
  <div class='page bubble project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- TODO: Screenshots of scenes and video of interactions + styling -->
      <!-- TODO: Icons and glyphs for sections and items -->

      <TagsSection name='technologies' label='TECHNOLOGY' :items='technologies' />
      <HTMLSection name='about' label='ABOUT' :items='about' />
      <HTMLSection name='features' label='FEATURES' :items='features' />
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
        title: 'Bubble Chat',
        subtitle: 'Problem-solving and stress management anonymous chat application.',
        actions: [
          {
            label: 'Project Repo',
            url: 'https://github.com/CS3216-Bubble'
          }
        ]
      },
      mockup: {
        src: '/images/projects/bubble-1.png',
        orientation: 'portrait',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            {
              label: 'React Native',
              src: ''
            },
            {
              label: 'ReactJS',
              src: ''
            },
            {
              label: 'Redux',
              src: ''
            },
            {
              label: 'socket.io',
              src: ''
            },
            {
              label: 'Express',
              src: ''
            },
            {
              label: 'SQLite',
              src: ''
            }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            {
              label: 'ESLint',
              src: ''
            },
            {
              label: 'NPM',
              src: ''
            },
            {
              label: 'Marvel',
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
          tags: [
            {
              label: 'Nginx',
              src: ''
            },
            {
              label: 'Amazon EC2',
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
            Started out as a chat application for students in need of counselling,
            Bubble became an application for students to chat, brainstorm and rant
            anonymously. It is a mobile chat application that is implemented in
            React Native. It also has a web interface built with React for web users
            to access chat groups.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          src: '',
          text: `
            With Bubble, we aimed to learn about the entire flow of building an
            application, from implementing a minimum viable product, to marketing
            the product, user acquistion, engagement and management. Bubble was
            also a platform for students to experiment with anonymity in chat
            applications and to become aware of the pros and cons of this anonymity,
            in the safety net of an educational institution and a testbed module.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            The greatest challenge in this project was to manage anonymity in a chat.
            From ensuring data privacy to meeting the requirements of the application
            markets, we learnt the complexities involved in publishing an anonymous
            chat application, such as the need for a flagging and reporting system and
            terms of use that polices the anonymity. While we lack the time and resources
            to provide these facilities and eventually failed to publish on the iOS App
            Store, we did succeed in releasing on Play Store and web in the module term.
          `
        },
      ],
      features: [
        {
          name: 'anonymity',
          title: 'Anonymity',
          src: '',
          text: `
            Chat anonymously with strangers in topical chat rooms. No sign-in or registration
            is required. Pseudo-identity are persisted through socket sessions, cache and
            Redux store.
          `
        },
        {
          name: 'realtime',
          title: 'Real-Time Chats and Notifications',
          src: '',
          text: `
            Chats are fired in real-time through socket events along with mobile application
            notifications. There is also an option to turn off notifications for individual
            rooms.
          `
        },
        {
          name: 'categories',
          title: 'Tagged and Categorised Groups',
          src: '',
          text: `
            Chat rooms can be labelled or tagged with categorised tags. These tags
            are colour-coded and can be used to filter conversations.
          `
        },
        {
          name: 'filter',
          title: 'Search and Filter',
          src: '',
          text: `
            You can search for rooms by room title, or filter them by their tagged
            categories.
          `
        }
      ],
      team: [
        {
          label: 'Michelle Tan',
          description: `
            Michelle was responsible for UI/UX design, React Native application, marketing
            designs and content creation.
          `,
          src: '',
          url: 'https://github.com/michelletan'
        },
        {
          label: 'Ng Zhi An',
          description: `
            Zhi An handled the backend Express application, database, socket events and
            DevOps.
          `,
          src: '',
          url: 'https://www.ngzhian.com'
        },
        {
          label: 'Nicholette Li',
          description: `
            Nicholette worked on the web chat interface, content creation and marketing.
          `,
          src: '',
          url: 'https://github.com/nicholette'
        },
        {
          label: 'Huang Lie Jun',
          description: `
            I wrote the React Native application with Michelle, socket client for
            front-end and Redux stores.
          `,
          src: '',
          url: 'https://github.com/hliejun'
        }
      ],
      references: [
        {
          label: 'React Native Documentation',
          description: `
            Official documentation and tutorials for React Native.
          `,
          src: '',
          url: 'https://facebook.github.io/react-native/docs/getting-started'
        },
        {
          label: 'React Native with Redux',
          description: `
            Tutorial on using Redux with React Native.
          `,
          src: '',
          url: 'https://alligator.io/react/react-native-redux'
        },
        {
          label: 'socket.io with React Native',
          description: `
            Tutorial on using socket.io with React Native for a chat application.
          `,
          src: '',
          url: 'https://hackernoon.com/a-simple-messaging-app-with-react-native-and-socket-io-e1cae3df7bda'
        },
        {
          label: 'React Native Gifted Chat',
          description: `
            Fully featured React Native chat components.
          `,
          src: '',
          url: 'http://gifted.chat'
        }
      ],
      actions: [
        {
          label: 'Food Logging',
          url: '/projects/foodlogging',
          in: true
        },
        {
          label: 'Weight',
          url: '/projects/weight',
          in: true
        }
      ]
    }
  }
}
</script>
