// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const cards = document.querySelectorAll('.card');
const cardsContainer = document.getElementById('cards-container');
let firstCard;
let secondCard;

const cardShow = () => {
  cards.forEach(card => {
    card.classList.add('card--show');
  });
  const timeoutId = setTimeout(() => {
    cards.forEach(card => {
      card.classList.remove('card--show');
    });
    clearTimeout(timeoutId);
  }, 2000);
};

const compareCards = () => {
  if (firstCard.dataset.number !== secondCard.dataset.number) {
    firstCard.classList.remove('card--show');
    secondCard.classList.remove('card--show');
  }
  firstCard = undefined;
  secondCard = undefined;
};

cardsContainer.addEventListener('click', e => {
  e.target.classList.add('card--show');

  if (!firstCard) {
    firstCard = e.target;
  } else {
    secondCard = e.target;

    secondCard.addEventListener(
      'transitionend',
      () => {
        compareCards();
      },
      { once: true }
    );
  }
});

cardShow();
