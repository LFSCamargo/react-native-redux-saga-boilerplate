import * as React from 'react'
import styled from 'styled-components/native';
import { NavigationInjectedProps } from 'react-navigation';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  text-align: center;
  background-color: #F5FCFF;
`;

const Title = styled.Text`
  font-size: 22;
  font-weight: bold;
  text-align: center;
  margin-bottom: 14;
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 6;
`

export interface Props extends NavigationInjectedProps {}

const Welcome: React.FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <Title>Welcome to React Native</Title>
      <Instructions>This is a boilerplate made using </Instructions>
      <Instructions>Typescript + Redux Saga + React Navigation</Instructions>
      <Instructions>💙</Instructions>
    </Wrapper>
  )
}

export default Welcome;
