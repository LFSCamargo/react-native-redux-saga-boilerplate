import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableHighlight, StyleSheet, View } from 'react-native'
import { deviceSize, colors } from '../../utils'

const buttonSize = deviceSize() === 'small' ? 50 : 60
const buttonPadding = deviceSize() === 'small' ? 20 : 0

interface Props {
  disabled: boolean
  handleNextButton: () => any
}

const NextArrowButton = (props: Props) => {
  const { disabled, handleNextButton } = props
  const opacityStyle = disabled ? 0.2 : 0.6
  return (
    <View style={styles.buttonWrapper}>
      <TouchableHighlight
        style={[{ opacity: opacityStyle }, styles.button]}
        onPress={handleNextButton}
        disabled={disabled}
      >
        <Icon name="angle-right" color={colors.green01} size={32} style={styles.icon} />
      </TouchableHighlight>
    </View>
  )
}

NextArrowButton.defaultProps = {
  disabled: false,
  handleNextButton: () => null,
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
    paddingTop: buttonPadding,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: buttonSize,
    height: buttonSize,
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
  },
})

export default NextArrowButton;
