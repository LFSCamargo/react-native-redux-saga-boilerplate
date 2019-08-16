import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  text?: string
  icon?: React.ReactElement
  handleButtonPress: () => any
  location: string
  color: string
}

export default class NavBarButton extends Component<Props> {
  render() {
    const { location, text, color, icon, handleButtonPress } = this.props;

    const marginPosition = location === 'right' ? { marginRight: 20 } : { marginLeft: 20 }

    return (
      <TouchableOpacity onPress={handleButtonPress}>
        {text ? (
          <Text style={[{ color }, marginPosition, styles.buttonText]}>{text}</Text>
        ) : (
          <View style={marginPosition}>{icon}</View>
        )}
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
  },
});