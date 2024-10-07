import {Types} from './CardsListActions';
import {ICardsListReducer, ICardsListState} from './CardsListInterfaces';
import {RootState} from '../store';

export const INITIAL_STATE: ICardsListState = {
  cards: [],
};

export const cardsListSelector = (state: RootState): ICardsListState =>
  state.cardsList;

const reducer = (state = INITIAL_STATE, action: ICardsListReducer) => {
  switch (action.type) {
    case Types.SET_CARDS:
      return {cards: action.payload};
    default:
      return state;
  }
};

export default reducer;
