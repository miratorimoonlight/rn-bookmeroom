import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

export default function ExploreNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="search result"
        component={SearchResultsTabNavigator}
        options={{title: 'Search result'}}
      />
    </Stack.Navigator>
  );
}
