import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as S from './styles';
interface Props {
  reward?: Object;
}

export function Info({ reward }: Props) {
  return (
    <S.ContainerInfo>
      {reward.parar ? (
        <S.ContainerReward>
          <S.SIcon name="stop-circle-outline" />
          <S.Reward>R${reward.parar}</S.Reward>
        </S.ContainerReward>
      ) : (
        <S.ContainerReward></S.ContainerReward>
      )}
      <S.ContainerReward>
        <S.SIcon name="check" />
        <S.Reward>R$ {reward.acertar}</S.Reward>
      </S.ContainerReward>
      <S.ContainerReward>
        <S.SIcon name="cancel" />
        <S.Reward>R${reward.errar} </S.Reward>
      </S.ContainerReward>
    </S.ContainerInfo>
  );
}
