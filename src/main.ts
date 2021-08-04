import { createCharacterCard } from './components/character/character';
import './style.css';
import { createElement } from './utils/createElement';
import type { Character } from './types';

const app = document.querySelector<HTMLDivElement>('#app');

const character: Character[] = [
  {
    name: 'Pickle Rick',
    thumbnail:
      'https://static.posters.cz/image/750/poster/rick-and-morty-pickle-rick-i51002.jpg',
    status: 'Alive',
    species: 'Hybrid Human-Pickle',
    origin: 'Earth (C-137',
    episode: 'Pickle and Rick',
  },
  {
    name: 'Pickle Rick',
    thumbnail:
      'https://static.posters.cz/image/750/poster/rick-and-morty-pickle-rick-i51002.jpg',
    status: 'Alive',
    species: 'Hybrid Human-Pickle',
    origin: 'Erth (C-137',
    episode: 'Pickle and Rick',
  },
];

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
      childElements: character.map((character) =>
        createCharacterCard(character)
      ),
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
