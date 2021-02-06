import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import * as S from './styles';

export function Win({
  recomecar,
  vlVitoria,
}: {
  recomecar: Function;
  vlVitoria: string;
}) {
  return (
    <S.ContainerHome fundo={2}>
      <S.TxtS>Você Ganhou</S.TxtS>
      <S.TxtS>Sua Recompensa foi de: R$ {vlVitoria}</S.TxtS>
      <TouchableOpacity onPress={() => recomecar()}>
        <S.TxtS>Recomeçar</S.TxtS>
      </TouchableOpacity>
    </S.ContainerHome>
  );
}
