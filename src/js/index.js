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
const createContainer = () => {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 18; index++) {
    const newElement = document.createElement('div');
    newElement.classList.add('card');
    fragment.append(newElement);

    const cardFront = document.createElement('div');
    cardFront.classList.add('card__front');
    newElement.append(cardFront);

    const cardImage = document.createElement('img');

    const randomImage = [];

    for (let index = 0; index < 6; index++) {
      const randomNumbers = Math.floor(Math.random() * 150);
      randomImage.push(randomNumbers);
      cardImage.src = `assets/images/${randomNumbers}.png`;
      console.log(index);
    }

    cardFront.append(cardImage);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card__back');
    newElement.append(cardBack);
  }

  cardsContainer.append(fragment);
};
createContainer();

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
