import koshin from '../images/koshin.png';
import syncStore from '../images//book-review.png';
import serviceApi from '../images/book-api.png';
import ludo from '../images/ludo.png';
import timer from '../images/timer.png';
import weatherApp from '../images//weather-app.png';

export const projects = [
  {
    title: 'Koshin',
    description: 'A Github client that generates reports using the description of closed PR\'s on a repo.',
    image: koshin,
    link: 'https://koshin.herokuapp.com/',
    github: 'https://github.com/andela-morekoya/koshin',
    tech: ['Node/Express', 'React/Redux', 'Github API', 'SendGrid API'],
  },
  {
    title: 'Ludo Game',
    description: 'A multi player online ludo game.',
    image: ludo,
    link: '',
    github: 'https://github.com/chukwumaijem/ludo-game',
    tech: ['React/Redux'],
  },
  {
    title: 'SyncStore',
    description: 'A book review app. Displays a list of books that on click, navigates to show more details on the book.',
    image: syncStore,
    link: 'https://sync-store.herokuapp.com/',
    github: 'https://github.com/chukwumaijem/book-store',
    tech: ['React/Redux'],
  },
  {
    title: 'Service API',
    description: 'The backend for the SyncStore app. Built with Node.js, Express and MongoDB.',
    image: serviceApi,
    link: 'https://anselm-api.herokuapp.com/',
    github: 'https://github.com/chukwumaijem/service-api',
    tech: ['Node/Express', 'SendGrid API'],
  },
  {
    title: 'Timer',
    description: 'A simple digital count down clock. Useful for recording speech/event duration. Provides a summary.',
    image: timer,
    link: 'https://timemaster-staging.herokuapp.com/',
    github: 'https://github.com/chukwumaijem/timemaster',
    tech: ['React/Redux'],
  },
  {
    title: 'Weather App',
    description: 'A Preact weather app. Display the weather of a city selected from the drop down menu.',
    image: weatherApp,
    link: 'https://infinite-stream-45190.herokuapp.com/',
    github: 'https://github.com/chukwumaijem/weather-app-london',
    tech: ['Preact', 'Wunderground API'],
  },

];

export const libraries = [
  {
    title: 'Roll a Die',
    description: 'A 3D aminated die rolling library',
    github: 'https://github.com/chukwumaijem/roll-a-die',
    tech: ['Vanilla Javascript'],
  },
];