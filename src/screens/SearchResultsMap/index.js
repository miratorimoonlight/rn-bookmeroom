import {View, FlatList, useWindowDimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapMarker from '../../components/MapMarker';
import CarouselPost from '../../components/CarouselPost';
import searchResults from '../../../assets/data/feed';
import {useNavigation} from '@react-navigation/native';

export default function SearchResultsMap() {
  const [selectedPlaceID, setSelectedPlaceID] = useState(null);

  const navigation = useNavigation();

  const width = useWindowDimensions().width;

  const flatListRef = useRef();

  const viewabilityConfigRef = useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 700,
  });

  const onViewableItemsChangedRef = useRef(({viewableItems}) => {
    if (!viewableItems.length) {
      return;
    }
    const itemID = viewableItems[0].item.id;
    setSelectedPlaceID(itemID);
  });

  const mapRef = useRef();

  useEffect(() => {
    if (!selectedPlaceID || !flatListRef) {
      return;
    }
    const index = searchResults.findIndex(item => item.id === selectedPlaceID);

    // List scroll to the selected item
    flatListRef.current.scrollToIndex({index});

    // Map scroll to the selected item
    const selectedPlace = searchResults[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.0071,
      longitudeDelta: 0.03,
    };
    mapRef.current.animateToRegion(region);
  }, [selectedPlaceID]);

  // Fix: conflict between Tab swipe and Flatlist horizontal scroll
  useEffect(() => {
    navigation.setOptions({swipeEnabled: false});
  });

  return (
    <View>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 11.566225,
          longitude: 104.928445,
          latitudeDelta: 0.0071,
          longitudeDelta: 0.03,
        }}>
        {searchResults.map(markerData => (
          <MapMarker
            index={markerData.id}
            coordinate={markerData.coordinate}
            newPrice={markerData.newPrice}
            onPress={() => setSelectedPlaceID(markerData.id)}
            isSelected={markerData.id === selectedPlaceID}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatListRef}
          data={searchResults}
          renderItem={({item}) => <CarouselPost post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          decelerationRate={'fast'}
          snapToAlignment={'center'}
          viewabilityConfig={viewabilityConfigRef.current}
          onViewableItemsChanged={onViewableItemsChangedRef.current}
        />
      </View>
    </View>
  );
}
