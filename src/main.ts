import { createCharacterCard } from './components/character/character';
import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const character = {
  name: 'Pickle Rick',
  thumbnail: 'https://rickandmortyapi.com/api/character/avatar/53.jpeg',
  status: 'Alive',
  species: 'Hybrid Human-Pickle',
  origin: 'Erth (C-137',
  episode: 'Pickle and Rick',
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

if (app !== null) {
  app.append(mainElement);
}
