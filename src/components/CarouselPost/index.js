import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function CarouselPost({post}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.bedroom}>
          {post.bed} bed. {post.bedroom} bedroom
        </Text>

        <Text style={styles.description} numberOfLines={1}>
          {post.type}. {post.title}
        </Text>

        <Text style={styles.prices}>
          <Text style={styles.newPrice}> ${post.newPrice}</Text> / per night
        </Text>
      </View>
    </View>
  );
}
