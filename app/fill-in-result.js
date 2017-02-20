export default function fillInResult(el, data) {
  el.querySelector('.result__title').innerText = data.show_title;
  el.querySelector('.result__genre').innerText = data.category;
  el.querySelector('.result__rating__text').innerText = data.rating;
  el.querySelector('.result-pic').src = data.poster;
  el.querySelector('.summary-text').innerText = data.summary;
  el.querySelector('.actors-text').innerText = data.show_cast;
}
