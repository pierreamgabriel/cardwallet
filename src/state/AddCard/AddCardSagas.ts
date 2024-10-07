import {call, put} from 'redux-saga/effects';
import axios from 'axios';
import {IAddCard} from './AddCardInterfaces';
import {AddCardSuccessAction} from './AddCardActions';
import Config from 'react-native-config';

function* AddCard({payload}: IAddCard) {
  try {
    yield call(axios.post, Config.JSON_SERVER_URL + '/cards', payload);
    yield put(AddCardSuccessAction(true));
  } catch (error) {
    yield put(AddCardSuccessAction(false));
  }
}

export const AddCardSagas = {
  AddCard,
};
