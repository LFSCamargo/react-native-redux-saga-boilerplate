import { Dimensions } from 'react-native'

export const deviceSize = (): 'small' | 'large' | 'medium' => {
  const windowWidth = Dimensions.get('window').width
  if (windowWidth === 320) {
    return 'small'
  }
  if (windowWidth === 414) {
    return 'large'
  }
  return 'medium'
}

export const colors = {
  black: '#000000',
  lightBlack: '#484848',
  white: '#ffffff',
  green01: '#008388',
  green02: '#02656b',
  darkOrange: '#d93900',
  lightGray: '#d8d8d8',
  pink: '#fc4c54',
  gray01: '#f3f3f3',
  gray02: '#919191',
  gray03: '#b3b3b3',
  gray04: '#484848',
  gray05: '#dadada',
  gray06: '#ebebeb',
  gray07: '#f2f2f2',
  brown01: '#ad8763',
  brown02: '#7d4918',
  blue: '#4995cd',
}
