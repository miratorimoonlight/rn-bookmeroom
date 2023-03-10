import {View, FlatList} from 'react-native';
import React from 'react';
import Post from '../../components/Post';
import feeds from '../../../assets/data/feed';

export default function SearchResults() {
  return (
    <View>
      <FlatList data={feeds} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}
