import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function LocationSearch() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        onPress={(data, details) => {
          navigation.navigate('guests');
        }}
        fetchDetails
        placeholder="Where are you gonna stay?"
        query={{
          key: process.env.GOOGLE_API_KEY,
          language: 'en',
          type: '(cities)',
        }}
        suppressDefaultStyles
        styles={{
          textInput: styles.textInput,
          poweredContainer: {paddingTop: 10},
          container: {
            height: '100%',
          },
        }}
        textInputProps={{
          autoFocus: true,
        }}
        renderRow={item => {
          return (
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={25} />
              </View>
              <Text style={styles.locationText}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
