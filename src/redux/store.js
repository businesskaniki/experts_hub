import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerReservation, { reducerSingleReservation } from './reservations/reservations';
import reducerTechnician, { reducerSingleTechnician, reducerAddTechnician } from './technicians/technician';

const rootReducer = combineReducers({
  technician: reducerSingleTechnician,
  reservations: reducerReservation,
  reservation: reducerSingleReservation,
  technicians: reducerTechnician,
  newTechnician: reducerAddTechnician,
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
