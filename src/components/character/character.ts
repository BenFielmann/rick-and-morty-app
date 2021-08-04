import './character.css';
import { createElement } from '../../utils/createElement';

export function createCharacterCard(character): HTMLElement {
  return createElement('div', {
    className: 'character-card',
    childElements: [
      createElement('img', {
        className: 'character-card__image',
        src: 'https://rickandmortyapi.com/api/character/avatar/53.jpeg',
      }),
      createElement('article', {
        className: 'character-card__info',
        childElements: [
          createElement('h2', { innerText: character.species }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Location' }),
              createElement('p', { innerText: 'Last known Location:' }),
            ],
          }),
          createElement('h5', { innerText: 'Episode blah' }),
          createElement('p', { innerText: 'First seen in:' }),
        ],
      }),
    ],
  });
}
