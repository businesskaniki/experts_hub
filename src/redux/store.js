import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerTechnician, { reducerSingleTechnician, reducerAddTechnician } from './technicians/technician';

const rootReducer = combineReducers({
  technicians: reducerTechnician,
  technician: reducerSingleTechnician,
  newTechnician: reducerAddTechnician,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
