import * as React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { colors } from '../../utils'
import ButtonComponent from './ButtonComponent'

interface Props {
  text: string
  textColor?: string
  textSize?: string
  textWeight?: string
  textAlign?: string
  background?: string
  borderColor?: string
  icon?: React.ReactNode
  iconPosition?: string
  handleOnPress?: () => any
  disabled?: boolean
  loading?: boolean
}

const RoundedButton: React.FunctionComponent<Props> = (props: Props) => {
  const {
    loading,
    disabled,
    text,
    textColor,
    background,
    icon,
    handleOnPress,
    textSize,
    textWeight,
    iconPosition,
    textAlign,
    borderColor,
  } = props
  const backgroundColor = background || 'transparent'
  const color = textColor || colors.black
  const fontSize = textSize || 16
  const fontWeight = textWeight || '600'
  const alignPosition = textAlign || 'center'
  const iconLocation = iconPosition || 'left'
  const border = borderColor || colors.white
  const opacityStyle = disabled || loading ? 0.5 : 1
  const textOpacity = loading ? 0 : 1
  const rippleColor = backgroundColor === 'transparent' ? color : 'rgba(0,0,0,0.4)'

  return (
    <ButtonComponent
      rippleColor={rippleColor}
      opacity={opacityStyle}
      handleOnPress={handleOnPress}
      borderColor={border}
      backgroundColor={backgroundColor}
      disabled={disabled}
      loading={loading}
    >
      <View style={styles.buttonTextWrapper}>
        {iconLocation === 'left' && !loading ? icon : null}
        {loading ? (
          <View style={styles.loaderContainer}>
            <Image style={styles.loaderImage} source={require('../../img/whiteLoader.gif')} />
          </View>
        ) : null}
        <Text
          // @ts-ignore
          style={[
            {
              opacity: textOpacity,
              color,
              fontSize,
              fontWeight,
              textAlign: alignPosition,
            },
            styles.buttonText,
          ]}
        >
          {text}
        </Text>
        {iconLocation === 'right' && !loading ? icon : null}
      </View>
    </ButtonComponent>
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

export default RoundedButton
