import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type GameAction = ActionType<typeof actions>;

export interface GameState {
  verdadeiro: string | null;
  falso: string | null;
  btnDisable: boolean;
  start: boolean;
  questaoAtual: number;
  reward: number;
  endGame: boolean;
  timeLeft: number;
  winner: boolean;
  loser: boolean;
  stop: boolean;
  esconder1: string | null;
  esconder2: string | null;
  clickOnce: Array<number>;
  tema: number;
  difficulty: string;
  questions: any;
}
