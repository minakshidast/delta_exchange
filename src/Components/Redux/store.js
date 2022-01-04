import { compose, createStore, applyMiddleware, combineReducers } from "redux";
// import {registerReducer} from '../Redux/Register/reducer'
import thunk from "redux-thunk";
// import { loginReducer } from './Login/reducer'
// import { userReducer } from './User/reducer'

const rootReducer = combineReducers({
  // register: registerReducer,
  // login: loginReducer,
  // user: userReducer
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
