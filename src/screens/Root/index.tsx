import React from 'react';
import {View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import Navigator from '../../navigation';

const RootScreen = () => {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  );
};

export default RootScreen;
