import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerTechnician, {reducerSingleTechnician} from './technicians/technician'

const rootReducer = combineReducers({
  technicians: reducerTechnician,
  technician: reducerSingleTechnician
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;