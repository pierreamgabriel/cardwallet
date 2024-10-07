import {combineReducers} from 'redux';
import AddCardReducer from './AddCard/AddCardReducers';
import CardsListReducer from './CardsList/CardsListReducers';

const reducers = combineReducers({
  addCard: AddCardReducer,
  cardsList: CardsListReducer,
});

export default reducers;
