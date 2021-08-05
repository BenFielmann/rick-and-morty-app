import { createCharacterCard } from './components/character/character';
import './style.css';
import { createElement } from './utils/createElement';
import { getCharacters } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');
getCharacters();

const character = await getCharacters();

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
