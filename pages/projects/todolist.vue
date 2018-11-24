<template>
  <div class='page todolist project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :actions='jumbotron.actions'
      :name='jumbotron.name'
      :src='jumbotron.src'
      :subtitle='jumbotron.subtitle'
      :title='jumbotron.title' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- TODO: Screenshots and video for different functions, sequences -->
      <!-- TODO: Icons and glyphs for sections and items -->

      <TagsSection name='technologies' label='TECHNOLOGY' :items='technologies' />
      <HTMLSection name='about' label='ABOUT' :items='about' />
      <HTMLSection name='design' label='DESIGN' :items='design' />
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
        src: '/images/projects/todolist-1.png',
        orientation: 'landscape',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            {
              label: 'JavaFX',
              src: ''
            },
            {
              label: 'ControlsFX',
              src: ''
            },
            {
              label: 'JUnit',
              src: ''
            },
            {
              label: 'Natty',
              src: ''
            },
            {
              label: 'PrettyTime',
              src: ''
            }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            {
              label: 'Javadoc',
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
            ToDoList is an agenda organiser for keyboard experts. It manipulates an
            agenda list by natural text commands.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          src: '',
          text: `
            ToDoList was our first software engineering project, part of a module
            to learn the essentials of software architecture and software development
            lifecycle.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            The challenge in designing ToDoList was the constraint of limiting most
            interactions to the keyboard. We had to experiment with practical and
            natural ways to manipulate the agenda items without the use of a pointer
            device.
          `
        },
      ],
      design: [
        {
          name: 'architecture',
          title: 'Software Architecture',
          src: '',
          text: `
            We split our application into interface, logic and storage modules in a
            Model-View-Controller design pattern.
          `
        }
      ],
      features: [
        {
          name: 'natural',
          title: 'Natural Commands',
          src: '',
          text: `
            ToDoList will recognize special events or occasions, time of the day and
            verbs as actions or commands, adverbs of time.
          `
        },
        {
          name: 'search',
          title: 'Search and Filter',
          src: '',
          text: `
            You can search for an event by its title or name, or filter events by their
            tagged categories.
          `
        },
        {
          name: 'sort',
          title: 'Sort',
          src: '',
          text: `
            You can sort events by title, start or end time, duration, and more.
          `
        },
        {
          name: 'undo',
          title: 'Undo and Redo',
          src: '',
          text: `
            If you wish to correct your previous action, you can choose to undo or
            redo changes made to your agenda list.
          `
        },
        {
          name: 'remind',
          title: 'Reminders',
          src: '',
          text: `
            Reminders can be set for important events and you will be notified as
            long as you have the Java Applet running.
          `
        },
        {
          name: 'recurring',
          title: 'Recurring Tasks',
          src: '',
          text: `
            You can choose to set a task to be recurring for a specified time interval
            and it will be reflected in your agenda list.
          `
        },
        {
          name: 'shortcuts',
          title: 'Shortcuts',
          src: '',
          text: `
            You can refer to agenda items by their index, make aliases for commands
            and use arrow keys to browse the agenda list.
          `
        },
        {
          name: 'night',
          title: 'Day and Night Mode',
          src: '',
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
          src: '',
          url: 'https://github.com/XiaoYuxin'
        },
        {
          label: 'Zhang Jiyi',
          description: `
            Jiyi designed and implemented the parsers and logic components.
          `,
          src: '',
          url: 'https://github.com/cs2103t'
        },
        {
          name: 'Huang Lie Jun',
          description: `
            I worked on the UI/UX designs, the views, controllers and project
            coordination.
          `,
          src: '',
          url: 'https://github.com/hliejun'
        }
      ],
      references: [
        {
          label: 'JavaFX Tutorial',
          description: `
            How to use JavaFX to implement interfaces in a Java applet.
          `,
          src: '',
          url: 'https://docs.oracle.com/javase/8/javafx/get-started-tutorial/get_start_apps.htm'
        },
        {
          label: 'Natty Guide',
          description: `
            Guide on how to integrate Natty into Java applications.
          `,
          src: '',
          url: 'http://natty.joestelmach.com/doc.jsp'
        },
        {
          label: 'PrettyTime Documentation',
          description: `
            Documentation on PrettyTime API.
          `,
          src: '',
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
