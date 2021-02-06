import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex: 1;
    margin-top: 40px;
    background: ${props => props.theme.quiz.fundo};
`;