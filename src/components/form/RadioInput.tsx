import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export interface RadioProps {
  backgroundColor: string
  borderColor: string
  selectedBackgroundColor: string
  selectedBorderColor: string
  selected: boolean
  iconColor: string
}

export default class RadioInput extends Component<RadioProps> {
  render() {
    const {
      selected,
      iconColor,
      selectedBackgroundColor,
      selectedBorderColor,
      backgroundColor,
      borderColor,
    } = this.props
    const background = selected ? selectedBackgroundColor : backgroundColor
    const border = selected ? selectedBorderColor : borderColor

    return (
      <View style={[{ backgroundColor: background, borderColor: border }, styles.wrapper]}>
        <View style={styles.iconWrapper}>
          {selected && <Icon name="md-checkmark" color={iconColor} size={20} />}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginTop: 2,
  },
})
