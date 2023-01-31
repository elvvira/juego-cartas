const cardShow = () => {
  const cards = document.querySelectorAll('.card');
  const timeoutStart = setTimeout(() => {
    cards.forEach(card => {
      card.classList.add('card--show');
    });
    clearTimeout(timeoutStart);
  }, 1000);

  const timeoutId = setTimeout(() => {
    cards.forEach(card => {
      card.classList.remove('card--show');
    });
    clearTimeout(timeoutId);
  }, 4000);
};
export { cardShow };
