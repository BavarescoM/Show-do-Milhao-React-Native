import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import * as S from './styles';
import LottieView from 'lottie-react-native';

export function Loser({
  recomecar,
  vlDerrota,
}: {
  recomecar: Function;
  vlDerrota: string;
}) {
  return (
    <S.ContainerHome fundo={0}>
      <S.TxtS>Você Perdeu</S.TxtS>
      <S.TxtS>Sua Recompensa foi de: R$ {vlDerrota}</S.TxtS>
      <TouchableOpacity onPress={() => recomecar()}>
        <S.TxtS>Recomeçar</S.TxtS>
      </TouchableOpacity>

      <LottieView
        source={require('../../../assets/loser.json')}
        resizeMode="contain"
        autoSize
        loop
        autoPlay
      />
    </S.ContainerHome>
  );
}
