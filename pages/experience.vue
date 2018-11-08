<template>
  <div class='page experience'>
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.4' layout='nodisplay' />
      <div class='page__container'>
        <div v-for='article in articles' v-bind:class="['section', article.name]" :key='article.name'>
          <div class='section__left'>
            <div class='timeline__line' />
            <div class='timeline__date'>
              {{article.date}}
            </div>
            <amp-img class='timeline__image' v-bind:src='article.avatar' height='1' width='1' />
          </div>
          <div class='section__right'>
            <ArticleCard
              :name='article.name'
              :title='article.title'
              :subtitle='article.subtitle'
              :tags='article.tags'
              :text='article.text'
              :links='article.links'
              :notes='article.notes' />
            <Gallery :name='article.name' :mainImage='article.mainImage' :suppImages='article.suppImages' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'
import Gallery from '../components/Gallery'
import ArticleCard from '../components/ArticleCard'

export default {
  components: {
    Jumbotron,
    Gallery,
    ArticleCard
  },
  data () {
    return {
      jumbotron: {
        name: 'logs',
        title: './logs',
        subtitle: 'employment, partnership history and work experiences',
        actions: [
          {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/hliejun'
          },
          {
            label: 'Résumé',
            url: '/documents/resume.pdf'
          }
        ],
        // src: '/vectors/jumbotron/logs.svg'
      },
      articles: [
        {
          name: 'nodeflair',
          date: 'AUG 18',
          avatar: '/vectors/logos/nodeflair.svg',
          mainImage: {
            video: '/videos/article-nodeflair-01.mp4',
            webm: '/videos/article-nodeflair-01.webm'
          },
          suppImages: [
            {
              video: '/videos/article-nodeflair-02.mp4',
              webm: '/videos/article-nodeflair-02.webm'
            },
            {
              video: '/videos/article-nodeflair-03.mp4',
              webm: '/videos/article-nodeflair-03.webm'
            },
            {
              video: '/videos/article-nodeflair-04.mp4',
              webm: '/videos/article-nodeflair-04.webm'
            },
            {
              video: '/videos/article-nodeflair-05.mp4',
              webm: '/videos/article-nodeflair-05.webm'
            }
          ],
          title: 'NodeFlair',
          subtitle: 'Migration to React on Rails and Mobile First Design',
          tags: ['WEB', 'RESPONSIVE', 'UI/UX'],
          text: `
            <p>
              <b>About The Job</b><br>
              I helped NodeFlair to bring mobile responsiveness to some features
              on their web application. Apart from designing and implementing
              responsive layouts, the project also involves transitioning
              from a plain Ruby Rails environment to a React on Rails architecture
              and moving from a monolithic application to modular microservices.
            </p>
          `,
          links: [
            {
              src: '/vectors/experience/read.svg',
              label: 'Read More',
              url: '/companies/nodeflair', in: true
            },
            {
              src: '/vectors/experience/visit.svg',
              label: 'Visit NodeFlair',
              url: 'http://www.nodeflair.com/'
            },
            {
              src: '/vectors/experience/repo.svg',
              label: 'React Chat on GitHub',
              url: 'https://hliejun.github.io/react-chat/'
            }
          ]
        },
        {
          name: 'urbanzoom',
          date: 'JUN 18',
          avatar: '/vectors/logos/urbanzoom.svg',
          mainImage: {
            video: '/videos/article-urbanzoom-01.mp4',
            webm: '/videos/article-urbanzoom-01.webm'
          },
          suppImages: [],
          title: 'UrbanZoom',
          subtitle: 'Property Valuation Google Assistant and Twilio Voice Service',
          tags: ['VOICE', 'CHATBOT', 'TELEPHONY', 'ASSISTANT'],
          text: `
            <p>
              <b>About The Job</b><br>
              I built a Google Assistant action for UrbanZoom using the Dialogflow API.
              The project scope includes designing the context flow for the property
              valuation query, as well as ensuring the fidelity of commands, both voice
              and textual, in a Singaporean context. After implementing the Action, I
              hooked up the Dialogflow agent with a Twilio Voice service, providing
              access to the agent through a phone call.
            </p>
          `,
          links: [
            {
              src: '/vectors/experience/read.svg',
              label: 'Read More',
              url: '/companies/urbanzoom',
              in: true
            },
            {
              src: '/vectors/experience/visit.svg',
              label: 'Visit UrbanZoom',
              url: 'https://www.urbanzoom.com/'
            },
            {
              src: '/vectors/experience/feature.svg',
              label: 'Featured on Business Times',
              url: 'http://bt.sg/4ZPg'
            },
            {
              src: '/vectors/experience/try.svg',
              label: 'Try it on Google Assistant',
              url: 'https://assistant.google.com/services/a/uid/0000002516830acd?hl=en&source=web'
            }
          ]
        },
        {
          name: 'littlelives',
          date: 'MAR 18',
          avatar: '/vectors/logos/littlelives.svg',
          mainImage: {
            src: '/images/experience/article-littlelives-01.png'
          },
          suppImages: [
            { src: '/images/experience/article-littlelives-02.png' },
            { src: '/images/experience/article-littlelives-03.png' },
            { src: '/images/experience/article-littlelives-04.png' },
            {
              video: '/videos/article-littlelives-05.mp4',
              webm: '/videos/article-littlelives-05.webm'
            }
          ],
          title: 'Little Lives',
          subtitle: 'Face Recognition iOS Attendance Application for Pre-Schools',
          tags: ['IOS', 'NATIVE', 'FACE RECOGNITION', 'LIVE DETECTION'],
          text: `
          <p>
            <b>About The Project</b><br>
            As part of the NUS CS3217 module, my team and I partnered with Little Lives
            and helped them with face recognition functionalities on their iOS check-in
            application for pre-school children. The application is written in Swift and
            adopted the VIPER design pattern. We also leveraged on emotion and face
            recognition capabilities of the Azure Face API, as well as face and object
            detection using the iOS Vision API.
          </p>
          `,
          links: [
            {
              src: '/vectors/experience/read.svg',
              label: 'Read More',
              url: '/companies/littlelives',
              in: true
            },
            {
              src: '/vectors/experience/visit.svg',
              label: 'Visit LittleLives',
              url: 'https://www.littlelives.com/'
            }
          ]
        },
        {
          name: 'shopback',
          date: 'DEC 16',
          avatar: '/vectors/logos/shopback.svg',
          mainImage: {
            src: '/images/experience/article-shopback-01.png'
          },
          suppImages: [
            { src: '/images/experience/article-shopback-02.png' },
            { src: '/images/experience/article-shopback-03.png' },
            { src: '/images/experience/article-shopback-04.png' },
            { src: '/images/experience/article-shopback-05.png' }
          ],
          title: 'ShopBack',
          subtitle: 'Adding Features to Content Management System',
          tags: ['CONTENT MANAGEMENT', 'WEB', 'RESPONSIVE'],
          text: `
            <p>
              <b>About The Internship</b><br>
              During my internship at ShopBack, I was tasked with implementing multiple
              features on their ReactJS-based content management system. I created a CSV
              upload and cashback validation platform, a timeline view for shopping trips,
              agenda view for cashback rates, and more. I also helped with liberating snacks
              at their well-stocked pantry as one of the weekly Chief Welfare Officers.
            </p>
          `,
          links: [
            {
              src: '/vectors/experience/read.svg',
              label: 'Read More',
              url: '/companies/shopback',
              in: true
            },
            {
              src: '/vectors/experience/visit.svg',
              label: 'Visit ShopBack',
              url: 'https://www.shopback.sg/'
            }
          ]
        },
        {
          name: 'dso',
          date: 'MAY 15',
          avatar: '/vectors/logos/dso.svg',
          mainImage: {},
          suppImages: [],
          title: 'Defence Science Organisation',
          subtitle: 'Object and Blob Tracking with Multi-Threading and Multi-Processing Optimisations',
          tags: ['IMAGE PROCESSING', 'OPTIMISATIONS', 'RESEARCH'],
          text: `
            <p>
              <b>About The Internship</b><br>
              I interned in the Emerging Systems department at DSO, where I fiddled with
              image processing toolkits such as the OpenCV library. I was particularly
              vested in object and blob tracking strategies with multi-threading
              and multi-processing optimisations.
            </p>
          `,
          links: [
            {
              src: '/vectors/experience/read.svg',
              label: 'Read More',
              url: '/companies/dso',
              in: true
            },
            {
              src: '/vectors/experience/visit.svg',
              label: 'Visit DSO',
              url: 'https://www.dso.org.sg/'
            }
          ]
        },
        {
          name: 'saf',
          date: 'JUN 13',
          avatar: '/images/logos/saf.png',
          mainImage: {},
          suppImages: [],
          title: 'Singapore Armed Forces',
          subtitle: 'Battalion Manpower, Transport and Discipline Administration',
          tags: ['ARMY', 'STAFF', 'ADMINISTRATION'],
          text: `
          <p>
            <b>About The Service</b><br>
            I was a Deputy Manpower Officer in my service at the 1st SAF Transport Battalion,
            overseeing personnel matters that involves induction training, postings,
            disciplinary and legal actions, vehicular administration, and more.
          </p>
          `,
          links: [
            {
              src: '/vectors/experience/read.svg',
              label: 'Read More',
              url: '/companies/saf',
              in: true
            },
            {
              src: '/vectors/experience/visit.svg',
              label: 'Visit MINDEF',
              url: 'https://www.mindef.gov.sg/web/portal/mindef/home'
            }
          ]
        }
      ]
    }
  }
}
</script>
