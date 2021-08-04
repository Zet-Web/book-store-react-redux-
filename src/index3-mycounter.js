import { createStore } from 'redux';

const dec = document.getElementById('dec');
const inc = document.getElementById('inc');
const rand = document.getElementById('rand');
const counter = document.getElementById('counter');

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RAND':
      return state + Math.round(Math.random() * 10);

    default:
      return state;
  }
};

const store = createStore(reducer);
window.store = store;
store.subscribe(() => {
  counter.textContent = store.getState();
});
counter.textContent = store.getState();
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });

inc.addEventListener('click', () => {
  store.dispatch({ type: 'INC' });
});
dec.addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
});
rand.addEventListener('click', () => {
  store.dispatch({ type: 'RAND' });
});
