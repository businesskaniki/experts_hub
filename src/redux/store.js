import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerTechnician from './technicians/technician'

const rootReducer = combineReducers({
  technicians: reducerTechnician,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;