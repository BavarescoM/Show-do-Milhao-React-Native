import { GameState, GameAction } from './types';

const initialState: GameState = {
  verdadeiro: null,
  falso: null,
  btnDisable: false,
  start: true,
  questaoAtual: 0,
  reward: 0,
  endGame: true,
  timeLeft: 30,
  winner: false,
  loser: false,
  stop: false,
  esconder1: null,
  esconder2: null,
  clickOnce: [],
  tema: 0,
  difficulty: '',
  questions: null,
};

export default function game(
  state = initialState,
  action: GameAction
): GameState {
  switch (action.type) {
    case '@game/PLAY':
      return {
        ...state,
        start: false,
        endGame: false,
        winner: false,
        loser: false,
        stop: false,        
        questaoAtual: 0,
        reward: 0,
        clickOnce: [],
      };

    case '@game/CLICK_QUESTION':
      return {
        ...state,
      };

    case '@game/COLORS_QUESTION':
      if (action.payload.entrada === action.payload.vlCerto) {
        return {
          ...state,
          verdadeiro: action.payload.vlCerto,
        };
      } else if (action.payload.entrada !== action.payload.vlCerto) {
        return {
          ...state,
          verdadeiro: action.payload.vlCerto,
          falso: action.payload.entrada,
        };
      }

    case '@game/CLEAR_QUESTION':
      return {
        ...state,
        verdadeiro: null,
        falso: null,
        timeLeft: 30,
      };

    case '@game/NEXT_QUESTION':
      return {
        ...state,
        questaoAtual: state.questaoAtual + 1,
        reward: state.reward + 1,
      };
    case '@game/SET_JUMP':
      return {
        ...state,
        questaoAtual: state.questaoAtual + 1,
        timeLeft: 30,
      };
    case '@game/CLICK_ONCE':
      return {
        ...state,
        clickOnce: [...state.clickOnce, action.payload.disableBtn],
      };

    case '@game/DISABLE_BUTTON':
      return {
        ...state,
        btnDisable: true,
      };

    case '@game/ENABLE_BUTTON':
      return {
        ...state,
        btnDisable: false,
      };
    case '@game/SET_LOSER':
      return {
        ...state,
        loser: true,
        endGame: true,
      };
    case '@game/SET_WINNER':
      return {
        ...state,
        winner: true,
        endGame: true,
      };
    case '@game/SET_TIMELEFT':
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    case '@game/STOP_GAME':
      return {
        ...state,
        stop: true,
        endGame: true,
      };
    case '@game/LESS_TWO_ALTERNATIVE':
      return {
        ...state,
      };
    case '@game/SHOW_TWO':
      return {
        ...state,
        esconder1: null,
        esconder2: null,
      };
    case '@game/HIDDEN_TWO':
      return {
        ...state,
        esconder1: action.payload.esconder1,
        esconder2: action.payload.esconder2,
      };
    case '@game/THEME_SWITCHER':
      return {
        ...state,
        tema: action.payload.vlTema,
      };
    case '@game/SET_DIFFICULTY':
      return {
        ...state,
        start: false,
        difficulty: action.payload.vlDif,
      };

    case '@game/SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload.vlQuestions,
      };

    default:
      return state;
  }
}
