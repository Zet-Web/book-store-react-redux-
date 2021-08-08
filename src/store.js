import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }
  return dispatch(action);
};

const logMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
};

function logMiddleWare(store) {
  return function (dispatch) {
    return function (action) {
      console.log(action.type, store.getState());
      return dispatch(action);
    };
  };
}
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleWare)
);
store.dispatch('HELLO_WORLD');

const myAction = (dispatch) => {
  setTimeout(() => {
    dispatch({ type: 'DELAYED_ACTION' });
  }, 2000);
};

const delayedACtionCreator = (timeout) => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: 'DELAYED_ACTION' });
  }, timeout);
};

store.dispatch(myAction);
store.dispatch(delayedACtionCreator(3000));
window.store = store;
export default store;
