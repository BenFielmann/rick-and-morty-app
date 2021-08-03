import { createCharacterCard } from './components/character/character';
import './style.css';
import { createElement } from './utils/createElement';

const mainElement = createElement('main', {
  className: 'maincoon',

  childElements: [
    createElement('h1', { innerText: 'Rick and Morty' }),
    createElement('input', {
      placeholder: 'Search for a character',
      className: 'searchbar',
    }),

    createElement('div', {
      className: 'characterContainer',
      childElements: [createCharacterCard()],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(mainElement);
}

/*
const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerText = 'Rick and Morty';

const input = document.createElement('input');
input.placeholder = 'search for a character...';

const para = document.createElement('p');
para.innerText = 'Character List';

const div = document.createElement('div');
div.classList.add('container');

mainElement.append(title, input, para);
*/
