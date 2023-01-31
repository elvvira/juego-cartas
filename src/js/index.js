// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createContainer } from './create-cards.js';
import { assignCards } from './compare-cards.js';
createContainer();

const cardsContainer = document.getElementById('cards-container');

cardsContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('card')) return;
  assignCards(e.target);
  e.target.classList.add('card--show');
});
