import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerTechnician, { reducerSingleTechnician, reducerAddTechnician } from './technicians/technician';
import reservationsReducer from './reservations/reservations';

const rootReducer = combineReducers({
  technician: reducerSingleTechnician,
  technicians: reducerTechnician,
  newTechnician: reducerAddTechnician,
  reservations: reservationsReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
