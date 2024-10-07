import {IAddCard, IAddCardSuccess} from './AddCardInterfaces';

export enum Types {
  ADD_CARD = 'ADD_CARD',
  ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS',
  ADD_CARD_ERROR = 'ADD_CARD_ERROR',
}

export const AddCardAction = (payload: IAddCard['payload']) => ({
  type: Types.ADD_CARD,
  payload,
});

export const AddCardSuccessAction = (payload: boolean): IAddCardSuccess => ({
  type: Types.ADD_CARD_SUCCESS,
  payload,
});
