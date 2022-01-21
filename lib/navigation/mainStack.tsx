import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DayScreen from '../presentation/screens/DayScreen/dayScreen';
import MainScreen from '../presentation/screens/MainScreen/mainScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        component={MainScreen}
        options={{headerTitle: 'Mood monitor'}}
        name="MainScreen"
      />
      <Stack.Screen
        component={DayScreen}
        options={{headerTitle: "Day's mood"}}
        name="DayScreen"
      />
    </Stack.Navigator>
  );
};

export default MainStack;
