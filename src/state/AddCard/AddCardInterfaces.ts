import {Types} from './AddCardActions';

export type IAddCardReducer = {
	type: Types;
	payload: boolean;
};

export interface IAddCardState {
    success: boolean;
}

export interface IAddCard {
  type: Types.ADD_CARD;
  payload: {
    id: string;
    number: string;
    name: string;
    expiration: string;
    cvv: string;
  };
}

export interface IAddCardSuccess {
    type: Types.ADD_CARD_SUCCESS,
    payload: boolean;
}
