import * as React from 'react'
import { Platform, View, TouchableOpacity, TouchableNativeFeedback, StyleSheet } from 'react-native'

interface Props {
  borderColor: string
  opacity: number
  backgroundColor: string
  handleOnPress: () => any
  disabled: boolean
  loading: boolean
  rippleColor: string
}

const ButtonComponent: React.FunctionComponent<Props> = props => {
  const {
    disabled,
    loading,
    opacity,
    backgroundColor,
    borderColor,
    handleOnPress,
    rippleColor,
  } = props
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        style={[{ opacity, backgroundColor, borderColor }, styles.iosWrapper]}
        onPress={handleOnPress}
        activeOpacity={0.6}
        disabled={disabled || loading}
      >
        {props.children}
      </TouchableOpacity>
    )
  }
  return (
    <View style={[styles.androidWrapper, { borderColor }]}>
      <TouchableNativeFeedback
        useForeground={true}
        onPress={handleOnPress}
        disabled={disabled || loading}
        background={TouchableNativeFeedback.Ripple(rippleColor, false)}
      >
        <View style={[{ opacity, backgroundColor }, styles.androidButtonText]}>
          {props.children}
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  iosWrapper: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 15,
    alignItems: 'center',
  },
  androidWrapper: {
    overflow: 'hidden',
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 15,
  },
  androidButtonText: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 12,
    paddingBottom: 12,
    alignItems: 'center',
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    width: '100%',
  },
  loaderContainer: {
    width: 90,
    height: 90,
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45,
  },
  loaderImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    marginLeft: -20,
    top: '50%',
    marginTop: -20,
  },
})

export default ButtonComponent
