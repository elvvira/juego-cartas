const pointsId = document.getElementById('points');
const failsId = document.getElementById('fails');

let counterPoints = 0;
let counterFails = 0;

const countPoints = (a, b) => {
  if (a.dataset.number === b.dataset.number) {
    counterPoints++;
    pointsId.textContent = counterPoints;
  } else {
    counterFails++;
    failsId.textContent = counterFails;
  }
};
export { countPoints };
