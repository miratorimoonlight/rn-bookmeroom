import React from 'react';
import {View, Text, ImageBackground, Pressable, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('location search')}>
        <Fontisto name="search" size={20} color="#f15454" />
        <Text style={styles.srchBtnText}>Where are you gonna stay?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.imageBg}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={({pressed}) => [styles.button, {opacity: pressed ? 0.8 : 1}]}
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'search result',
                params: {screen: 'search results map'},
              },
            })
          }>
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
