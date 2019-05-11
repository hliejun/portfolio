<template>
  <div class="page littlelives project">
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
        intersection-ratios=".1"
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
      <HTMLSection name="design" label="DESIGN" :items="design" />
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
      title: 'Little Lives Check-In - hliejun/projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Face Check-In features built into Little Check-In iOS application.'
        },
        {
          property: 'og:title',
          content: 'Little Lives Check-In - hliejun/projects'
        },
        {
          property: 'og:description',
          content:
            'Face Check-In features built into Little Check-In iOS application.'
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content: 'https://hliejun.github.io/images/meta/preview.png'
        }
      ]
    }
  },
  data() {
    return {
      jumbotron: {
        title: 'Little Lives Check-In',
        subtitle:
          'Face Check-In features built into Little Check-In iOS application.',
        actions: [
          {
            label: 'About Little Lives',
            url: 'https://www.littlelives.com'
          }
        ]
      },
      mockup: {
        webp: '/images/projects/littlelives-1.webp',
        src: '/images/projects/littlelives-1.jpg',
        orientation: 'portrait',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'Swift' },
            { label: 'Alamofire' },
            { label: 'Vision' },
            { label: 'Azure Face' },
            { label: 'CoreData' },
            { label: 'SnapKit' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            {
              label: 'XCode'
            },
            {
              label: 'Jazzy'
            },
            {
              label: 'SwiftLint'
            }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [{ label: 'iOS' }]
        }
      ],
      carpets: {
        about: '/images/projects/littlelives-2.webp',
        aboutFallback: '/images/projects/littlelives-2.jpg'
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            Little Lives Check-In is an iOS application optimised for
            iPads and used to perform check-in on re-schoolers by taking
            individual or group photos. The application uses face recognition
            technology to register attendance for individuals in the photos
            and sends the check-in photo along with other details to parents.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            This application was built with the goal to speed up the check-in
            process of pre-schoolers. The face recognition solution was explored
            as it not only could boost efficiency, but also provide entertainment
            value and novel technical branding to the process. Detecting additional
            information such as emotions of children at check-in could prove useful
            to parents. As part of our software engineering module, it was also an
            opportunity to hone our software architecture design skills.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            The main issue we faced was speed and performance of the face-tracking,
            especially on older iPads. Since visual computations tend to be expensive,
            the lack of processing power on old tablet models would result in sluggishness
            of the interface and overheating, especially when processing multiple faces
            simultaneously. We moved heavy processes to the cloud by using Azure Face API
            for emotion and face detection, as well as face recognition, and performed
            object tracking offline periodically using the iOS Vision API.<br>
            <br>
            Another issue would be the recognition accuracy for young children. We
            filtered, normalised and tagged a good amount of photos of participating
            pre-schoolers to train the model on Azure Face. We also proposed that newly
            taken and normalised profiles should be used in training and updating the model
            to progressively keep up with the children's growth.<br>
            <br>
            A key concern would be to track faces of active children who tend to move
            about in the frame. We improved our tracking fidelity by toggling between
            authoritative face detection using Azure Face API and auxillary object tracking
            on Vision API. With object tracking being less computation-intensive, we could
            afford higher refresh rates and more reliable tracking with relatively lesser
            performance trade-off.
          `
        }
      ],
      design: [
        {
          name: 'architecture',
          title: 'ARCHITECTURE',
          webp: '/images/projects/littlelives-3.webp',
          src: '/images/projects/littlelives-3.jpg',
          text: `
            Little Lives Check-In was written in a VIPER (Views, Interactors, Presenters,
            Entities, Router) architecture, along with Data Access Objects, Service Workers
            and Adapters for access to both networked and local services, and database
            resources. The design ultimately geared towards an extensible application
            that could be integrated with other third party data storage, recognition
            services and maintained modularity of front-end components.
          `
        }
      ],
      features: [
        {
          name: 'group',
          title: 'MULTI-FACE RECOGNITION',
          webp: '/images/projects/littlelives-4.webp',
          src: '/images/projects/littlelives-4.jpg',
          text: `
            Mutiple faces can be detected and recognised in a single picture.
          `
        },
        {
          name: 'tracking',
          title: 'LIVE FACE TRACKING',
          video: '/videos/project-littlelives-01.mp4',
          webm: '/videos/project-littlelives-01.webm',
          text: `
            Faces will be boxed and tracked when previewing before taking the photo.
          `
        },
        {
          name: 'emotion',
          title: 'EMOTION DETECTION',
          webp: '/images/projects/littlelives-5.webp',
          src: '/images/projects/littlelives-5.jpg',
          text: `
            All faces will be tagged with their detected emotions if network is available.
          `
        },
        {
          name: 'manual',
          title: 'MANUAL SEARCH & TAG',
          webp: '/images/projects/littlelives-6.webp',
          src: '/images/projects/littlelives-6.jpg',
          text: `
            In the occasion that a face is tagged wrongly or has no valid tags,
            you may manually search and tag the face using the school registry.
          `
        },
        {
          name: 'access',
          title: 'ACCESS CONTROL',
          webp: '/images/projects/littlelives-7.webp',
          src: '/images/projects/littlelives-7.jpg',
          text: `
            Passwords can be set to lock certain views such as the check-in view
            from unauthorised access to the check-in feature.
          `
        },
        {
          name: 'nda',
          text: `
            <i>
            NOTE:<br>
            Due to non-disclosure agreement, the screengrabs did not feature children at the pre-schools.
            Instead, we used stock photos and faces of celebrities, politicians and myself.
            </i>
          `
        }
      ],
      team: [
        {
          label: 'Abel Lim',
          description: `
            Abel was responsible for writing data access objects, offline face
            service and face tracking.
          `,
          src: '/images/profiles/abel.jpg',
          url: 'https://github.com/abellimz'
        },
        {
          label: 'Joel Lim',
          description: `
            Joel wrote the access control module and face rectangles logic.
          `,
          src: '/images/profiles/joel.jpg',
          url: 'https://aljorhythm.github.io'
        },
        {
          label: 'Nicholas Lui',
          description: `
            Nicholas was in-charged of writing network services, Azure Face
            service and data entities.
          `,
          src: '/images/profiles/nicholas.jpg',
          url: 'https://github.com/nicholasluimy'
        },
        {
          label: 'Huang Lie Jun',
          description: `
            I wrote the views, interactors, presenters and controllers, linking
            the UI with services and data layers.
          `,
          src: '/images/profiles/liejun.jpg',
          url: 'https://github.com/hliejun'
        }
      ],
      references: [
        {
          label: 'VIPER Design Pattern',
          description: `
            Guide to the VIPER design principles, structure and implementations.
          `,
          src: '/images/links/medium.jpg',
          url:
            'https://medium.com/@smalam119/viper-design-pattern-for-ios-application-development-7a9703902af6'
        },
        {
          label: 'Azure Face API',
          description: `
            Instructions to using Azure Face for emotion detection, face detection
            and face recognition.
          `,
          src: '/images/links/azure.jpg',
          url:
            'https://docs.microsoft.com/en-us/azure/cognitive-services/face/overview'
        },
        {
          label: 'AVCapture and Vision API',
          description: `
            Details on how to process and link the camera frame inputs with detection
            and tracking using Vision.
          `,
          src: '/images/links/apple.jpg',
          url:
            'https://developer.apple.com/documentation/vision/recognizing_objects_in_live_capture'
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
