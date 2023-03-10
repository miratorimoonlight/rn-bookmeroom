import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageBg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    width: '70%',
    color: 'white',
    marginLeft: 20,
    lineHeight: 77,
  },
  button: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 20,
    padding: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    width: Dimensions.get('screen').width - 20,
    height: 45,
    borderRadius: 30,
    position: 'absolute',
    zIndex: 20,
    top: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  srchBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default styles;
