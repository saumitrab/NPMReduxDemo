import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}

// Call anytime an action has been dispatched
store.subscribe(render);

// Call initial state
render();

document.addEventListener('click', () => {
  // notice the call to dispatch, not counter
  store.dispatch( { type: 'INCREMENT' } ); 
})
