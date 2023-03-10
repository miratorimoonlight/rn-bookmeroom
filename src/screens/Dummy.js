import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Dummy(props) {
  return (
    <View style={styles.container}>
      <Text>Dummy {props.route.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
