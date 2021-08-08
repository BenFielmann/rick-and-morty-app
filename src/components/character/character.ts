import styles from './character.module.css';
import { createElement } from '../../utils/createElement';
import type { Character } from '../../types';

export function createCharacterCard({
  name,
  image,
  status,
  species,
  origin,
}: Character): HTMLElement {
  return createElement('div', {
    className: styles.characterCard,
    childElements: [
      createElement('img', {
        className: styles.characterCardImage,
        src: image,
      }),
      createElement('article', {
        className: styles.characterCardInfo,
        childElements: [
          createElement('h2', { innerText: name }),
          createElement('div', {
            childElements: [
              createElement('h4', { innerText: 'Status' }),
              createElement('p', { innerText: status }),
              createElement('h5', { innerText: 'last known location' }),
              createElement('p', { innerText: origin }),
              createElement('h5', { innerText: 'species' }),
              createElement('p', { innerText: species }),
              createElement('h5', { innerText: 'origin:' }),
              createElement('p', { innerText: origin }),
            ],
          }),
        ],
      }),
    ],
  });
}
