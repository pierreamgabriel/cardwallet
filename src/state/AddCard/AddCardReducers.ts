import {Types} from './AddCardActions';
import {IAddCardReducer, IAddCardState} from './AddCardInterfaces';
import { RootState } from '../store';

export const INITIAL_STATE: IAddCardState = {
  success: false,
};

export const addCardSelector = (state: RootState): IAddCardState =>
  state.addCard;

const reducer = (state = INITIAL_STATE, action: IAddCardReducer) => {
  switch (action.type) {
    case Types.ADD_CARD_SUCCESS:
      return {success: true, error: false};
    case Types.ADD_CARD_ERROR:
      return {success: false, error: true};
    default:
      return state;
  }
};

export default reducer;
