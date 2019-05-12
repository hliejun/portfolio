<template>
  <div class="page bubble project">
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
      <HTMLSection name="features" label="FEATURES" :items="features" />
      <LinksSection name="team" label="TEAM" :items="team" />
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
      title: 'Bubble - hliejun/projects',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Bubble Chat - hliejun/projects'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Problem-solving and stress management anonymous chat application.'
        },
        { property: 'og:title', content: 'Bubble Chat - hliejun/projects' },
        {
          property: 'og:description',
          content:
            'Problem-solving and stress management anonymous chat application.'
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content: 'https://hliejun.github.io/images/previews/bubble.jpg'
        }
      ],
      link: [{ rel: 'canonical', href: `${process.env.HOST}/projects/bubble` }]
    }
  },
  data() {
    return {
      jumbotron: {
        title: 'Bubble Chat',
        subtitle:
          'Problem-solving and stress management anonymous chat application.',
        actions: [
          {
            label: 'Project Repo',
            url: 'https://github.com/CS3216-Bubble'
          }
        ]
      },
      mockup: {
        webp: '/images/projects/bubble-1.webp',
        src: '/images/projects/bubble-1.jpg',
        orientation: 'portrait',
        type: 'narrow'
      },
      carpets: {
        about: '/images/projects/bubble-2.webp',
        aboutFallback: '/images/projects/bubble-2.jpg'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'React Native' },
            { label: 'ReactJS' },
            { label: 'Redux' },
            { label: 'socket.io' },
            { label: 'Express' },
            { label: 'SQLite' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            { label: 'ESLint' },
            { label: 'NPM' },
            { label: 'Marvel' },
            { label: 'Photoshop' }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [
            { label: 'Nginx' },
            { label: 'Amazon EC2' },
            { label: 'Android' },
            { label: 'iOS' }
          ]
        }
      ],
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
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
          text: `
            The greatest challenge in this project was to manage anonymity in a chat.
            From ensuring data privacy to meeting the requirements of the application
            markets, we learnt the complexities involved in publishing an anonymous
            chat application, such as the need for a flagging and reporting system and
            terms of use that polices the anonymity. While we lack the time and resources
            to provide these facilities and eventually failed to publish on the iOS App
            Store, we did succeed in releasing on Play Store and web in the module term.
          `
        }
      ],
      features: [
        {
          name: 'anonymity',
          title: 'ANONYMITY',
          webp: '/images/projects/bubble-3.webp',
          src: '/images/projects/bubble-3.jpg',
          text: `
            Chat anonymously with strangers in topical chat rooms. No sign-in or registration
            is required. Pseudo-identity are persisted through socket sessions, cache and
            Redux store.
          `
        },
        {
          name: 'realtime',
          title: 'REAL-TIME',
          webp: '/images/projects/bubble-4.webp',
          src: '/images/projects/bubble-4.jpg',
          text: `
            Chats are fired in real-time through socket events along with mobile application
            notifications. There is also an option to turn off notifications for individual
            rooms.
          `
        },
        {
          name: 'categories',
          title: 'CATEGORY TAGGING',
          webp: '/images/projects/bubble-5.webp',
          src: '/images/projects/bubble-5.jpg',
          text: `
            Chat rooms can be labelled or tagged with categorised tags. These tags
            are colour-coded and can be used to filter conversations.
          `
        },
        {
          name: 'filter',
          title: 'SEARCH & FILTER',
          webp: '/images/projects/bubble-6.webp',
          src: '/images/projects/bubble-6.jpg',
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
          src: '/images/profiles/michelle.jpg',
          url: 'https://github.com/michelletan'
        },
        {
          label: 'Ng Zhi An',
          description: `
            Zhi An handled the backend Express application, database, socket events and
            DevOps.
          `,
          src: '/images/profiles/zhian.jpg',
          url: 'https://www.ngzhian.com'
        },
        {
          label: 'Nicholette Li',
          description: `
            Nicholette worked on the web chat interface, content creation and marketing.
          `,
          src: '/images/profiles/nicholette.jpg',
          url: 'https://github.com/nicholette'
        },
        {
          label: 'Huang Lie Jun',
          description: `
            I wrote the React Native application with Michelle, socket client for
            front-end and Redux stores.
          `,
          src: '/images/profiles/liejun.jpg',
          url: 'https://github.com/hliejun'
        }
      ],
      references: [
        {
          label: 'React Native Documentation',
          description: `
            Official documentation and tutorials for React Native.
          `,
          src: '/images/links/reactnative.jpg',
          url: 'https://facebook.github.io/react-native/docs/getting-started'
        },
        {
          label: 'React Native with Redux',
          description: `
            Tutorial about using Redux with React Native on Alligator.io.
          `,
          src: '/images/links/alligatorio.jpg',
          url: 'https://alligator.io/react/react-native-redux'
        },
        {
          label: 'socket.io with React Native',
          description: `
            Tutorial about using socket.io with React Native for a chat application on Hackernoon.
          `,
          src: '/images/links/hackernoon.jpg',
          url:
            'https://hackernoon.com/a-simple-messaging-app-with-react-native-and-socket-io-e1cae3df7bda'
        },
        {
          label: 'React Native Gifted Chat',
          description: `
            Fully featured React Native chat components by Farid Safi on GitHub.
          `,
          src: '/images/links/github.jpg',
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
