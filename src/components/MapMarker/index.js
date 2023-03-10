import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Marker} from 'react-native-maps';

export default function MapMarker(props) {
  const {index, coordinate, newPrice, onPress, isSelected} = props;
  return (
    <Marker key={index} coordinate={coordinate} onPress={onPress}>
      <View
        style={
          isSelected ? styles.markerContainerSelected : styles.markerContainer
        }>
        <Text style={isSelected ? styles.markerTxtSelected : styles.markerTxt}>
          ${newPrice}
        </Text>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f15454',
    borderRadius: 10,
    padding: 7,
  },
  markerContainerSelected: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#f15454',
    borderRadius: 10,
    padding: 10,
  },
  markerTxt: {
    fontWeight: '700',
  },
  markerTxtSelected: {
    fontWeight: '700',
    color: 'white',
  },
});
