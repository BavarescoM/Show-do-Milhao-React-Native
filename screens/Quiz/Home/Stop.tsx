import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import * as S from './styles';

export function Stop({
  recomecar,
  vlStop,
}: {
  recomecar: Function;
  vlStop: string;
}) {
  return (
    <S.ContainerHome fundo={3}>
      <S.TxtS>Você Parou</S.TxtS>
      <S.TxtS>Sua Recompensa foi de: R$ {vlStop}</S.TxtS>
      <TouchableOpacity onPress={() => recomecar()}>
        <S.TxtS>Recomeçar</S.TxtS>
      </TouchableOpacity>
    </S.ContainerHome>
  );
}
