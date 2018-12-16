<template>
  <div class='page todolist project'>
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
  head () {
    return {
      title: 'ToDoList - hliejun/projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Group project on keyboard and text-based agenda and organiser Java applet.' },
        { property: 'og:title', content: 'ToDoList - hliejun/projects' },
        { property: 'og:description', content: 'Group project on keyboard and text-based agenda and organiser Java applet.' },
        { property: 'og:url', content: 'hliejun.github.io' },
        { property: 'og:image', content: 'https://hliejun.github.io/images/meta/preview.png' }
      ]
    }
  },
  data () {
    return {
      jumbotron: {
        title: 'ToDoList',
        subtitle: 'Group project on keyboard and text-based agenda and organiser Java applet.',
        actions: [
          {
            label: 'Repo',
            url: 'https://github.com/cs2103jan2016-w13-2j/ToDoList'
          },
          {
            label: 'Release',
            url: 'https://github.com/cs2103jan2016-w13-2j/ToDoList/releases/tag/V0.6'
          },
          {
            label: 'Docs',
            url: 'https://hliejun.github.io/ToDoList/docs'
          },
          {
            label: 'Guide',
            url: 'https://hliejun.github.io/ToDoList/docs/guide.pdf'
          }
        ]
      },
      mockup: {
        src: '/images/projects/todolist-1.jpg',
        orientation: 'landscape',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'JavaFX' },
            { label: 'ControlsFX' },
            { label: 'JUnit' },
            { label: 'Natty' },
            { label: 'PrettyTime' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            { label: 'Eclipse' },
            { label: 'Javadoc' }
          ]
        }
      ],
      carpets: {
        about: '/images/projects/todolist-2.jpg'
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            ToDoList is an agenda organiser for keyboard experts. It manipulates an
            agenda list by natural text commands.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            ToDoList was our first software engineering project, part of a module
            to learn the essentials of software architecture and software development
            lifecycle.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            The challenge in designing ToDoList was the constraint of limiting most
            interactions to the keyboard. We had to experiment with practical and
            natural ways to manipulate the agenda items without the use of a pointer
            device.
          `
        },
      ],
      features: [
        {
          name: 'natural',
          title: 'NATURAL COMMANDS',
          src: '/images/projects/todolist-3.jpg',
          text: `
            ToDoList will recognize special events or occasions, time of the day and
            verbs as actions or commands, adverbs of time.
          `
        },
        {
          name: 'search',
          title: 'SEARCH & FILTER',
          src: '/images/projects/todolist-4.jpg',
          text: `
            You can search for an event by its title or name, or filter events by their
            tagged categories.
          `
        },
        {
          name: 'sort',
          title: 'SORTING',
          src: '/images/projects/todolist-5.jpg',
          text: `
            You can sort events by title, start or end time, duration, and more.
          `
        },
        {
          name: 'undo',
          title: 'UNDO & REDO',
          video: '/videos/project-todolist-01.mp4',
          webm: '/videos/project-todolist-01.webm',
          text: `
            If you wish to correct your previous action, you can choose to undo or
            redo changes made to your agenda list.
          `
        },
        {
          name: 'remind',
          title: 'REMINDERS',
          video: '/videos/project-todolist-02.mp4',
          webm: '/videos/project-todolist-02.webm',
          text: `
            Reminders can be set for important events and you will be notified as
            long as you have the Java Applet running.
          `
        },
        {
          name: 'recurring',
          title: 'RECURRING TASKS',
          src: '/images/projects/todolist-6.jpg',
          text: `
            You can choose to set a task to be recurring for a specified time interval
            and it will be reflected in your agenda list.
          `
        },
        {
          name: 'shortcuts',
          title: 'SHORTCUTS',
          video: '/videos/project-todolist-03.mp4',
          webm: '/videos/project-todolist-03.webm',
          text: `
            You can refer to agenda items by their index, make aliases for commands
            and use arrow keys to browse the agenda list.
          `
        },
        {
          name: 'night',
          title: 'DAY & NIGHT MODE',
          video: '/videos/project-todolist-04.mp4',
          webm: '/videos/project-todolist-04.webm',
          text: `
            If you work in low-light environment, you can choose to switch over to
            night mode.
          `
        }
      ],
      team: [
        {
          label: 'Xiao Yu Xin',
          description: `
            Yu Xin wrote the search and database modules for ToDoList.
          `,
          src: '/images/profiles/yuxin.jpg',
          url: 'https://github.com/XiaoYuxin'
        },
        {
          label: 'Zhang Jiyi',
          description: `
            Jiyi designed and implemented the parsers and logic components.
          `,
          src: '/images/profiles/jiyi.jpg',
          url: 'https://github.com/cs2103t'
        },
        {
          label: 'Huang Lie Jun',
          description: `
            I worked on the UI/UX designs, the views, controllers and project
            coordination.
          `,
          src: '/images/profiles/liejun.jpg',
          url: 'https://github.com/hliejun'
        }
      ],
      references: [
        {
          label: 'JavaFX Tutorial',
          description: `
            How to use JavaFX to implement interfaces in a Java applet.
          `,
          src: '/images/links/oracle.jpg',
          url: 'https://docs.oracle.com/javase/8/javafx/get-started-tutorial/get_start_apps.htm'
        },
        {
          label: 'Natty Repository',
          description: `
            Natural language date-time parser built by joestelmach for Java applications.
          `,
          src: '/images/links/github.jpg',
          url: 'https://github.com/joestelmach/natty'
        },
        {
          label: 'PrettyTime Documentation',
          description: `
            Documentation on PrettyTime API.
          `,
          src: '/images/links/prettytime.jpg',
          url: 'http://www.ocpsoft.org/prettytime'
        }
      ],
      actions: [
        {
          label: 'Weight',
          url: '/projects/weight',
          in: true
        },
        {
          label: 'Return',
          url: '/work',
          in: true
        }
      ]
    }
  }
}
</script>
