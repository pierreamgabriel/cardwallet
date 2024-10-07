import { FormInput } from '../../helpers/validateFormData';
import {Types} from './CardsListActions';

export type ICardsListReducer = {
	type: Types;
  payload: FormInput[]
};

export interface ICardsListState {
    cards: FormInput[];
}

export interface IGetCards {
  type: Types.GET_CARDS;
}

export interface ISetCards {
    type: Types.SET_CARDS,
    payload: FormInput[];
}
