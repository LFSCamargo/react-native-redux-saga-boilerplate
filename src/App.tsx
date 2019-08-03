import * as React from 'react';
import { ThemeProvider } from 'styled-components'
import Navigator from './navigation/Navigation';

interface Props {}

const theme = {
  primary: '#fff',
  secondary: '#000',
}

const App: React.FunctionComponent<Props> = ({}) => (
  <ThemeProvider theme={theme}>
    <Navigator />
  </ThemeProvider>
)

export default App;