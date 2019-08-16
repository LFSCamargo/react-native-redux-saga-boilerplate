import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  color: string
  selectedColor: string
  addedToFavorite: boolean
  onPress: () => any
}

export default class HeartButton extends Component<Props> {
  render() {
    const { color, selectedColor, onPress, addedToFavorite } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <View>
          <Icon
            name={addedToFavorite ? 'heart' : 'heart-o'}
            color={addedToFavorite ? selectedColor : color}
            size={18}
          />

          <Icon
            name="heart-o"
            size={18}
            color={color}
            style={[{ display: addedToFavorite ? 'flex' : 'none' }, styles.selectedColor]}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  selectedColor: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
})
