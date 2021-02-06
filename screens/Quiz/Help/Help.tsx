import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';

interface Props {
  parar?: string;
  stopGame: Function;
  handleHelp: Function;
  handleLessTwo: Function;
  btnDisable: boolean;
  clickOnce: any;
}

export function Help({
  parar,
  stopGame,
  handleHelp,
  handleLessTwo,
  btnDisable,
  clickOnce,
}: Props) {
  return (
    <S.ContainerHelp>
      {parar ? (
        <S.BtnHelp onPress={() => stopGame()} disabled={btnDisable}>
          <S.TextHelp>
            <S.SIcon name="stop-circle-outline" />
          </S.TextHelp>
        </S.BtnHelp>
      ) : (
        <S.BtnHelp>
          <S.TextHelp></S.TextHelp>
        </S.BtnHelp>
      )}
      <S.BtnHelp
        onPress={() => handleLessTwo(0)}
        disabled={btnDisable || clickOnce.includes(0)}
        backdis={clickOnce.includes(0)}>
        <S.SIcon name="numeric-2-circle-outline" />
      </S.BtnHelp>
      <S.BtnHelp
        onPress={() => handleHelp(1)}
        disabled={btnDisable || clickOnce.includes(1)}
        backdis={clickOnce.includes(1)}>
        <S.SIcon name="debug-step-over" />
      </S.BtnHelp>
      <S.BtnHelp
        onPress={() => handleHelp(2)}
        disabled={btnDisable || clickOnce.includes(2)}
        backdis={clickOnce.includes(2)}>
        <S.SIcon name="debug-step-over" />
      </S.BtnHelp>
      <S.BtnHelp
        onPress={() => handleHelp(3)}
        disabled={btnDisable || clickOnce.includes(3)}
        backdis={clickOnce.includes(3)}>
        <S.SIcon name="debug-step-over" />
      </S.BtnHelp>
    </S.ContainerHelp>
  );
}
