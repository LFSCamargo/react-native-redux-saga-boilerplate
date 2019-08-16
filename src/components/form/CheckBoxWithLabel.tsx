import * as React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, ViewStyle, TextStyle } from 'react-native'
import RadioInput, { RadioProps } from './RadioInput'
import { colors } from '../../utils'

interface Props extends RadioProps {
  label: string
  subtitle: string
  onTap?: () => any
  containerStyle?: ViewStyle
  renderDivider?: boolean
}

const CheckBoxWithLabel: React.FunctionComponent<Props> = props => (
  <View style={[props.containerStyle, styles.privacyOptionItem]}>
    <TouchableOpacity
      style={styles.privacyOptionItem}
      activeOpacity={1}
      onPress={() => (props.onTap ? props.onTap() : null)}
    >
      <View>
        <Text style={styles.privacyOptionTitle}>{props.label}</Text>
        <Text style={styles.privacyOptionDescription}>{props.subtitle}</Text>
        <View style={styles.privacyRadioInput}>
          <RadioInput {...props} />
        </View>
      </View>
    </TouchableOpacity>
    {props.renderDivider && <View style={styles.divider} />}
  </View>
)

CheckBoxWithLabel.defaultProps = {
  onTap: () => {},
  containerStyle: {},
  renderDivider: false,
}

const styles = StyleSheet.create({
  privacyOptions: {
    marginTop: 40,
  } as ViewStyle,
  privacyHeading: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightBlack,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  } as TextStyle,
  privacyOptionItem: {
    width: '100%',
    padding: 10,
  } as ViewStyle,
  privacyOptionTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightBlack,
  } as TextStyle,
  privacyOptionDescription: {
    fontSize: 14,
    fontWeight: '200',
    color: colors.lightBlack,
    marginTop: 10,
    paddingRight: 90,
  } as TextStyle,
  privacyRadioInput: {
    position: 'absolute',
    top: 0,
    right: 0,
  } as ViewStyle,
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray06,
    height: 1,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  } as ViewStyle,
})

export default CheckBoxWithLabel
