import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DayScreen from '../presentation/screens/DayScreen/dayScreen';
import MainScreen from '../presentation/screens/MainScreen/mainScreen';
import React from 'react';
import {Day} from '../redux/dates/dates.constants';

export type StackParamList = {
  MainScreen: {};
  DayScreen: {day: Day};
};

const Stack = createNativeStackNavigator<StackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        component={MainScreen}
        options={{
          headerTitle: 'Mood monitor',
          headerTitleStyle: {color: 'white'},
          headerStyle: {backgroundColor: '#042A2B'},
        }}
        name="MainScreen"
      />
      <Stack.Screen
        component={DayScreen}
        options={{
          headerTitle: "Day's mood",
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#042A2B'},
        }}
        name="DayScreen"
      />
    </Stack.Navigator>
  );
};

export default MainStack;
