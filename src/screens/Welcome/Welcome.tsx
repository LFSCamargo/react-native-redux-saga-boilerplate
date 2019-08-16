import * as React from 'react';
import styled from 'styled-components/native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { NavigationInjectedProps } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import InputField from '../../components/form/InputField';
import { colors } from '../../utils';
import { View, SafeAreaView, ScrollView } from 'react-native';
import RoundedButton from '../../components/buttons/RoundedButton';
import CheckBoxWithLabel from '../../components/form/CheckBoxWithLabel';

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const WelcomeText = styled.Text`
  font-size: 20;
  width: 100%;
  text-align: center;
  font-weight: 800;
  color: ${colors.lightBlack};
  padding: 10px 20px;
`;

export interface Props extends NavigationInjectedProps {}

const Welcome: React.FunctionComponent<Props> = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [text, setText] = React.useState('');
  const [checkBox, setCheckBox] = React.useState(false);
  return (
    <Wrapper>
      <ScrollView>
        <WelcomeText>Welcome to the React Native {'\n'} Redux Saga Boilerplate</WelcomeText>
        <InputField
          labelText="Plain Text Input"
          labelTextSize={14}
          labelColor={colors.green01}
          textColor={colors.green01}
          borderBottomColor={colors.green01}
          inputType="text"
          customStyle={{ marginHorizontal: 20, marginTop: 40, marginBottom: 15 }}
          onChangeText={setText}
          showCheckmark={text !== ''}
        />
        <InputField
          labelText="Email Input"
          labelTextSize={14}
          labelColor={colors.green01}
          textColor={colors.green01}
          borderBottomColor={colors.green01}
          inputType="email"
          customStyle={{ marginHorizontal: 20, marginVertical: 15 }}
          onChangeText={setName}
          showCheckmark={name !== ''}
        />
        <InputField
          labelText="Password Input"
          labelTextSize={14}
          labelColor={colors.green01}
          textColor={colors.green01}
          borderBottomColor={colors.green01}
          inputType="password"
          customStyle={{ marginVertical: 15, marginHorizontal: 20 }}
          onChangeText={setPassword}
          showCheckmark={password !== ''}
        />
        <CheckBoxWithLabel
          backgroundColor={colors.gray07}
          label="Check Box"
          subtitle="Thats a checkbox component"
          borderColor={colors.gray05}
          selectedBorderColor={colors.green01}
          selectedBackgroundColor={colors.green01}
          iconColor={colors.white}
          selected={checkBox}
          onTap={() => setCheckBox(!checkBox)}
        />
        <View style={{ width: 110, marginHorizontal: 20, marginVertical: 15 }}>
          <RoundedButton
            text="Create"
            textColor={colors.white}
            textAlign="left"
            background={colors.green01}
            borderColor="transparent"
            iconPosition="left"
            icon={
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  marginTop: -16,
                }}
              >
                <FontAwesomeIcon name="angle-right" color={colors.white} size={30} />
              </View>
            }
          />
        </View>
      </ScrollView>
      <KeyboardSpacer />
    </Wrapper>
  );
};

export default Welcome;
