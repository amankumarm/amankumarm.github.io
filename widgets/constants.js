// done - 1
// in progress - 0
// need to improve-  -1
export const Projects = [
  {
    status: 1,
    name: 'Covid-19 India Visualizer',
    desc: 'A web-app that  visualizes covid-19 status in India.All The data being visualized here are fetched from covid19india.org.',
    tech: ['Reactjs', 'flask'],
    code: 'https://github.com/amankumarm/covid-19_visualiser',
    link: 'https://covid19-vizz.netlify.app/',
  },
  {
    status: 0,
    name: 'Horcrux',
    desc: 'A minified version of mysql. That supports various instructions like Select, Insert and Deleting rows',
    tech: ['python'],
    code: null,
    link: null,
  },
  {
    status: -1,
    name: 'Banking system',
    desc: 'A learning Project that i built as a part of my Database Technologies course helped me to learn Nextjs and Postgres ',
    tech: ['Flask', 'pschopg', 'Nextjs'],
    code: 'https://github.com/amankumarm/horcrux',
    link: null,
  },
  {
    status: -1,
    name: 'Edmodo Automation',
    desc: 'I was bored of adding the assignment due dates to my google calendar.So I built my own calendar which automatically updates by calendar ',
    tech: ['Flask', 'selenium', 'Reactjs'],
    code: 'https://github.com/amankumarm/edmodo-automation',
    link: 'https://my-edmodo-calendar.netlify.app/',
  },
  {
    status: 1,
    name: 'Thinn',
    desc: 'A simple web-app that shortens your valid links to smaller readable links.',
    tech: ['Reactjs', 'Nodejs', 'Mongodb'],
    code: 'https://github.com/amankumarm/URL-Shortner',
    link: 'https://github.com/amankumarm/MERN-chat-app',
  },
  {
    status: 1,
    name: 'HashTag-us',
    desc: 'A simple websocket based application which helps people to interact with the people they know.',
    tech: ['Reactjs', 'Nodejs', 'Mongodb'],
    code: 'https://github.com/amankumarm/URL-Shortner',
    link: 'https://hashtag-us.herokuapp.com/#/',
  },
  {
    status: 1,
    name: 'Algovizz',
    desc: 'This project helps you to learn different algorithms with the cool visual effects. Try it out!!',
    tech: ['Reactjs', 'Nodejs'],
    code: 'https://github.com/amankumarm/Algorithm-Visualizer',
    link: 'https://algo-vizz.herokuapp.com/',
  },
]

export const skills = [
  ['Python', 1],
  ['JavaScript', 1],
  ['Nextjs', 1],
  ['React', 1],
  ['Expressjs', 1],
  ['AWS', 1],
  ['Tailwind', 1],
  ['C', 1],
  ['CSS', 1],
  ['Android', 0],
  ['HTML', 1],
  ['Nodejs', 1],
  ['Mongodb', 1],
  ['Django', 1],
  ['Github', 1],
  ['git', 1],
  ['SQL', 1],
  ['Linode', 0],
]

export const WorkExp = [
  {
    name: '6inc.co',
    start: 'November 2022',
    end: 'Current',
    position: 'Frontend Developer',
    description:
      '6inc is a virtual incubator wherein students from different colleges with potential ideas for start-up can begin their journey and 6inc supports them by providing resources like mentors, connect them with interested investors, help them in hiring talent required etc.',
    work: [{ name: '6inc.co', link: 'https://6inc.co' }],
    stack: [
      'Nextjs',
      'Tailwind',
      'Zustand',
      'MongoDB',
      'Firebase',
      'Serverless functions',
      'CI/CD',
      'Cypress (Testing)',
    ],
  },
  {
    name: 'Seminar room',
    start: 'September 2022',
    end: 'October 2022',
    position: 'Frontend Developer',
    description:
      'I was responsible for building the admin panel for their main website, which would help them to allot sessions.',
    work: [{ name: 'Work cannot be made public', link: '#' }],
    stack: ['Nextjs', 'Tailwind', 'Zustand'],
  },
  {
    name: 'Justbooks.in',
    start: 'August 2022',
    end: 'May 2022',
    position: 'Frontend Developer Intern',
    description: 'I Revamped their website to a new one from scratch.',
    work: [
      { name: 'Old ', link: 'justbooks.in' },
      {
        name: 'New',
        link: 'https://jb-test-one.vercel.app/',
      },
    ],
    stack: ['Nextjs', 'Tailwind', 'Zustand'],
  },
  {
    name: 'PES Innovation Lab',
    start: 'May 2022',
    end: 'Aug 2022',
    position: 'Full-stack  Intern',
    description:
      'Worked on a project that aims to visualize different Sorting, ML, and Graph Algorithms.',
    work: [
      {
        name: 'Certificate', // remember to render this as innerhtml
        link: 'https://drive.google.com/file/d/1fyoKKk1qC9DP8IVyRmLAjM0m-Fl1B29n/view',
      },
    ],

    stack: ['React', 'Django'],
  },
]
