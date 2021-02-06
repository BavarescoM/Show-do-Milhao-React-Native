import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const ContainerHelp = Styled.View`
  flex-direction: row;
  flex: 1;
  padding: 10px;
  background-color: ${(props) => props.theme.help.container};
  justify-content: space-between;
`;

export const TextHelp = Styled.Text`
  color: ${(props) => props.theme.help.txtHelp};
  text-align: center;  
`;

export const BtnHelp = Styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) =>
    props.backdis ? props.theme.help.disabled : props.theme.help.enabled};
 
 border-radius: 30px;
`;

export const SIcon = Styled(Icon).attrs({
  size: 36,
})`
    color: ${props => props.theme.info.colorIcon};

`;