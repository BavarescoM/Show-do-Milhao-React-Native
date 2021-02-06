import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ContainerInfo = Styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Reward = Styled.Text`
  color:${(props) => props.theme.info.txtReward};
  font-size: 12px;
`;

export const SIcon = Styled(Icon).attrs({
  size: 36,
})`
    color: ${props => props.theme.info.colorIcon};
`;

export const ContainerReward = Styled.View`
  height: 70px;
  padding: 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.info.reward};
`;
