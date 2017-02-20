import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const form = document.querySelector('.search-prompt');
const button = document.querySelector('.search-button');
const result = document.querySelector('.result');

fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
  .then(res => res.json()
  ).then((data) => {
    fillInResult(result, data);
  });

button.addEventListener('click', () => {
  fetch(`http://netflixroulette.net/api/api.php?title=${form.value}`)
  .then(res => res.json()
  ).then((data) => {
    fillInResult(result, data);
  });
});
