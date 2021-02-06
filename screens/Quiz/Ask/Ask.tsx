import React, { useState, useEffect, useRef } from 'react';

import * as S from './styles';
interface Props {
  question: string;
  timeLeft: number;
}

export function Ask({ question, timeLeft }: Props) {
  return (
    <S.ContainerAsk>
      
      <S.Container>
        <S.ContainerQ>
          <S.Pergunta>{decodeURIComponent(question)}</S.Pergunta>
        </S.ContainerQ>
        <S.ContainerQ>
          <S.Pergunta>{timeLeft}s</S.Pergunta>
          <S.ContainerStatusBar>
            <S.StatusBarCheia tempo={timeLeft} />
            <S.StatusBarCompletar completar={30 - timeLeft} />
          </S.ContainerStatusBar>
        </S.ContainerQ>
      </S.Container>
    </S.ContainerAsk>
  );
}
