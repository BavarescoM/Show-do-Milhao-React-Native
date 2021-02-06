import React, { useState, useEffect } from 'react';
import * as S from './styles';

interface Props {
  verif: Function;
  disabled: boolean;
  certo: boolean | null;
  txtAlter: string;
  opcao: string;
  helpTwo: boolean;
}

export function Alternative({
  verif,
  certo,
  txtAlter,
  disabled,
  opcao,
  helpTwo,
}: Props) {
  return (
    <S.BtnAwnser
      disabled={disabled}
      onPress={verif}
      certo={certo}
      helpTwo={helpTwo}>
      <S.ContainerAlternativa>
        <S.Ball>
          <S.TxtAlternativa>{opcao}</S.TxtAlternativa>
        </S.Ball>
        <S.TxtAlternativa>{txtAlter}</S.TxtAlternativa>
      </S.ContainerAlternativa>
    </S.BtnAwnser>
  );
}
