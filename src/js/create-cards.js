import { cardShow } from '../js/show-cards.js';
const cardsContainer = document.getElementById('cards-container');

const createArray = () => {
  const numbersImages = [];
  while (numbersImages.length < 9) {
    const generateNumber = Math.floor(Math.random() * 150 + 1);
    if (!numbersImages.includes(generateNumber)) {
      numbersImages.push(generateNumber);
    }
  }

  // array aleatorio;

  const newArray = [...numbersImages, ...numbersImages];
  for (let i = newArray.length - 1, r; i; i--) {
    r = Math.floor(Math.random() * i);
    [newArray[i], newArray[r]] = [newArray[r], newArray[i]];
  }
  return newArray;
};

const createContainer = () => {
  const allCards = createArray();
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < allCards.length; index++) {
    const newElement = document.createElement('div');
    newElement.classList.add('card');
    newElement.dataset.number = allCards[index];
    fragment.append(newElement);

    const cardFront = document.createElement('div');
    cardFront.classList.add('card__front');
    newElement.append(cardFront);

    const cardImage = document.createElement('img');
    cardImage.src = `assets/images/${allCards[index]}.png`;
    cardFront.append(cardImage);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card__back');
    newElement.append(cardBack);
  }

  cardsContainer.append(fragment);
  cardShow();
};

export { createContainer };
