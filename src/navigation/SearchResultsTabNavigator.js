import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const TopTab = createMaterialTopTabNavigator();

export default function SearchResultsTabNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarInactiveTintColor: '#555',
        tabBarIndicatorStyle: {backgroundColor: '#f15454'},
      }}>
      <TopTab.Screen
        name="search results list"
        component={SearchResultsScreen}
        options={{title: 'list'}}
      />
      <TopTab.Screen
        name="search results map"
        component={SearchResultsMap}
        options={{title: 'map'}}
      />
    </TopTab.Navigator>
  );
}
