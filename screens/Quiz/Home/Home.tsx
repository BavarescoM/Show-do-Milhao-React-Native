import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as S from '../styles';
import { Start, Loser, Win, Stop, DificultOptions } from './index';

interface Props {
  visible: boolean;
  recomecar: Function;
  vlReward: any;
  start: boolean;
  end: boolean;
  loser: boolean;
  stop: boolean;
  vldifficulty: string;
  tema: Function;
  difficulty: Function;
  setQuestions: Function;
}

export function Home({
  visible,
  recomecar,
  start,
  end,
  loser,
  vlReward,
  stop,
  tema,
  difficulty,
  vldifficulty,
  setQuestions,
}: Props) {
  return (
    <View style={{ flex: 1 }}>
      {vldifficulty.length >= 1 && (
        <DificultOptions
          vldifficulty={vldifficulty}
          setQuestions={setQuestions}
        />
      )}
      {start && (
        <Start recomecar={recomecar} tema={tema} difficulty={difficulty} />
      )}
      {loser && <Loser recomecar={recomecar} vlDerrota={vlReward.errar} />}
      {end && <Win recomecar={recomecar} vlVitoria={vlReward.acertar} />}
      {stop && <Stop recomecar={recomecar} vlStop={vlReward.parar} />}
    </View>
  );
}
