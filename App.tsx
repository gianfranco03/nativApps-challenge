import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';

import {MoviesState} from './src/context/Movies/MoviesState';
import RootScreen from './src/screens/Root';

import colors from './src/constants/colors';
import {fontsConfig} from './src/constants/typography';

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
    <MoviesState>
      <PaperProvider theme={theme}>
        <RootScreen />
      </PaperProvider>
    </MoviesState>
  );
};

export default App;
