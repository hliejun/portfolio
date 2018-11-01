<template>
  <div class='page experience'>
    <Jumbotron :name='jumbotron.name' :title='jumbotron.title' :subtitle='jumbotron.subtitle' :src='jumbotron.src' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start'
        intersection-ratios='.4'
        layout='nodisplay'>
      </amp-position-observer>
      <div class='page__container'>
        <div v-for='article in articles' v-bind:class="['section', article.name]" :key='article.name'>
          <div class='section__left'>
            <div class='timeline__line' />
            <div class='timeline__date'>
              {{article.date}}
            </div>
            <amp-img
              class='timeline__image'
              v-bind:src='article.avatar'
              height='1'
              width='1' />
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
            <Gallery
              :name='article.name'
              :mainImage='article.mainImage'
              :suppImages='article.suppImages' />
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
        title: 'logs',
        subtitle: 'employment, partnership history and work experiences',
        src: '/vectors/logs.svg'
      },
      articles: [
        {
          name: 'nodeflair',
          date: 'AUG 18',
          avatar: '',
          mainImage: {
            src: ''
          },
          suppImages: [
            { src: '' },
            { src: '' },
            { src: '' },
            { src: '' }
          ],
          title: 'NodeFlair',
          subtitle: 'Migration to React on Rails and Mobile First Design',
          tags: ['WEB', 'RESPONSIVE', 'UI/UX'],
          text: `
            <p>
              <b>Lorem Ipsum</b><br>
              <u>Hello</u> <i>World</i><br>
            </p>
            <p>
              <b>Ipsum Lorem</b><br>
              <u>Goodbye</u> <i>World</i><br>
            </p>
          `,
          links: [
            { src: '', label: 'Read More', url: '' },
            { src: '', label: 'Visit NodeFlair', url: 'http://www.nodeflair.com/' },
            { src: '', label: 'React Chat on GitHub', url: 'https://hliejun.github.io/react-chat/' }
          ]
        },
        {
          name: 'urbanzoom',
          date: 'JUN 18',
          avatar: '',
          mainImage: {
            src: ''
          },
          suppImages: [
            { src: '' },
            { src: '' },
            { src: '' },
            { src: '' }
          ],
          title: 'UrbanZoom',
          subtitle: 'Property Valuation Google Assistant and Twilio Voice Service',
          tags: ['VOICE', 'CHATBOT', 'TELEPHONY', 'ASSISTANT'],
          text: `
            <p>
              <b>Lorem Ipsum</b><br>
              <u>Hello</u> <i>World</i><br>
            </p>
            <p>
              <b>Ipsum Lorem</b><br>
              <u>Goodbye</u> <i>World</i><br>
            </p>
          `,
          links: [
            { src: '', label: 'Read More', url: '' },
            { src: '', label: 'Visit UrbanZoom', url: 'https://www.urbanzoom.com/' },
            { src: '', label: 'Featured on Business Times', url: 'http://bt.sg/4ZPg' },
            { src: '', label: 'Try it on Google Assistant', url: 'https://assistant.google.com/services/a/uid/0000002516830acd?hl=en&source=web' }
          ]
        },
        {
          name: 'littlelives',
          date: 'MAR 18',
          avatar: '',
          mainImage: {
            src: ''
          },
          suppImages: [
            { src: '' },
            { src: '' },
            { src: '' },
            { src: '' }
          ],
          title: 'Little Lives',
          subtitle: 'Face Recognition iOS Attendance Application for Pre-Schools',
          tags: ['IOS', 'NATIVE', 'FACE RECOGNITION', 'LIVE DETECTION'],
          text: `
            <p>
              <b>Lorem Ipsum</b><br>
              <u>Hello</u> <i>World</i><br>
            </p>
            <p>
              <b>Ipsum Lorem</b><br>
              <u>Goodbye</u> <i>World</i><br>
            </p>
          `,
          links: [
            { src: '', label: 'Read More', url: '' },
            { src: '', label: 'Visit LittleLives', url: 'https://www.littlelives.com/' }
          ]
        },
        {
          name: 'shopback',
          date: 'DEC 16',
          avatar: '',
          mainImage: {
            src: ''
          },
          suppImages: [
            { src: '' },
            { src: '' },
            { src: '' },
            { src: '' }
          ],
          title: 'ShopBack',
          subtitle: 'Adding Features to Content Management System',
          tags: ['CONTENT MANAGEMENT', 'WEB', 'RESPONSIVE'],
          text: `
            <p>
              <b>Lorem Ipsum</b><br>
              <u>Hello</u> <i>World</i><br>
            </p>
            <p>
              <b>Ipsum Lorem</b><br>
              <u>Goodbye</u> <i>World</i><br>
            </p>
          `,
          links: [
            { src: '', label: 'Read More', url: '' },
            { src: '', label: 'Visit ShopBack', url: 'https://www.shopback.sg/' }
          ]
        },
        {
          name: 'dso',
          date: 'MAY 15',
          avatar: '',
          mainImage: {
            src: ''
          },
          suppImages: [
            { src: '' },
            { src: '' },
            { src: '' },
            { src: '' }
          ],
          title: 'Defence Science Organisation',
          subtitle: 'Object and Blob Tracking with Multi-Threading and Multi-Processing Optimisations',
          tags: ['IMAGE PROCESSING', 'OPTIMISATIONS', 'RESEARCH'],
          text: `
            <p>
              <b>Lorem Ipsum</b><br>
              <u>Hello</u> <i>World</i><br>
            </p>
            <p>
              <b>Ipsum Lorem</b><br>
              <u>Goodbye</u> <i>World</i><br>
            </p>
          `,
          links: [
            { src: '', label: 'Read More', url: '' },
            { src: '', label: 'Visit DSO', url: 'https://www.dso.org.sg/' }
          ]
        },
        {
          name: 'saf',
          date: 'JUN 13',
          avatar: '',
          mainImage: {
            src: ''
          },
          suppImages: [
            { src: '' },
            { src: '' },
            { src: '' },
            { src: '' }
          ],
          title: 'Singapore Armed Forces',
          subtitle: 'Battalion Manpower, Transport and Discipline Administration',
          tags: ['ARMY', 'STAFF', 'ADMINISTRATION'],
          text: `
            <p>
              <b>Lorem Ipsum</b><br>
              <u>Hello</u> <i>World</i><br>
            </p>
            <p>
              <b>Ipsum Lorem</b><br>
              <u>Goodbye</u> <i>World</i><br>
            </p>
          `,
          links: [
            { src: '', label: 'Read More', url: '' },
            { src: '', label: 'Visit MINDEF', url: 'https://www.mindef.gov.sg/web/portal/mindef/home' }
          ]
        }
      ]
    }
  }
}
</script>
