<template>
  <div class="page satsolver project">
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
      <HTMLSection name="about" label="ABOUT" :items="about" />
      <HTMLSection name="design" label="DESIGN" :items="design" />
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
      title: 'SAT Solver - hliejun/projects',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'SAT Solver Research - hliejun/projects'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Group research on efficiency of satisfiability resolution strategies.'
        },
        {
          property: 'og:title',
          content: 'SAT Solver Research - hliejun/projects'
        },
        {
          property: 'og:description',
          content:
            'Group research on efficiency of satisfiability resolution strategies.'
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content: 'https://hliejun.github.io/images/previews/sat-solver.jpg'
        }
      ],
      link: [
        { rel: 'canonical', href: `${process.env.HOST}/projects/satsolver` }
      ]
    }
  },
  data() {
    return {
      jumbotron: {
        title: 'SAT Solver',
        subtitle:
          'Group research on efficiency of satisfiability resolution strategies.',
        actions: [
          {
            label: 'GitHub Repo',
            url: 'https://github.com/hliejun/sat-solver'
          },
          {
            label: 'Findings',
            url:
              'https://github.com/hliejun/SAT-Solver/blob/master/CS4244-SATSolver-Report.pdf'
          }
        ]
      },
      mockup: {
        webp: '/images/projects/satsolver-1.webp',
        src: '/images/projects/satsolver-1.jpg',
        orientation: 'landscape',
        type: 'wide'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'Java' },
            { label: 'JUnit' },
            { label: 'Shell Script' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [{ label: 'IntelliJ' }, { label: 'Bash' }]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [{ label: 'UNIX' }]
        }
      ],
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            This research compares different satisfiability resolution
            techniques, such as DPLL and CDCL with different branching
            and conflict resolution heuristics. In this project, we
            implemented several heuristics for solving satisfiability
            and made comparisons through cnf formatted test cases. We
            also modelled the Einstein's Puzzle into CNF form to be used
            with our solvers.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            The motivation behind creating the solvers was to understand
            the DPLL and CDCL algorithms through implementation, as well
            as to compare and benchmark different heuristics.
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            The challenge in this project was finding and implementing
            heuristics for conflict resolution and picking branch variables
            that can improve the solvers. We went through several research
            papers before settling with the more common techniques that
            could be implemented within the project timeframe.
          `
        }
      ],
      design: [
        {
          name: 'solvers',
          title: 'SOLVERS',
          text: `
            We implemented 2 solvers for this project:<br>
            <br>
            <u>Davis–Putnam–Logemann–Loveland (DPLL)</u><br>
            The DPLL algorithm is a backtracking search algorithm that
            performs chronological backtracking until the variables are
            exhausted. We wrote it in both recursive and iterative forms.<br>
            <br>
            <u>Conflict-Driven Clause Learning (CDCL)</u><br>
            The CDCL algorithm performs conflict clause learning and
            non-chronological backtracking by resolving an implication
            graph. CDCL can be customised with different heuristics for
            clause learning and picking branching variables.
          `
        },
        {
          name: 'heuristics',
          title: 'CDCL HEURISTICS',
          text: `
            For the CDCL solver, we implemented 3 variations of branching
            heuristics:<br>
            <br>
            <u>2-Clause</u><br>
            Pick an unassigned variable that occurred the most across
            2­-clauses. This heuristic forces 2-­clauses to become assertive
            after decision­ making.<br>
            <br>
            <u>All Clause</u><br>
            Pick an unassigned variable that occurred the most across
            all clauses.<br>
            <br>
            <u>Random</u><br>
            Pick an unassigned variable randomly from a list of unassigned
            symbols.<br>
            <br>
            For the conflict analysis and clause learning heuristic, we
            implemented 1-UIP:<br>
            <br>
            <u>1-Unique Implication Point (1-UIP)</u><br>
            We used the implication graph to extract antecedent clauses
            to apply resolution with, starting from the conflict clause
            antecedent to the conflict node. However, the resolution is
            terminated as soon as we have reached a state where only 1
            variable in the resolved clause belongs to the conflict level.
            This provides us with an assertive clause that can be propagated
            after backtracking to the highest level of the remaining variables
            in the resolved clause.
          `
        },
        {
          name: 'puzzle',
          title: 'EINSTEIN PUZZLE',
          text: `
            The Einstein Puzzle is a logic puzzle that establishes a list
            of conditions among 5 neighbours. There are ﬁve houses in ﬁve
            diﬀerent colors. In each house lives a person with a diﬀerent
            nationality. The ﬁve owners drink a certain type of beverage,
            smoke a certain brand of cigar, and keep a certain pet. No owners
            have the same pet, smoke the same brand of cigar or drink the
            same beverage.<br>
            <br>
            <u>Question</u><br>
            Who owns the fish?<br>
            <br>
            <u>Hints</u><br>
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
            To model this problem, we created 150 variables to capture
            states and possible combinations. From these 150 variables,
            we designed rules that comply with the conditions specified
            by the puzzle. These rules were represented by 1300 clauses,
            categorised into several sections.<br>
            <br>
            <u>Simple Rules</u><br>
            2-clauses to represent specified conditions that bind 2
            properties.<br>
            (i.e. If person P is Dane, then person P drinks tea.)<br>
            <br>
            <u>Proximity Rules</u><br>
            Clauses representing implications between states (ownership of
            traits) and positions of the houses.<br>
            (i.e. If person P is in first house and has green house, then
            if person Q is in second house, then person Q has white house.)<br>
            <br>
            <u>Exactly-1 Rules</u><br>
            Clauses that limit the ownership of each category of traits
            for a single owner.<br>
            (i.e. If person P is in the first house, then person P cannot
            be in the second to fifth house, etc.)<br>
            <br>
            <u>Unicity Rules</u><br>
            Clauses that define the exclusivity of traits between the owners.<br>
            (i.e. If person P is in the first house, then person Q is not
            in the first house, etc.)<br>
            <br>
            These set of literals and clauses were written in Conjunctive
            Normal Form (CNF) and used with our solvers to solve the puzzle.
          `
        }
      ],
      team: [
        {
          label: 'Chase Tiong',
          description: `
            Chase was responsible for writing the recursive DPLL solver,
            designing the data structures to represent literals and clauses,
            writing unit tests and shell scripts, analysis and benchmarking
            of results.
          `,
          src: '/images/profiles/chase.jpg',
          url: 'https://github.com/ChaseTiong'
        },
        {
          label: 'Huang Lie Jun',
          description: `
            I wrote the iterative DPLL solver, the implication graph data
            structures and modelled the Einstein's Puzzle. Chase and I
            worked on the CDCL solver and heuristics together.
          `,
          src: '/images/profiles/liejun.jpg',
          url: 'https://github.com/hliejun'
        }
      ],
      references: [
        {
          label: 'SATLIB Benchmark Problems',
          description: `
            A collection of satisfiability benchmark problems in cnf form.
          `,
          src: '/images/links/ubc.jpg',
          url: 'https://www.cs.ubc.ca/~hoos/SATLIB/benchm.html'
        },
        {
          label:
            'Exponential Recency Weighted Average Branching Heuristic for SAT Solvers',
          description: `
            ERWA branching heuristics for CDCL solvers.
          `,
          src: '/images/links/semanticscholar.jpg',
          url:
            'https://pdfs.semanticscholar.org/7861/8983dec4a92a9c5a1909e31bc8b95a5705a5.pdf'
        },
        {
          label: 'On Freezing and Reactivating Learnt Clauses',
          description: `
            Clause learning heuristics for CDCL solvers.
          `,
          src: '/images/links/semanticscholar.jpg',
          url:
            'https://pdfs.semanticscholar.org/a1cd/dbc236cf94161f578dd91f77c7410b7ba5cf.pdf'
        },
        {
          label: 'Clause Learning in SAT Seminar Automatic Problem Solving',
          description: `
            Clause learning with implementation of implication graph and
            use of unique implication points.
          `,
          src: '/images/links/princeton.jpg',
          url:
            'https://www.cs.princeton.edu/courses/archive/fall13/cos402/readings/SAT_learning_clauses.pdf'
        },
        {
          label: 'CDCL SAT Solvers',
          description: `
            Detailed notes on CDCL solvers and its constituent procedures.
          `,
          src: '/images/links/satassociation.jpg',
          url: 'https://satassociation.org/articles/FAIA185-0131.pdf'
        },
        {
          label: 'VSIDS Branching Heuristics in CDCL SAT Solvers',
          description: `
            VSID branching heuristics for CDCL solvers.
          `,
          src: '/images/links/arxiv.jpg',
          url: 'https://arxiv.org/pdf/1506.08905.pdf'
        },
        {
          label: 'Practical SAT Solving',
          description: `
            Reference SAT solving lecture series.
          `,
          src: '/images/links/kit.jpg',
          url: 'https://baldur.iti.kit.edu/sat'
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
