import React from 'react';
import {StyleSheet, TextInput, View, Keyboard, Button} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {SizeClass} from '../utils/AppTheme';
const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar__unclicked}>
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{marginLeft: 1}}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            // setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    height: SizeClass.getScreenWidthFromPercentage(15),
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#d9dbda',
    borderRadius: 25,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 14,
    marginLeft: 10,
    width: '90%',
    height: SizeClass.getScreenWidthFromPercentage(9),
  },
});
