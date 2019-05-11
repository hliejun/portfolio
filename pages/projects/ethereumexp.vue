<template>
  <div class="page ethereum-explorer project">
    <amp-image-lightbox
      id="lightbox"
      class="gallery__lightbox"
      layout="nodisplay"
    />
    <Mockup
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
      />
      <HTMLSection name="design" label="DESIGN" :items="design" />
      <HTMLSection name="features" label="FEATURES" :items="features" />
      <LinksSection name="references" label="REFERENCES" :items="references" />
      <ActionsSection name="actions" :items="actions" />
    </div>
  </div>
</template>

<script>
import ActionsSection from '../../components/ActionsSection';
import HTMLSection from '../../components/HTMLSection';
import Jumbotron from '../../components/Jumbotron';
import Mockup from '../../components/Mockup';
import LinksSection from '../../components/LinksSection';
import TagsSection from '../../components/TagsSection';

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
      title: 'Ethereum Explorer - hliejun/projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A block explorer built for browsing Ethereum transactions by accounts.'
        },
        {
          property: 'og:title',
          content: 'Ethereum Explorer - hliejun/projects'
        },
        {
          property: 'og:description',
          content:
            'A block explorer built for browsing Ethereum transactions by accounts.'
        },
        { property: 'og:url', content: 'hliejun.github.io' },
        {
          property: 'og:image',
          content: 'https://hliejun.github.io/images/meta/preview.png'
        }
      ]
    };
  },
  data() {
    return {
      jumbotron: {
        title: 'Ethereum Explorer',
        subtitle:
          'A block explorer built for browsing Ethereum transactions by accounts.',
        actions: [
          {
            label: 'Web App',
            url: 'https://ethereum-explorer.appspot.com/app/portfolio'
          },
          {
            label: 'Client Repo',
            url: 'https://github.com/hliejun/ethereum-explorer'
          },
          {
            label: 'Service Repo',
            url: 'https://github.com/hliejun/ethereum-gateway'
          }
        ]
      },
      mockup: {
        src: '/images/projects/ethereumexp-1.jpg',
        orientation: 'portrait',
        type: 'narrow'
      },
      technologies: [
        {
          name: 'build',
          title: 'BUILD',
          tags: [
            { label: 'React' },
            { label: 'Redux' },
            { label: 'SCSS' },
            { label: 'Babel' },
            { label: 'Webpack' },
            { label: 'Express' }
          ]
        },
        {
          name: 'tools',
          title: 'TOOLS',
          tags: [
            { label: 'NPM' },
            { label: 'ESLint' },
            { label: 'SASSLint' },
            { label: 'Postman' },
            { label: 'SwaggerHub' }
          ]
        },
        {
          name: 'platforms',
          title: 'PLATFORMS',
          tags: [{ label: 'Google Cloud' }, { label: 'GitHub Pages' }]
        }
      ],
      carpets: {
        about: '/images/projects/ethereumexp-2.jpg'
      },
      about: [
        {
          name: 'description',
          title: 'DESCRIPTION',
          text: `
            Ethereum Explorer is a responsive web application designed
            for consumers to view their cryptocurrency transactions
            by account(s). In the minimum viable product, it serves
            users to browse their transaction history in a ledger list,
            as well as view each transaction in details. It offers several features that improves the browsing experience relative to
            conventional block explorers.
          `
        },
        {
          name: 'motivation',
          title: 'MOTIVATION',
          text: `
            I created Ethereum Explorer as part of an interview exercise
            with TenX, a FinTech startup. It soon became a mini-project for
            me to learn more about cryptocurrency and blockchain, as well as
            hone my web development skills. Another key objective that I 
            had for this project was to explore some neat features in React 
            such as Hooks, Portals, Contexts, Lazy, Suspense, HoC, etc. 
          `
        },
        {
          name: 'constraints',
          title: 'CHALLENGES',
          text: `
            I spent a great deal of time optimising the browsing experience for 
            transaction history. Considering that the length of the ledger 
            could be substantial due to frequent block data transactions, 
            loading huge volumes of transaction cells could be resource 
            demanding without pagination or buffering techniques, especially on 
            on lower-end devices. I had to decide on the best approach for each 
            desktop and mobile environments. I also had to implement the 
            buffering mechanism as I found the external libraries limiting. I 
            ended up improvising a lazy list that buffers on scroll and a 
            paginated table memoised by React.<br>
            <br>
            Often, I also find myself torn between using the same responsive 
            components for mobile and desktop environment, and using dedicated
            components designed specifically for different size classes.
            Responsive components are typically accompanied by design
            constraints and require extra styling effort, whereas dedicated
            components could leave a larger bundle footprint. With React Lazy,
            the latter became a more affordable luxury.
          `
        }
      ],
      design: [
        {
          name: 'structure',
          title: 'PROJECT STRUCTURE',
          src: '/images/projects/ethereumexp-3.jpg',
          text: `
            This application uses the React-Redux architecture to achieve a 
            uni-directional data flow, with views as a function of states. 
            Notice that the business logic contained by Redux is independent of 
            the view logic. The views are dependent on Redux store and shared 
            resources, while the Redux store is dependent on the API gateway to 
            aggregate results from a bucket of third-party API services.<br>
            <br>
            Each page is modularised as a scene component, composed of various
            smaller modules that can be commonly shared across different scenes.
            The scenes are organised by the router which determines the resource
            paths and are accessed using router links.<br>
            <br>
            The API gateway is designed to adapt different API services to a
            fixed contract with the redux application. This allows services to
            be substituted or changed at the gateway level without affecting
            the consumption interface.
          `
        }
      ],
      features: [
        {
          name: 'spa',
          title: 'SINGLE PAGE APPLICATION',
          video: '/videos/project-ethereumexp-01.mp4',
          webm: '/videos/project-ethereumexp-01.webm',
          text: `
            As a single page application, the browsing experience on Ethereum 
            Explorer is relatively faster than traditional alternatives. Pages
            remain completely accessible by URL routes, without having to fetch
            web templates repetitively.
          `
        },
        {
          name: 'responsive',
          title: 'RESPONSIVE COMPONENTS',
          video: '/videos/project-ethereumexp-02.mp4',
          webm: '/videos/project-ethereumexp-02.webm',
          text: `
            Components are designed to be responsive across various screen 
            sizes and orientations, delivering a mobile-first experience
            consistent on all devices. For more complex features such as 
            transaction history, dedicated components are designed and served 
            exclusively to mobile and desktop users, providing the best 
            interactive experience customised for each size classes.
          `
        },
        {
          name: 'lazy',
          title: 'BUNDLING & LAZY LOADING',
          video: '/videos/project-ethereumexp-03.mp4',
          webm: '/videos/project-ethereumexp-03.webm',
          text: `
            Ethereum Explorer sheds the bulky bundle size of a responsive 
            single page application with bundle splitting using Webpack 
            React.lazy. On-demand resources are loaded asynchronously 
            just-in-time, improving page load speeds. Components are also 
            memoised and buffered to reduce renderings when mounted 
            on screen.
          `
        },
        {
          name: 'search',
          title: 'FILTER & SORT',
          video: '/videos/project-ethereumexp-04.mp4',
          webm: '/videos/project-ethereumexp-04.webm',
          text: `
            You can filter the transactions history by type and order them by 
            date and amount. Redundancies to access filter and sort are built 
            into the UI to ensure accessibility on various environments and to 
            meet the preferences of different users.
          `
        },
        {
          name: 'url',
          title: 'URL QUERIES',
          video: '/videos/project-ethereumexp-05.mp4',
          webm: '/videos/project-ethereumexp-05.webm',
          text: `
            Page states such as transaction id, filter and sort parameters can
            be edited directly from the URL query string, allowing users to be 
            more efficient at browsing, bookmarking and sharing stateful 
            queries.
          `
        },
        {
          name: 'localisation',
          title: 'LOCALISED RATES',
          video: '/videos/project-ethereumexp-06.mp4',
          webm: '/videos/project-ethereumexp-06.webm',
          text: `
            Ethereum can be converted and localised into one of the 6 
            currencies below, allowing users to find the content more relatable 
            and meaningful:
            <p>
              <ul>
                <li>China Yuan (CNY)</li>
                <li>Great Britain Pound (GBP)</li>
                <li>Japan Yen (JPY)</li>
                <li>Korea Won (KRW)</li>
                <li>Singapore Dollar (SGD)</li>
                <li>United States Dollar (USD)</li>
              </ul>
            </p>
          `
        },
        {
          name: 'cache',
          title: 'CACHING',
          video: '/videos/project-ethereumexp-07.mp4',
          webm: '/videos/project-ethereumexp-07.webm',
          text: `
            Settings and last-fetched data are cached into the session 
            or local storage, allowing users to persist their preferences
            and browsing context between application sessions. 
          `
        },
        {
          name: 'clipboard',
          title: 'COPY TO CLIPBOARD',
          video: '/videos/project-ethereumexp-08.mp4',
          webm: '/videos/project-ethereumexp-08.webm',
          text: `
            Instead of copying transaction data field by field, you can copy the entire transaction in a single-click. The output is formatted neatly and hierarchically by tabs.
          `
        },
        {
          name: 'themes',
          title: 'DARK MODE',
          video: '/videos/project-ethereumexp-09.mp4',
          webm: '/videos/project-ethereumexp-09.webm',
          text: `
            You can also optionally turn on dark mode if you prefer a dark theme or are viewing under low-light conditions.
          `
        }
      ],
      references: [
        {
          label: 'Making Sense of React Hooks',
          description: `
            Rationale behind React Hooks and walkthrough on its usage.
          `,
          src: '/images/links/medium.jpg',
          url:
            'https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889'
        },
        {
          label: 'Advance React Guide: Code Splitting',
          description: `
            ReactJS documentation on code splitting using React.lazy and
            other advanced features.
          `,
          src: '/images/links/react.jpg',
          url: 'https://reactjs.org/docs/code-splitting.html'
        },
        {
          label: 'Formik: Build Forms in React, Without Tears',
          description: `
            Inspiration for using render props and functional children
            to build declarative forms.
          `,
          src: '/images/links/formik.jpg',
          url: 'https://jaredpalmer.com/formik/docs/overview'
        },
        {
          label: 'React Redux Basic Tutorial',
          description: `
            Documentation and walkthrough on using Redux with ReactJS.
          `,
          src: '/images/links/redux.jpg',
          url: 'https://react-redux.js.org/introduction/basic-tutorial'
        },
        {
          label: 'Getting Started With Redux',
          description: `
            Video tutorials and course on using Redux with Dan Abramov.
          `,
          src: '/images/links/egghead.jpg',
          url: 'https://egghead.io/courses/getting-started-with-redux'
        },
        {
          label: 'ReactJS: Deployment on GitHub Pages',
          description: `
            Guide on deploying a create-react-app application on GitHub Pages.
          `,
          src: '/images/links/react.jpg',
          url:
            'https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom'
        },
        {
          label: 'Deploy Single Page Application on GitHub Pages',
          description: `
            Guide on deploying ReactJS SPAs on GitHub Pages.
          `,
          src: '/images/links/github.jpg',
          url: 'https://github.com/rafrex/spa-github-pages'
        },
        {
          label: 'Dynamic App Themes with CSS Variables and JavaScript',
          description: `
            Guide on using CSS variables with SASS to dynamically apply
            style changes to a React application.
          `,
          src: '/images/links/medium.jpg',
          url: 'https://itnext.io/css-variables-dynamic-app-themes-86c0db61cbbb'
        },
        {
          label: 'Etherscan API Documentation',
          description: `
            API documentation for Etherscan ethereum blockchain data access. Ethereum Explorer is powered by Etherscan.io APIs.
          `,
          src: '/images/links/etherscan.jpg',
          url: 'https://etherscan.io/apis'
        },
        {
          label: 'Open Exchange Rates API Documentation',
          description: `
            API documentation for Open Exchange Rates providing live and historical foreign exchange (forex) rates.
          `,
          src: '/images/links/openexchangerates.jpg',
          url: 'https://docs.openexchangerates.org/docs'
        },
        {
          label: 'Behance: Tran Mau Tri Tam',
          description: `
            Attribution to UX/UI Web Designer Tran Mau Tri Tam for isometric mockup design template used in project thumbnail.
          `,
          src: '/images/links/behance.jpg',
          url: 'https://www.behance.net/tranmautritam'
        }
      ],
      actions: [
        {
          label: 'Return',
          url: '/work',
          in: true
        },
        {
          label: 'Widgets for WhatsApp™',
          url: '/projects/whatsappwidgets',
          in: true
        }
      ]
    };
  }
};
</script>
