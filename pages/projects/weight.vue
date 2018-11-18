<template>
  <div class='page weight project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.3' layout='nodisplay' />

      <!-- Built Using: Unity -->

      <!-- About:  -->
      <!-- Motivations:  -->
      <!-- Constraints:  -->

      <!-- Features:  -->
      <!-- Video of gameplay, screenshots -->

      <!-- Team (Check GDrive) -->

      <!-- References:  -->

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
        title: 'Weight',
        subtitle: 'Group project on gravity-driven infinite run mini-game made using Unity.',
        actions: [
          {
            label: 'Game Release',
            url: 'https://github.com/hliejun/Weight/releases'
          }
        ]
      },
      mockup: {
        src: '/images/projects/weight-1.png',
        orientation: 'landscape',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          items: [
            {
              src: '',
              label: '...',
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
              label: '...',
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
              label: '...',
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
            ...
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            ...
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            ...
          `
        },
      ],
      design: [
        {
          name: '...',
          title: '...',
          src: '',
          text: `
            ...
          `
        }
      ],
      features: [
        {
          name: '...',
          title: '...',
          src: '',
          text: `
            ...
          `
        }
      ],
      team: [
        {
          src: '',
          name: '...',
          description: `
            ...
          `
        }
      ],
      references: [
        {
          src: '',
          label: '...',
          description: `
            ...
          `
        }
      ],
      actions: [
        {
          label: 'Bubble Chat',
          url: '/projects/bubble',
          in: true
        },
        {
          label: 'ToDoList',
          url: '/projects/todolist',
          in: true
        }
      ]
    }
  }
}
</script>
