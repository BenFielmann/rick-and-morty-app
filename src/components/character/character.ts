import './character.css';
import { createElement } from '../../utils/createElement';

export function createCharacterCard(): HTMLElement {
  return createElement('div', {
    className: 'character-card',
    childElements: [
      createElement('img', {
        className: 'character-card__image',
        src: 'https://rickandmortyapi.com/api/character/avatar/53.jpeg',
      }),
      createElement('article', {
        className: 'character-card__info',
        innerText: 'Card',
      }),
      createElement('h5', { className: 'race', innerText: 'Human' }),
      createElement('p', {
        className: 'lastLocation',
        innerText: 'Last known Location:',
      }),
      createElement('h5', { className: 'Location', innerText: 'Location' }),

      createElement('p', {
        className: 'placeholderClass',
        innerText: 'First seen in:',
      }),
      createElement('h5', {
        className: 'Appearance',
        innerText: 'Episode blahh',
      }),
      createElement('p', {
        className: 'placeholderClassTwo',
        innerText: 'First seen in:',
      }),
    ],
  });
}
