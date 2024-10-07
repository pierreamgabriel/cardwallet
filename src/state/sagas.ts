import {takeLatest, all} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';

import {Types as AddCardTypes} from './AddCard/AddCardActions';
import {Types as CardsListTypes} from './CardsList/CardsListActions';

import {AddCardSagas} from './AddCard/AddCardSagas';
import {CardsListSagas} from './CardsList/CardsListSagas';

function* AllSagas(): SagaIterator {
  yield takeLatest(AddCardTypes.ADD_CARD, AddCardSagas.AddCard);
  yield takeLatest(CardsListTypes.GET_CARDS, CardsListSagas.GetCards);
}

export default function* () {
  yield all([AllSagas()]);
}
