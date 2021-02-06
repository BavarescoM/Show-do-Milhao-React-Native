import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Alternative } from './Alternative';

import { Text, View } from 'react-native';
interface Props {
  alternative: any;
  verif: Function;
  verdadeiro: string;
  falso: string;
  btnDisable: boolean;
  esconder1: string;
  esconder2: string;
  endGame: number;
}

export function Answer({
  alternative,
  verif,
  verdadeiro,
  falso,
  btnDisable,
  esconder1,
  esconder2,
  endGame,
}: Props) {
  const [data, setData] = useState();
  useEffect(() => {
    function giveAlter(alter) {
      const sort = [alter.correct_answer, ...alter.incorrect_answers].sort(
        () => Math.round(Math.random()) - 0.1
      );
      return sort;
    }
    setData(giveAlter(alternative));
  }, [alternative]);

  return (
    <S.ContainerAnswer>
      <S.Lista
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index, separator }) => (
          <>
            <Alternative
              verif={() => verif(item, alternative.correct_answer)}
              certo={verdadeiro === item ? true : falso === item ? false : null}
              txtAlter={decodeURIComponent(item)}
              opcao={index + 1}
              disabled={btnDisable}
              helpTwo={esconder1 === item || esconder2 === item ? true : false}
            />
            <S.Separator />
          </>
        )}
      />
    </S.ContainerAnswer>
  );
}
