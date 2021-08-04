import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import { incAC, decAC, randAC } from './actions';

const decEl = document.getElementById('dec');
const incEl = document.getElementById('inc');
const randEl = document.getElementById('rand');
const counterEl = document.getElementById('counter');

const store = createStore(reducer);
const { dispatch } = store;

/*
const bindActionCreator =
  (creator, dispatch) =>
  (...args) => {
    dispatch(creator(...args));
  };
*/

const incDispatch = bindActionCreators(incAC, dispatch);
const decDispatch = bindActionCreators(decAC, dispatch);
const randDispatch = bindActionCreators(randAC, dispatch);

incEl.addEventListener('click', incDispatch);
decEl.addEventListener('click', decDispatch);
randEl.addEventListener('click', () => {
  const payload = Math.round(Math.random() * 10);
  randDispatch(payload);
});

const update = () => {
  counterEl.innerHTML = store.getState();
};
store.subscribe(update);
