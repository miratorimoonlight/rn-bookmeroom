import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Guests() {
  const navigation = useNavigation();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleSearch = () => {
    navigation.navigate('Home', {
      screen: 'Explore',
      params: {screen: 'search result'},
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          {/* Texts */}
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.description}>Ages 13 or above</Text>
          </View>

          {/* Buttons */}
          <View style={styles.btnContainer}>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, adults - 1))}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                width: 35,
              }}>
              {adults}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          {/* Texts */}
          <View>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.description}>Ages 2 - 12</Text>
          </View>

          {/* Buttons */}
          <View style={styles.btnContainer}>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(Math.max(0, children - 1))}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                width: 35,
              }}>
              {children}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(children + 1)}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          {/* Texts */}
          <View>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.description}>Under 2</Text>
          </View>

          {/* Buttons */}
          <View style={styles.btnContainer}>
            <Pressable
              style={styles.button}
              onPress={() => setInfants(Math.max(0, infants - 1))}>
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                width: 35,
              }}>
              {infants}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setInfants(infants + 1)}>
              <Text style={styles.btnText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable style={styles.searchBtn} onPress={handleSearch}>
        <Text style={styles.searchBtnTxt}>Search</Text>
      </Pressable>
    </View>
  );
}
