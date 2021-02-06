import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { myQuestions, info } from '.././Data';
import { Info, Ask, Help, Answer, Home } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { GameState } from '../../store/createStore';
import * as S from './styles.ts';
//S. Components de estilo

import * as AR from '../../store/modules/game/actions';
//AR. ações do redux

export default function Quiz() {
  const VR = useSelector((state: GameState) => state.game);
  // VR = Valores do redux
  // console.log(VR)
  const dispatch = useDispatch();

  useEffect(() => {
    if (VR.btnDisable) return;
    if (VR.endGame) return;
    if (!VR.timeLeft) {
      dispatch(AR.setLoser());
      return;
    }
    const timerId = setInterval(() => {
      dispatch(AR.setTimeleft());
    }, 1000);
    return () => clearInterval(timerId);
  }, [VR.timeLeft, VR.endGame, VR.btnDisable]);

  function recomecar() {
    dispatch(AR.showTwo());
    dispatch(AR.play());
    dispatch(AR.clearQuestion());
  }
  
  function verif(vlEntrada: string,vlCerto:string) {
    dispatch(
      AR.clickQuestion({
        entrada: vlEntrada,
        vlCerto: vlCerto,
        qAtual: VR.questaoAtual + 1,
        reward: VR.reward,
      })
    );
  }
  function stopGame() {
    dispatch(AR.setStopGame());
  }

  function pularQuestao(vl: number) {
    dispatch(AR.showTwo());
    dispatch(AR.setJump());
    dispatch(AR.clickOnce({ disableBtn: vl }));
  }

  function handleLessTwo(vl: number) {
    dispatch(
      AR.lessTwo({ incorrect: VR.questions[VR.questaoAtual].incorrect_answers })
    );
    dispatch(AR.clickOnce({ disableBtn: vl }));
  }
  function tema(vlTema: number) {
    dispatch(AR.tema({ vlTema: vlTema }));
  }

  function difficulty(vlDif: string) {
    dispatch(AR.setDifficulty({ vlDif: vlDif }));
  }
  function setQuestions(vlQuestions) {
    dispatch(AR.setQuestions({vlQuestions:vlQuestions}))
    dispatch(AR.play());
    dispatch(AR.clearQuestion());
    dispatch(AR.setDifficulty({vlDif: ''}))
    
  }

  return (
    <S.Container>
      {VR.endGame ? (
        <Home
          setQuestions={setQuestions}
          difficulty={difficulty}
          vldifficulty={VR.difficulty}
          tema={tema}
          loser={VR.loser}
          end={VR.winner}
          start={VR.start}
          stop={VR.stop}
          vlReward={info[VR.reward]}
          visible={VR.endGame}
          recomecar={() => {
            recomecar();
          }}
        />
      ) : (
        <S.Container>
          <Ask
            question={VR.questions[VR.questaoAtual].question}
            timeLeft={VR.timeLeft}
          />

          <Answer
            esconder1={VR.esconder1}
            esconder2={VR.esconder2}
            endGame={VR.timeLeft}
            btnDisable={VR.btnDisable}
            verdadeiro={VR.verdadeiro}
            falso={VR.falso}
            alternative={VR.questions[VR.questaoAtual]}
            verif={verif}
          />
          <Info reward={info[VR.reward]} />

          <Help
            parar={info[VR.reward].parar}
            stopGame={stopGame}
            handleHelp={pularQuestao}
            handleLessTwo={handleLessTwo}
            btnDisable={VR.btnDisable}
            clickOnce={VR.clickOnce}
          />
        </S.Container>
      )}
    </S.Container>
  );
}
