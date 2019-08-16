import { createStackNavigator, createAppContainer } from 'react-navigation'

import Welcome from '../screens/Welcome/Welcome'

export const Screens = {
  Welcome: 'Welcome',
}

const Stack = createStackNavigator(
  {
    [Screens.Welcome]: {
      screen: Welcome,
    },
  },
  {
    headerMode: 'none',
  },
)

export default createAppContainer(Stack)
