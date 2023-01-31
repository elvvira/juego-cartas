import { countPoints } from './contador.js';
let firstCard;
let secondCard;

const compareCards = () => {
  if (firstCard.dataset.number !== secondCard.dataset.number) {
    firstCard.classList.remove('card--show');
    secondCard.classList.remove('card--show');
  }
  firstCard = undefined;
  secondCard = undefined;
};

const assignCards = currentCard => {
  if (!firstCard) {
    firstCard = currentCard;
  } else {
    secondCard = currentCard;

    secondCard.addEventListener(
      'transitionend',
      () => {
        compareCards();
      },
      { once: true }
    );
    countPoints(firstCard, secondCard);
  }
};

export { compareCards, assignCards };
