import { createStore } from "redux";


function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}

export default configureStore;