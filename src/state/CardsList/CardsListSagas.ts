import {call, put} from 'redux-saga/effects';
import axios from 'axios';
import { SetCardsAction } from './CardsListActions';
import Config from 'react-native-config';
import { FormInput } from '../../helpers/validateFormData';

function* GetCards() {
  try {
    const response: {data: FormInput[]} = yield call(axios.get, Config.JSON_SERVER_URL + '/cards');
    yield put(SetCardsAction(response.data));
  } catch (error) {
    yield put(SetCardsAction([]));
  }
}

export const CardsListSagas = {
  GetCards,
};
