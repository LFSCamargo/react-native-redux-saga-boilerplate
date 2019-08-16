import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { colors } from '../../utils'

interface Props {
  labelText: string
  labelTextSize: number
  labelColor: string
  textColor: string
  borderBottomColor: string
  inputType: 'email' | 'password' | 'text'
  customStyle: ViewStyle
  onChangeText: (text: string) => void
  showCheckmark: boolean
  autoFocus?: boolean
  labelTextWeight?: string
  inputStyle?: ViewStyle | TextStyle
  placeholder?: string
  defaultValue?: string
}

interface State {
  secureInput: boolean
  scaleCheckmarkValue: Animated.Value
  inputValue: string
}

export default class InputField extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      secureInput: !(props.inputType === 'text' || props.inputType === 'email'),
      scaleCheckmarkValue: new Animated.Value(0),
      inputValue: '',
    }
    this.toggleShowPassword = this.toggleShowPassword.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
  }

  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput })
  }

  onChangeText(text: string) {
    this.setState({ inputValue: text })
    this.props.onChangeText(text)
  }

  render() {
    const {
      labelText,
      labelTextSize,
      labelTextWeight,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      inputStyle,
      showCheckmark,
      autoFocus,
      placeholder,
    } = this.props
    const { secureInput, inputValue } = this.state
    const fontSize = labelTextSize || 14
    const fontWeight = labelTextWeight || '700'
    const color = labelColor || colors.white
    const inputColor = textColor || colors.white
    const borderBottom = borderBottomColor || 'transparent'
    const keyboardType = inputType === 'email' ? 'email-address' : 'default'
    const customInputStyle = inputStyle || {}
    if (!inputStyle || (inputStyle && !inputStyle.paddingBottom)) {
      customInputStyle.paddingBottom = 5
    }

    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text
          // @ts-ignore
          style={[{ fontWeight, color, fontSize }, styles.label]}
        >
          {labelText}
        </Text>
        {inputType === 'password' ? (
          <TouchableOpacity style={styles.showButton} onPress={this.toggleShowPassword}>
            <Text style={[styles.showButtonText, { color: inputColor }]}>{secureInput ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        ) : null}
        <View style={styles.checkmarkWrapper}>
          {showCheckmark && <Icon name="check" color={inputColor} size={20} />}
        </View>
        <TextInput
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            inputStyle,
            styles.inputField,
          ]}
          secureTextEntry={secureInput}
          onChangeText={this.onChangeText}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          defaultValue={inputValue}
          value={inputValue}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  label: {
    marginBottom: 20,
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 10,
    width: '100%'
  },
  showButton: {
    position: 'absolute',
    right: 0,
  },
  showButtonText: {
    fontWeight: '700',
  },
  checkmarkWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 12,
  },
})
