import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

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

// const incDispatch = bindActionCreators(incAC, dispatch);
// const decDispatch = bindActionCreators(decAC, dispatch);
// const randDispatch = bindActionCreators(randAC, dispatch);

/*const { incDispatch, decDispatch, randDispatch } = bindActionCreators(
  {
    incDispatch: incAC,
    decDispatch: decAC,
    randDispatch: randAC,
  },
  dispatch
);*/

const { incAC, decAC, randAC } = bindActionCreators(actions, dispatch);

/*
incEl.addEventListener('click', incAC);
decEl.addEventListener('click', decAC);
randEl.addEventListener('click', () => {
  const payload = Math.round(Math.random() * 10);
  randAC(payload);
});
*/

const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      dec={decAC}
      inc={incAC}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        randAC(value);
      }}
    />,
    document.getElementById('root')
  );
};
update();
store.subscribe(update);
