import Styled from 'styled-components/native';

export const ContainerHome = Styled.View`
  background-color: ${(props) => props.theme.home.fundoHome[props.fundo]};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TxtS = Styled.Text`
  color: ${(props) => props.theme.home.txtHome}
`;

export const ContainerTheme = Styled.View`
  flex-direction: row;
  margin: 5px;
`;

export const ContainerDif = Styled.View`
  flex: 1;  
`;

export const TxtDif = Styled.Text`
  color: ${(props) => props.theme.home.txtDif};
  text-align: center;

`;

export const BtnDif = Styled.TouchableOpacity`
  padding: 20px;
  border: 1px solid ${(props) => props.theme.home.txtDif};
  border-radius: 20px;
  margin: 5px;
`;

export const Lista = Styled.FlatList`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;
export const Btn = Styled.TouchableOpacity`
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  border: 1px solid black;
`;

