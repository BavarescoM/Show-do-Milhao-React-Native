import { action } from 'typesafe-actions';

export function play() {
  return action('@game/PLAY');
}

export function clickQuestion({
  entrada,
  vlCerto,
  qAtual,
  reward,
}: {
  entrada: string;
  vlCerto: string;
  qAtual: number;
  reward: number;
}) {
  return action('@game/CLICK_QUESTION', {
    entrada,
    vlCerto,
    qAtual,
    reward,
  });
}

export function colorsQuestion({
  entrada,
  vlCerto,
}: {
  entrada: string;
  vlCerto: string;
}) {
  return action('@game/COLORS_QUESTION', {
    entrada,
    vlCerto,
  });
}

export function clearQuestion() {
  return action('@game/CLEAR_QUESTION');
}

export function nextQuestion() {
  return action('@game/NEXT_QUESTION');
}

export function disableButton() {
  return action('@game/DISABLE_BUTTON');
}

export function enableButton() {
  return action('@game/ENABLE_BUTTON');
}

export function setLoser() {
  return action('@game/SET_LOSER');
}

export function setWinner() {
  return action('@game/SET_WINNER');
}

export function setStopGame() {
  return action('@game/STOP_GAME');
}

export function setTimeleft() {
  return action('@game/SET_TIMELEFT');
}

export function setJump() {
  return action('@game/SET_JUMP');
}
export function clickOnce({ disableBtn }: { disableBtn: number }) {
  return action('@game/CLICK_ONCE', { disableBtn });
}

export function lessTwo({ incorrect }: { incorrect: Array<string> }) {
  return action('@game/LESS_TWO_ALTERNATIVE', { incorrect });
}

export function showTwo() {
  return action('@game/SHOW_TWO');
}

export function hiddenTwo({
  esconder1,
  esconder2,
}: {
  esconder1: string;
  esconder2: string;
}) {
  return action('@game/HIDDEN_TWO', { esconder1, esconder2 });
}

export function tema({ vlTema }: { vlTema: number }) {
  return action('@game/THEME_SWITCHER', { vlTema });
}


export function setDifficulty({ vlDif }: { vlDif: string }) {
  return action('@game/SET_DIFFICULTY', { vlDif });
}

export function setQuestions({ vlQuestions }: { vlQuestions: any }) {
  return action('@game/SET_QUESTIONS', { vlQuestions });
}
