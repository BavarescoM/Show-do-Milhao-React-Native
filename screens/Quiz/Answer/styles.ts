import Styled from 'styled-components/native';

export const BtnAwnser = Styled.TouchableOpacity`
    display: ${(props) => (props.helpTwo ? 'none' : 'flex')}; 
    background-color: ${(props) =>
      props.certo === null
        ? props.theme.answer.alternativeFundoPadrao
        : props.certo
        ? props.theme.answer.alternativeFundoCerto
        : props.theme.answer.alternativeFundoErrado};
    border: 1px solid ${(props) => props.theme.answer.border};
    padding: 3px;
    border-radius: 5px;
`;

export const TxtAlternativa = Styled.Text`
  color: ${(props) => props.theme.answer.txtAlternativa}
  padding: 2px;
  text-transform: uppercase;
`;

export const ContainerAnswer = Styled.View`
  flex: 5;
  
   
`;

export const ContainerAlternativa = Styled.View`
  flex-direction: row;
  padding: 2px;
  align-items: center;
`;

export const Ball = Styled.View`
  margin-right: 5px;
  justify-content:center;
  align-items: center;
  width:30px
  height:30px
  border-radius:80px;
  background-color: ${(props) => props.theme.answer.ball}
`;


export const Lista = Styled.FlatList`
  flex: 5;
  
  margin: 10px;  
  justify-content: space-around;

`;

export const Separator = Styled.View`
  margin: 5px;
`;


