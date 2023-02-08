import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerTechnician, { reducerSingleTechnician } from './technicians/technician';
import reducerReservation, { reducerSingleReservation } from './reservations/reservations';

const rootReducer = combineReducers({
  technicians: reducerTechnician,
  technician: reducerSingleTechnician,
  reservations: reducerReservation,
  reservation: reducerSingleReservation,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
