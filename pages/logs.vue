<template>
  <div class='page logs'>
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='background-waves'>
      <div class='background-wave' />
      <div class='background-wave' />
      <div class='background-wave' />
    </div>
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.4' layout='nodisplay' />
      <div class='page__container'>
        <div v-for='article in articles' :key='article.name' v-bind:class="['section', article.name]">
          <div class='section__left'>
            <div class='timeline__line' />
            <div class='timeline__date'>
              {{article.date}}
            </div>
            <amp-img class='timeline__image' v-bind:src='article.avatar' height='1' width='1' />
          </div>
          <div class='section__right'>
            <ArticleCard
              :links='article.links'
              :name='article.name'
              :notes='article.notes'
              :subtitle='article.subtitle'
              :tags='article.tags'
              :text='article.text'
              :title='article.title' />
            <Gallery :name='article.name' :mainImage='article.mainImage' :suppImages='article.suppImages' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard'
import Gallery from '../components/Gallery'
import Jumbotron from '../components/Jumbotron'

export default {
  components: {
    ArticleCard,
    Gallery,
    Jumbotron
  },
  head () {
    return {
      title: 'Work Experiences - hliejun',
      meta: [
        { hid: 'description', name: 'description', content: "A brief summary of Lie Jun's employment history." },
        { property: 'og:title', content: 'Work Experiences - hliejun' },
        { property: 'og:description', content: "A brief summary of Lie Jun's employment history." },
        { property: 'og:url', content: 'hliejun.github.io' },
        { property: 'og:image', content: 'https://hliejun.github.io/images/meta/preview.png' }
      ]
    }
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
            label: 'Curriculum Vitæ',
            url: '/documents/cv_hliejun.pdf'
          }
        ]
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
              responsive layouts, the project also involved transitioning
              from a plain Ruby Rails environment to a React on Rails architecture.
            </p>
          `,
          links: [
            {
              in: true,
              label: 'Read More',
              src: '/vectors/logs/read.svg',
              url: '/companies/nodeflair'
            },
            {
              label: 'Visit NodeFlair',
              src: '/vectors/logs/visit.svg',
              url: 'http://www.nodeflair.com'
            },
            {
              label: 'React Chat on GitHub',
              src: '/vectors/logs/repo.svg',
              url: 'https://hliejun.github.io/react-chat'
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
              The project scope included designing the context flow for the property
              valuation query, as well as ensuring the fidelity of commands, both voice
              and textual, in a Singaporean context. After implementing the Action, I
              hooked up the Dialogflow agent with a Twilio Voice service, providing
              access to the agent through a phone call.
            </p>
          `,
          links: [
            {
              src: '/vectors/logs/read.svg',
              label: 'Read More',
              url: '/companies/urbanzoom',
              in: true
            },
            {
              src: '/vectors/logs/visit.svg',
              label: 'Visit UrbanZoom',
              url: 'https://www.urbanzoom.com'
            },
            {
              src: '/vectors/logs/feature.svg',
              label: 'Featured on Business Times',
              url: 'http://bt.sg/4ZPg'
            },
            {
              src: '/vectors/logs/try.svg',
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
            src: '/images/logs/article-littlelives-01.jpg'
          },
          suppImages: [
            {
              src: '/images/logs/article-littlelives-02.jpg'
            },
            {
              src: '/images/logs/article-littlelives-03.jpg'
            },
            {
              src: '/images/logs/article-littlelives-04.jpg'
            },
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
            application for pre-school children. The application was written in Swift and
            adopted the VIPER design pattern. We also leveraged on emotion and face
            recognition capabilities of the Azure Face API, as well as face and object
            detection using the iOS Vision API.
          </p>
          `,
          links: [
            {
              in: true,
              label: 'Read More',
              src: '/vectors/logs/read.svg',
              url: '/companies/littlelives'
            },
            {
              label: 'Visit LittleLives',
              src: '/vectors/logs/visit.svg',
              url: 'https://www.littlelives.com'
            }
          ]
        },
        {
          name: 'shopback',
          date: 'DEC 16',
          avatar: '/vectors/logos/shopback.svg',
          mainImage: {
            src: '/images/logs/article-shopback-01.jpg'
          },
          suppImages: [
            {
              src: '/images/logs/article-shopback-02.jpg'
            },
            {
              src: '/images/logs/article-shopback-03.jpg'
            },
            {
              src: '/images/logs/article-shopback-04.jpg'
            },
            {
              src: '/images/logs/article-shopback-05.jpg'
            }
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
              in: true,
              label: 'Read More',
              src: '/vectors/logs/read.svg',
              url: '/companies/shopback'
            },
            {
              label: 'Visit ShopBack',
              src: '/vectors/logs/visit.svg',
              url: 'https://www.shopback.sg'
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
              in: true,
              label: 'Read More',
              src: '/vectors/logs/read.svg',
              url: '/companies/dso'
            },
            {
              label: 'Visit DSO',
              src: '/vectors/logs/visit.svg',
              url: 'https://www.dso.org.sg'
            }
          ]
        },
        {
          name: 'saf',
          date: 'JUN 13',
          avatar: '/images/logos/saf.jpg',
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
              in: true,
              label: 'Read More',
              src: '/vectors/logs/read.svg',
              url: '/companies/saf'
            },
            {
              label: 'Visit MINDEF',
              src: '/vectors/logs/visit.svg',
              url: 'https://www.mindef.gov.sg/web/portal/mindef/home'
            }
          ]
        }
      ]
    }
  }
}
</script>
