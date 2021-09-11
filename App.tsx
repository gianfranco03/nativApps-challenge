import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';

import RootScreen from './src/screens/Root';

import colors from './src/constants/colors';
import { fontsConfig } from './src/constants/typography';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontsConfig),
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <RootScreen />
    </PaperProvider>
  );
};

export default App;
