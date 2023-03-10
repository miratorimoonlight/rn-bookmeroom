import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {margin: 20},
  textInput: {
    fontSize: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical: 15,
  },

  iconContainer: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
  },

  locationText: {
    fontSize: 16,
  },
});

export default styles;
