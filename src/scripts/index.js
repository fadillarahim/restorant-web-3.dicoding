/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import App from './views/app';
import swRegister from './utils/sw.register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#restaurant'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
