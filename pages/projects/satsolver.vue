<template>
  <div class='page satsolver project'>
    <Mockup :src='mockup.src' :orientation='mockup.orientation' :type='mockup.type' />
    <Jumbotron
      :name='jumbotron.name'
      :title='jumbotron.title'
      :subtitle='jumbotron.subtitle'
      :src='jumbotron.src'
      :actions='jumbotron.actions' />
    <div class='page__content'>
      <amp-position-observer on='enter:fadeIn.start' intersection-ratios='.1' layout='nodisplay' />

      <!-- Pictures of graphs explaining results -->

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
      <div class='project__section'>
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
        title: 'SAT Solver',
        subtitle: 'Group research on efficiency of satisfiability resolution strategies.',
        actions: [
          {
            label: 'GitHub Repo',
            url: 'https://github.com/hliejun/sat-solver'
          },
          {
            label: 'Findings',
            url: 'https://github.com/hliejun/SAT-Solver/blob/master/CS4244-SATSolver-Report.pdf'
          }
        ]
      },
      mockup: {
        src: '/images/projects/satsolver-1.png',
        orientation: 'landscape',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          items: [
            {
              src: '',
              label: 'Java',
              description: ''
            },
            {
              src: '',
              label: 'JUnit',
              description: ''
            },
            {
              src: '',
              label: 'Shell Script',
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
              label: 'IntelliJ',
              description: ''
            },
            {
              src: '',
              label: 'Bash',
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
              label: 'UNIX',
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
            To understand the DPLL and CDCL algorithms through implementation, as well as to compare and
            benchmark different heuristics.
          `
        },
        {
          name: 'description',
          title: 'DESCRIPTION',
          src: '',
          text: `
            This project is about comparison of different satisfiability resolution techniques,
            such as DPLL and CDCL with different branching and conflict resolution heuristics. In this
            project, we implemented several heuristics for solving satisfiability, and made comparisons
            through cnf formatted test cases. We also modelled the Einstein's Puzzle into CNF form to
            be used with our solvers.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          src: '',
          text: `
            The challenge in this project was finding and implementing heuristics for conflict resolution
            and picking branch variables that can improve the solvers.
          `
        },
      ],
      design: [
        {
          name: 'solvers',
          title: 'SOLVERS',
          src: '',
          text: `
            We implemented 2 solvers for this project:<br>
            <br>
            <u>Davis–Putnam–Logemann–Loveland (DPLL)</u><br>
            The DPLL algorithm is a backtracking search algorithm that performs chronological backtracking
            until the variables are exhausted. We wrote it in both recursive and iterative forms.<br>
            <br>
            <u>Conflict-Driven Clause Learning (CDCL)</u><br>
            The CDCL algorithm performs conflict clause learning and non-chronological backtracking by
            resolving an implication graph. CDCL can be customised with different heuristics for clause
            learning and picking branching variables.
          `
        },
        {
          name: 'heuristics',
          title: 'CDCL HEURISTICS',
          src: '',
          text: `
            For the CDCL solver, we implemented 3 variations of branching heuristics:<br>
            <br>
            <u>2-Clause</u><br>
            Pick an unassigned variable that occurred the most across 2­-clauses. This heuristic forces 2-­clauses
            to become assertive after decision­ making.<br>
            <br>
            <u>All Clause</u><br>
            Pick an unassigned variable that occurred the most across all clauses.<br>
            <br>
            <u>Random</u><br>
            Pick an unassigned variable randomly from a list of unassigned symbols.<br>
            <br>
            For the conflict analysis and clause learning heuristic, we implemented 1-UIP:<br>
            <br>
            <u>1-Unique Implication Point (1-UIP)</u><br>
            We used the implication graph to extract antecedent clauses to apply resolution with, starting
            from the conflict clause antecedent to the conflict node. However, the resolution is terminated
            as soon as we have reached a state where only 1 variable in the resolved clause belongs to the
            conflict level. This provides us with an assertive clause that can be propagated after backtracking
            to the highest level of the remaining variables in the resolved clause.
          `
        },
        {
          name: 'puzzle',
          title: 'EINSTEIN PUZZLE',
          src: '',
          text: `
            The Einstein Puzzle is a logic puzzle that establishes a list of conditions among 5 neighbours.
            There are ﬁve houses in ﬁve diﬀerent colors. In each house lives a person with a diﬀerent nationality.
            The ﬁve owners drink a certain type of beverage, smoke a certain brand of cigar, and keep a certain pet.
            No owners have the same pet, smoke the same brand of cigar or drink the same beverage.<br>
            <br>
            <u>Conditions</u><br>
            <ul>
              <li>The Brit lives in the red house.</li>
              <li>The Swede keeps dogs as pets.</li>
              <li>The Dane drinks tea.</li>
              <li>The green house is on the left of the white house.</li>
              <li>The green house’s owner drinks coﬀee.</li>
              <li>The person who smokes Pall Mall rears birds.</li>
              <li>The owner of the yellow house smokes Dunhill.</li>
              <li>The man living in the center house drinks milk.</li>
              <li>The Norwegian lives in the ﬁrst house.</li>
              <li>The man who smokes Blends lives next to the one who keeps cats.</li>
              <li>The man who keeps the horse lives next to the man who smokes Dunhill.</li>
              <li>The owner who smokes Bluemasters drinks beer.</li>
              <li>The man who keeps the horse lives next to the man who smokes Dunhill.</li>
              <li>The German smokes Prince.</li>
              <li>The Norwegian lives next to the blue house.</li>
              <li>The man who smokes Blends has a neighbor who drinks water.</li>
            </ul>
            <br>
            <u>Assumptions</u><br>
            <ul>
              <li>The owner is the resident of each house.</li>
              <li>One of the residents owns the ﬁsh.</li>
              <li>The term neighbor in the last hint refers only to a directly adjacent neighbor.</li>
              <li>The houses are on the same side of the street.</li>
              <li>They are next to each other, and are ordered from left to right as you face them.</li>
            </ul>
            <br>
            <u>Question</u><br>
            Who owns the fish?<br>
            <br>
            To model this problem, we created 150 variables to capture states and possible combinations.
            From these 150 variables, we designed rules that comply with the conditions specified by the
            puzzle. These rules were represented by 1300 clauses, categorised into several sections.<br>
            <br>
            <u>Simple Rules</u><br>
            2-clauses to represent specified conditions that bind 2 properties.<br>
            (i.e. If person P is Dane, then person P drinks tea.)<br>
            <br>
            <u>Proximity Rules</u><br>
            Clauses representing implications between states (ownership of traits) and positions of the houses.<br>
            (i.e. If person P is in first house and has green house, then if person Q is in second house, then
            person Q has white house.)<br>
            <br>
            <u>Exactly-1 Rules</u><br>
            Clauses that limit the ownership of each category of traits for a single owner.<br>
            (i.e. If person P is in the first house, then person P cannot be in the second to fifth house, etc.) <br>
            <br>
            <u>Unicity Rules</u><br>
            Clauses that define the exclusivity of traits between the owners.<br>
            (i.e. If person P is in the first house, then person Q is not in the first house, etc.) <br>
            <br>
            These set of literals and clauses were written in Conjunctive Normal Form (CNF) and used with
            our solvers to solve the puzzle.
          `
        }
      ],
      team: [
        {
          src: '',
          name: 'Chase Tiong',
          description: `
            Chase is responsible for writing the recursive DPLL solver, designing the data structures to represent
            literals and clauses, writing unit tests and shell scripts, analysis and benchmarking of results.
          `
        },
        {
          src: '',
          name: 'Huang Lie Jun',
          description: `
            I wrote the iterative DPLL solver, the implication graph data structures and modelled the Einstein's
            Puzzle. Chase and I worked on the CDCL solver and heuristics together.
          `
        }
      ],
      references: [
        {
          src: '',
          label: 'SATLIB Benchmark Problems',
          description: `
            http://www.cs.ubc.ca/~hoos/SATLIB/benchm.html
          `
        },
        {
          src: '',
          label: 'Exponential Recency Weighted Average Branching Heuristic for SAT Solvers',
          description: `
            ...
          `
        },
        {
          src: '',
          label: 'On Freezing and Reactivating Learnt Clauses',
          description: `
            ...
          `
        },
        {
          src: '',
          label: 'Clause Learning in SAT Seminar Automatic Problem Solving',
          description: `
            ...
          `
        },
        {
          src: '',
          label: 'Conflict­ Driven Clause Learning SAT Solvers',
          description: `
            ...
          `
        },
        {
          src: '',
          label: 'Understanding VSIDS Branching Heuristics in Conflict ­Driven Clause­ Learning SAT Solvers',
          description: `
            ...
          `
        },
        {
          src: '',
          label: 'Practical SAT Solving',
          description: `
            ...
          `
        }
      ],
      actions: [
        {
          label: 'HypeDyn Stories',
          url: '/projects/hypedyn',
          in: true
        },
        {
          label: 'Food Logging',
          url: '/projects/foodlogging',
          in: true
        }
      ]
    }
  }
}
</script>
