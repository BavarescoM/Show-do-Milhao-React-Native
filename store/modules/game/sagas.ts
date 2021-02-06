import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export function* click({ payload }: ActionType<typeof actions.clickQuestion>) {
  try {
    const { vlCerto, entrada, qAtual, reward } = payload;
    yield put(actions.disableButton());
    yield put(actions.colorsQuestion({ vlCerto: vlCerto, entrada: entrada }));
    yield delay(1500);
    if (vlCerto !== entrada) {
      yield put(actions.setLoser());
    } else {
      if (reward === 15) {
        yield put(actions.setWinner());
      } else {
        yield put(actions.clearQuestion());
        yield put(actions.nextQuestion());
      }
    }
    yield put(actions.showTwo());
    yield put(actions.enableButton());
  } catch (err) {
    console.log(err);
  }
}

export function* lessTwo({ payload }: ActionType<typeof actions.lessTwo>) {
  try {
    let { incorrect } = payload;
    let lessOne = incorrect[Math.floor(Math.random() * incorrect.length)];
    incorrect.splice(incorrect.indexOf(lessOne), 1);
    let lessTwo = incorrect[Math.floor(Math.random() * incorrect.length)];
    yield put(
      actions.hiddenTwo({
        esconder1: lessOne,
        esconder2: lessTwo,
      })
    );
    incorrect.push(lessOne);
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest('@game/CLICK_QUESTION', click),
  takeLatest('@game/LESS_TWO_ALTERNATIVE', lessTwo),
]);
