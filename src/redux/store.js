import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerTechnician from './technicians/technician'

const reducer = combineReducers(
  {
    technicians: reducerTechnician
  }
);

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
