import { createCharacterCard } from './components/character/character';
import './style.css';
import { createElement } from './utils/createElement';

const character = {
  name: 'Pickle Rick',
  thumbnail: '',
  status: 'Alive',
  species: 'Hybrid Human-Pickle',
  origin: 'Erth (C-137',
};

const mainElement = createElement('main', {
  className: 'main__card',

  childElements: [
    createElement('h1', { innerText: 'Rick and Morty' }),
    createElement('input', {
      placeholder: 'Search for a character',
      className: 'searchbar',
    }),

    createElement('div', {
      className: 'characterContainer',
      childElements: [
        createCharacterCard(character),
        createCharacterCard(character),
        createCharacterCard(character),
        createCharacterCard(character),
      ],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(mainElement);
}
