import './character.css';
import { createElement } from '../../utils/createElement';

export function createCharacterCard(): HTMLElement {
  return createElement('div', {
    className: 'card',
    childElements: [
      createElement('h2', { className: 'cardHeading', innerText: 'Card' }),
      createElement('li', { className: 'race', innerText: 'Human' }),
      createElement('li', {
        className: 'lastLocation',
        innerText: 'Last known Location:',
      }),
      createElement('li', { className: 'Location', innerText: 'Location' }),
      createElement('img', {
        className: 'mortyDepressed',
        src: 'https://rickandmortyapi.com/api/character/avatar/53.jpeg',
      }),
      createElement('li', {
        className: 'firstAppearance',
        innerText: 'First seen in:',
      }),
      createElement('li', {
        className: 'Appearance',
        innerText: 'Episode blahh',
      }),
    ],
  });
}
