import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Post({post}) {
  return (
    <View style={styles.container}>
      {/* Img */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      {/* Bedroom */}
      <Text style={styles.bedroom}>
        {post.bed} bed. {post.bedroom} bedroom
      </Text>
      {/* Type */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      {/* Prices */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> / per night
      </Text>

      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
}
