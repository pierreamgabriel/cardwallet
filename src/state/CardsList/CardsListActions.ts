import {ISetCards} from './CardsListInterfaces';

export enum Types {
  GET_CARDS = 'GET_CARDS',
  SET_CARDS = 'SET_CARDS',
}

export const GetCardsAction = () => ({
  type: Types.GET_CARDS,
});

export const SetCardsAction = (payload: ISetCards['payload']): ISetCards => ({
  type: Types.SET_CARDS,
  payload,
});
