import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 60,
    height: 120,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    overflow: 'hidden',
    marginLeft: 10,
  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  textContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    flex: 1,
  },

  bedroom: {
    color: '#5b5b5b',
    marginVertical: 10,
  },

  description: {
    fontSize: 20,
    paddingVertical: 4,
  },

  prices: {
    fontSize: 16,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default styles;
