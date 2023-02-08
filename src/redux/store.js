import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';?
import thunk from 'redux-thunk';
import reducerTechnician, { reducerSingleTechnician } from './technicians/technician';
import reservationsReducer from './reservations/reservations';

const rootReducer = combineReducers({
  technicians: reducerTechnician,
  technician: reducerSingleTechnician,
  reservations: reservationsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
