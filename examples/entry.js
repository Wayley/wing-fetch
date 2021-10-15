import { name } from './package.json';
function init() {
  name && (document.title = name.toUpperCase());
  document.querySelector('#app').innerHTML = 'THIS IS MY APP';
}
init();
