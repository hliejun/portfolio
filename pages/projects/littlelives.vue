<template>
  <div class='page littlelives project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.1' layout='nodisplay' />

      <!-- Screenshots and videos of flow -->

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
      <div class='project__section design' v-if='design.length'>
        <div class='section__title'>DESIGN</div>
        <div v-bind:class="['section__items', section.name]" v-for='section in design'>
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
      <div class='project__section team' v-if='team.length'>
        <div class='section__title'>TEAM</div>
        <div class='section__items'>
          <div class='section__row'>
            <div class='section__item' v-for='member in team'>
              <amp-img class='section__item-icon' v-if='member.src' v-bind:src='member.src' height='1' width='1' />
              <span class='section__item-label' v-if='member.name'>{{member.name}}</span>
              <span class='section__item-description' v-if='member.description'>{{member.description}}</span>
            </div>
          </div>
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
        title: 'Little Lives Check-In',
        subtitle: 'Face Check-In features built into Little Check-In iOS application, a group project with Little Lives.',
        actions: [
          {
            label: 'About Little Lives',
            url: 'https://www.littlelives.com'
          }
        ]
      },
      mockup: {
        src: '/images/projects/littlelives-1.png',
        orientation: 'portrait',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          items: [
            {
              src: '',
              label: 'Swift',
              description: ''
            },
            {
              src: '',
              label: 'Alamofire',
              description: ''
            },
            {
              src: '',
              label: 'Vision',
              description: ''
            },
            {
              src: '',
              label: 'Azure Face',
              description: ''
            },
            {
              src: '',
              label: 'CoreData',
              description: ''
            },
            {
              src: '',
              label: 'SnapKit',
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
              label: 'XCode',
              description: ''
            },
            {
              src: '',
              label: 'Jazzy',
              description: ''
            },
            {
              src: '',
              label: 'SwiftLint',
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
              label: 'iOS',
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
            This application was built with the goal to speed up the check-in process of pre-schoolers.
            The face recognition solution was explored as it not only boosts efficiency, but also
            provides entertainment value and novel technical branding to the process. Detecting additional
            information such as emotions of children at check-in could prove useful to parents.
            As part of our software engineering module, it was also an opportunity to hone our software
            architecture design skills.
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            Little Lives Check-In is an iOS application optimised for iPads and used to perform check-in on
            pre-schoolers by taking individual or group photos. The application uses face recognition technology
            to register attendance for individuals in the photos, and sends the check-in photo along with details
            to parents.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            The main issue we faced was speed and performance of the face-tracking, especially on older iPads.
            Since visual computations tend to be expensive, the lack of processing power on old tablet models would
            result in sluggishness of the interface and overheating, especially when processing multiple faces
            simultaneously. We moved heavy processes to the cloud by using Azure Face API for emotion and face
            detection, as well as face recognition, and performed object tracking offline periodically using
            the iOS Vision API.<br>
            <br>
            Another issue would be the recognition accuracy for young children. We filtered, normalised and tagged
            a good amount of photos of participating pre-schoolers to train the model on Azure Face. We also
            proposed that newly taken and normalised profiles should be used in training and updating the model to
            keep up with the children's growth.<br>
            <br>
            A key concern would be to track faces of active children who tend to move about in the frame. We improved
            our tracking fidelity by toggling between authoritative face detection using Azure Face API and accessory
            object tracking on Vision API. With object tracking being less computation-intensive, we could afford higher
            refresh rates and more reliable tracking with relatively lesser performance trade-off.
          `
        },
      ],
      design: [
        {
          name: 'architecture',
          title: 'ARCHITECTURE',
          src: '',
          text: `
            Little Lives Check-In was written in a VIPER (Views, Interactors, Presenters, Entities, Router)
            architecture, along with Data Access Objects, Service Workers and Adapters for access to both
            networked and local services, and database resources. The design ultimately geared towards an
            extensible application that could be integrated with other third party data storage and recognition
            services and maintained modularity of front-end components.
          `
        }
      ],
      features: [
        {
          name: 'group',
          title: 'MULTI-FACE RECOGNITION',
          src: '',
          text: `
            Mutiple faces can be detected and recognised in a single picture.
          `
        },
        {
          name: 'tracking',
          title: 'LIVE FACE TRACKING',
          src: '',
          text: `
            Faces will be boxed and tracked when previewing before taking the photo.
          `
        },
        {
          name: 'emotion',
          title: 'EMOTION DETECTION',
          src: '',
          text: `
            All faces will be tagged with their detected emotions if network is available.
          `
        },
        {
          name: 'manual',
          title: 'MANUAL SEARCH AND TAG',
          src: '',
          text: `
            In the occasion that a face is tagged wrongly or has no valid tags, you may manually search
            and tag the face using the school registry.
          `
        },
        {
          name: 'access',
          title: 'ACCESS CONTROL',
          src: '',
          text: `
            Passwords can be set to lock certain views such as the check-in view from unauthorised access
            to the check-in feature.
          `
        }
      ],
      team: [
        {
          src: '',
          name: 'Abel Lim',
          description: `
            Abel was responsible for writing data access objects, offline face service and face tracking.
          `
        },
        {
          src: '',
          name: 'Joel Lim',
          description: `
            Joel wrote the access control module and face rectangles logic.
          `
        },
        {
          src: '',
          name: 'Nicholas Lui',
          description: `
            Nicholas was in-charged of writing network services, azure face service and data entities.
          `
        },
        {
          src: '',
          name: 'Huang Lie Jun',
          description: `
            I wrote the views, interactors, presenters and controllers, linking the UI with
            services and data layers.
          `
        }
      ],
      references: [
        {
          src: '',
          label: 'VIPER Design Pattern',
          description: `
            Guide to the VIPER design principles, structure and implementations.
          `
        },
        {
          src: '',
          label: 'Azure Face API',
          description: `
            Instructions to using Azure Face for emotion detection, face detection and face recognition.
          `
        },
        {
          src: '',
          label: 'AVCapture and Vision API',
          description: `
            Details on how to process and link the camera frame inputs with detection and tracking using Vision.
          `
        }
      ],
      actions: [
        {
          label: 'UrbanZoom',
          url: '/projects/urbanzoom',
          in: true
        },
        {
          label: 'Pokémania',
          url: '/projects/pokemania',
          in: true
        }
      ]
    }
  }
}
</script>
