import * as React from 'react';
import {  useSelector } from 'react-redux';
import { GameState } from './store/modules/game/types';
import { ThemeProvider } from 'styled-components/native';
import { color } from './colors';
import Quiz from './screens/Quiz/Quiz';

export default function ThemeRedux() {
  const VR = useSelector((state: GameState) => state.game);
  const colors = color[VR.tema];
  const theme = {
    quiz: {
      fundo: colors.fundo,
    },
    home: {
      //loser,comeco.vitoria,parar
      fundoHome: [colors.head, colors.head, colors.head, colors.pause],
      txtHome: colors.textAndIcons,
      txtDif: colors.textAndIcons,
    },
    ask: {
      fundo: colors.head,
      txtPergunta: colors.textAndIcons,
      barraCheia: colors.textAndIcons,
      barraCompletar: colors.fundo,
    },
    answer: {
      alternativeFundoPadrao: 'transparent',
      alternativeFundoCerto: colors.right,
      alternativeFundoErrado: colors.wrong,
      txtAlternativa: colors.textAndIcons,
      ball: colors.head,
      border: colors.head,
    },
    info: {
      reward: colors.head,
      txtReward: colors.textAndIcons,
      colorIcon: colors.textAndIcons,
    },
    help: {
      container: colors.fundo,
      txtHelp: colors.head,
      disabled: colors.disabled,
      enabled: colors.fundo,
      border: `1px solid ${colors.head}`,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Quiz />
    </ThemeProvider>
  );
}
