import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStack from '../../../navigation/mainStack';

export const Layout = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
