import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#a00',
    height: '100%',
    justifyContent: 'space-between',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: '#5b5b5b',
  },

  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ababab',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 20,
    color: '#5b5b5b',
  },

  searchBtn: {
    marginBottom: 40,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 30,
    borderRadius: 10,
  },

  searchBtnTxt: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
});

export default styles;
