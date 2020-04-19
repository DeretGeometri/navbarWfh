document
  .querySelector(`.tombol-responsif`)
  .addEventListener(`click`, menuResponsif);

const ul = document.querySelector(`ul`);

function menuResponsif() {
  ul.classList.toggle(`responsif`);
}
