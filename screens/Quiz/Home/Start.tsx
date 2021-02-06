import React, { useState, useEffect } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import * as S from './styles';

export function Start({
  recomecar,
  tema,
  difficulty,
}: {
  difficulty: Function;
  recomecar: Function;
  tema: Function;
}) {
  return (
    <S.ContainerHome fundo={1}>
      <S.TxtS>Selecione um Tema</S.TxtS>
      <S.ContainerTheme>
        <S.Btn onPress={() => tema(0)}>
          <Text>Azul</Text>
        </S.Btn>
        <S.Btn onPress={() => tema(1)}>
          <Text>Cinza</Text>
        </S.Btn>
        <S.Btn onPress={() => tema(2)}>
          <Text>Test</Text>
        </S.Btn>
      </S.ContainerTheme>
      <S.TxtS>Selecione a dificuldade</S.TxtS>
      <S.ContainerTheme>
        <S.Btn onPress={() => difficulty('easy')}>
          <Text>Easy</Text>
        </S.Btn>
        <S.Btn onPress={() => difficulty('medium')}>
          <Text>Medium</Text>
        </S.Btn>
        <S.Btn onPress={() => difficulty('hard')}>
          <Text>Hard</Text>
        </S.Btn>
      </S.ContainerTheme>
    </S.ContainerHome>
  );
}
