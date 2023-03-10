import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import LocationSearchScreen from '../screens/LocationSearch';
import GuestsScreen from '../screens/Guests';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="location search"
          component={LocationSearchScreen}
          options={{title: 'Search for your location'}}
        />
        <Stack.Screen
          name="guests"
          component={GuestsScreen}
          options={{title: 'How many people?'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
