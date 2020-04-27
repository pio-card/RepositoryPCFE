//1.2 create a store file - store.js
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; //shortcut if file name is index.js

const initialState = {}; //line 5

const middleware = [thunk]; //line 4

const store = createStore(
  //2
  rootReducer, //5
  initialState, //7
  compose(
    //2
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
