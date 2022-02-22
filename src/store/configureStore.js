import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import profile from '../reducers/loginReducer';

const loggerMiddleware = createLogger();  

const rootReducer = combineReducers({
  user: profile
});

export default function configureStore() {
  let store = createStore(rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return { store };
}

