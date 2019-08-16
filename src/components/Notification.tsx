import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, TouchableOpacity, StyleSheet, Easing, Animated } from 'react-native'
import { colors } from '../utils'

interface Props {
  showNotification: boolean,
  type: string,
  firstLine: string,
  secondLine: string,
  handleCloseNotification: () => any,
}

export default class Notification extends Component<Props> {
  state = {
    positionValue: new Animated.Value(-60),
  }

  animateNotification = (value: number) => {
    const { positionValue } = this.state
    Animated.timing(positionValue, {
      toValue: value,
      duration: 300,
      // @ts-ignore
      velocity: 3,
      tension: 2,
      friction: 8,
      // @ts-ignore
      easing: Easing.easeOutBack,
    }).start()
  }

  render() {
    const { type, firstLine, secondLine, showNotification } = this.props
    showNotification ? this.animateNotification(0) : this.animateNotification(-60)
    const { positionValue } = this.state
    return (
      <Animated.View style={[{ marginBottom: positionValue }, styles.wrapper]}>
        <View style={styles.errorMessageContainer}>
          <View style={styles.errorMessage}>
            <Text style={styles.errorText}>{type}</Text>
            <Text>{firstLine}</Text>
          </View>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.handleCloseNotification()}>
          <Icon name="times" size={20} color={colors.lightGray} />
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    height: 60,
    padding: 10,
  },
  notificationContent: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },
  errorMessage: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
    fontSize: 14,
  },
  errorMessageContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 999,
  },
})
