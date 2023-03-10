/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Router from './src/navigation/Router';

function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Router />
    </>
  );
}

export default App;
