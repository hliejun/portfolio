<template>
  <div class="page whatsappwidgets project">
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
      <LinksSection name="references" label="REFERENCES" :items="references" />
      <ActionsSection name="actions" :items="actions" />
    </div>
  </div>
</template>

<script>
import ActionsSection from '../../components/ActionsSection'
import HTMLSection from '../../components/HTMLSection'
import Jumbotron from '../../components/Jumbotron'
import LinksSection from '../../components/LinksSection'
import Mockup from '../../components/Mockup'
import TagsSection from '../../components/TagsSection'

export default {
  components: {
    ActionsSection,
    HTMLSection,
    Jumbotron,
    LinksSection,
    Mockup,
    TagsSection
  },
  head() {
    return {
      title: 'Widgets for WhatsApp™ - hliejun/projects',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Widgets for WhatsApp™ - hliejun/projects'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Android widgets for WhatsApp™ users, designed for elderly.'
        },
        {
          property: 'og:title',
          content: 'Widgets for WhatsApp™ - hliejun/projects'
        },
        {
          property: 'og:description',
          content: 'Android widgets for WhatsApp™ users, designed for elderly.'
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content:
            'https://hliejun.github.io/images/previews/whatsapp-widgets.jpg'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `${process.env.HOST}/projects/whatsappwidgets`
        }
      ]
    }
  },
  data() {
    return {
      jumbotron: {
        title: 'Widgets for WhatsApp™',
        subtitle: 'Android widgets for WhatsApp™ users, designed for elderly.',
        actions: [
          {
            label: 'Play Store',
            url:
              'https://play.google.com/store/apps/details?id=com.hliejun.dev.widgets'
          },
          {
            label: 'Repo',
            url: 'https://github.com/hliejun/widgets-for-whatsapp'
          }
        ]
      },
      mockup: {
        webp: '/images/projects/whatsappwidgets-1.webp',
        src: '/images/projects/whatsappwidgets-1.jpg',
        orientation: 'portrait',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'Java' },
            { label: 'Android SDK' },
            { label: 'AppCompat' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [{ label: 'Android Studio' }, { label: 'Photoshop' }]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [{ label: 'Android' }]
        }
      ],
      carpets: {
        about: '/images/projects/whatsappwidgets-2.webp',
        aboutFallback: '/images/projects/whatsappwidgets-2.jpg'
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            Widgets for WhatsApp™ is an android widget application that helps
            WhatsApp™ users to access important contacts from their home
            screen in one-click. After running through configuration with
            a particular WhatsApp™ contact, users can make voice calls,
            video calls and access conversation directly from the widget.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            I started on this project with the goal to help non tech-savvy
            individuals and individuals with vision or coordination challenges
            to access WhatsApp™ features more conveniently. The project focused
            on making widgets recognisable to elderly and having voice and video
            call functions accessible in a single click.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            The challenge in this project was to work around the limitations
            in developing a widget as opposed to a typical activity. This
            included learning to work with RemoteViews staticly instead of
            accessing views directly.<br>
            <br>
            Another issue was to get used to invoking database queries using
            the content resolver and to make sense of the different data models
            used in saving contact data.<br>
            <br>
            It was as much as a challenge an opportunity to learn about application
            store optimizations to make the application more discoverable and
            accessible to the public.
          `
        }
      ],
      features: [
        {
          name: 'click',
          title: 'ONE-CLICK ACCESS',
          video: '/videos/project-whatsappwidgets-01.mp4',
          webm: '/videos/project-whatsappwidgets-01.webm',
          text: `
            Get in touch with your friends and relatives on WhatsApp™ instantly
            with one-click access to make voice calls, video calls and
            conversations on your home screen. Shortcuts connect you directly
            to WhatsApp™ functions without having to navigate through conversations
            clutter.
          `
        },
        {
          name: 'elderly',
          title: 'ELDERLY FRIENDLY',
          video: '/videos/project-whatsappwidgets-02.mp4',
          webm: '/videos/project-whatsappwidgets-02.webm',
          text: `
            Widget(s) are designed to be large and accessible. You can also
            choose to increase the text size or color code your contacts in
            the setup. Accessible and recognisable shortcuts are ideal for
            children, elderly or non-tech savvy users.
          `
        },
        {
          name: 'customizable',
          title: 'CUSTOMIZABLE',
          webp: '/images/projects/whatsappwidgets-3.webp',
          src: '/images/projects/whatsappwidgets-3.jpg',
          text: `
            You can customize the label and description on your widgets,
            as well as selectively display contact profile picture and
            phone number. Contact card widgets can also be color-labelled
            and resized.
          `
        },
        {
          name: 'guided',
          title: 'GUIDED SETUP',
          video: '/videos/project-whatsappwidgets-03.mp4',
          webm: '/videos/project-whatsappwidgets-03.webm',
          text: `
            Setup is short and simple with instructions to help you along
            the way. Widget settings can be changed by accessing the options
            button on individual contact cards.
          `
        }
      ],
      references: [
        {
          label: 'Material Design Onboarding',
          description: `
            Onboarding design guidelines for effective setup.
          `,
          src: '/images/links/material.jpg',
          url: 'https://material.io/design/communication/onboarding.html'
        },
        {
          label: 'Widget Development Guide',
          description: `
            Guidelines for widget development on Android.
          `,
          src: '/images/links/androiddev.jpg',
          url: 'https://developer.android.com/guide/topics/appwidgets'
        },
        {
          label: 'Widget Design',
          description: `
            Design guidelines for designing Android widgets.
          `,
          src: '/images/links/androiddev.jpg',
          url:
            'https://developer.android.com/guide/practices/ui_guidelines/widget_design'
        },
        {
          label: 'App Store Optimization',
          description: `
            Optimizing listing on Google Play store.
          `,
          src: '/images/links/thetool.jpg',
          url: 'https://thetool.io/2017/how-to-optimize-google-play-aso-guide'
        }
      ],
      actions: [
        {
          label: 'Ethereum Explorer',
          url: '/projects/ethereumexp',
          in: true
        },
        {
          label: 'Portfolio',
          url: '/projects/portfolio',
          in: true
        }
      ]
    }
  }
}
</script>
