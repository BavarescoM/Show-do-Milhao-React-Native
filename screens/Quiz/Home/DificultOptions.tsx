import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import * as S from './styles';
import * as easy from '../../Data/easy/index';
import * as medium from '../../Data/medium/index';
import * as hard from '../../Data/hard/index';

interface Props {
  vldifficulty: string;
  setQuestions: Function;
}

export function DificultOptions({ vldifficulty, setQuestions }: Props) {
  function category(category) {
    const keyLen = Object.keys(category).length;
    let newArr = [];
    let sortAlter = [];
    for (let i = 0; i < keyLen; i++) {
      const key = Object.keys(category)[i];
      newArr.push({
        categoryShow: decodeURIComponent(category[key][i].category),
        category: category[key],
      });
    }
    return newArr;
  }

  // category(easy);
  const Lista = ({ data }) => {
    return (
      <S.Lista
        style={{ flex: 1 }}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <S.BtnDif onPress={() => setQuestions(item.category)}>
            <S.TxtDif>{item.categoryShow}</S.TxtDif>
          </S.BtnDif>
        )}
      />
    );
  };

  return (
    <S.ContainerDif>
      {vldifficulty === 'easy' && (
        <Lista data={category(easy)} questions={easy} />
      )}
      {vldifficulty === 'medium' && (
        <Lista data={category(medium)} questions={medium} />
      )}
      {vldifficulty === 'hard' && (
        <Lista data={category(hard)} questions={hard} />
      )}
    </S.ContainerDif>
  );
}
