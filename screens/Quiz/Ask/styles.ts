import Styled from 'styled-components/native';

export const ContainerAsk = Styled.View`
  justify-content: center;
  flex: 2;  
  background-color: ${(props) => props.theme.ask.fundo};
  padding-bottom: 10px;
  padding-right: 20px;
`;

export const Pergunta = Styled.Text`
  color: ${(props) => props.theme.ask.txtPergunta};
  flex: 1;
  text-align: center;
`;

export const ContainerStatusBar = Styled.View`
  height:4px;
  flex-direction: row;
`;

export const StatusBarCheia = Styled.View`
  background-color: ${(props) => props.theme.ask.barraCheia};
  flex: ${(props) => props.tempo};
`;

export const StatusBarCompletar = Styled.View`
  background-color: ${(props) => props.theme.ask.barraCompletar};           
  flex: ${(props) => props.completar};
`;

export const Container = Styled.View`
  flex-direction: row;
  flex:2;
`;

export const ContainerQ = Styled.View`
  flex: 1;  
  margin: 5px;
`;

export const ContainerH = Styled.View`
  flex: 2;  
`;


