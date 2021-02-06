import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { GameAction, GameState } from './modules/game/types';

export interface StoreState {
  game: GameState;
}

export type StoreAction = GameAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
