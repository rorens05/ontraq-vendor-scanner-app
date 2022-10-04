import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  Keyboard,
  Text,
  Image,
} from 'react-native';
import styles from '../../styles';
import {
  INPUT_TEXT_BACKGROUND_COLOR,
  PLACEHOLDER_COLOR,
} from '../../styles/colors';
const search = require('../../assets/search_icon.png');

const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  placeholder,
}) => {
  return (
    <View
      style={[
        styles.px_3,
        styles.mt_1,
        styles.mb_3,
        styles.searchBarContainer,
      ]}>
      <TextInput
        placeholderTextColor={PLACEHOLDER_COLOR}
        placeholder={placeholder}
        style={[styles.flex_1, styles.p_1]}
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        onFocus={() => {
          setClicked(true);
        }}
      />
      {clicked ? (
        <TouchableOpacity
          style={styles.flex_center}
          onPress={() => {
            setSearchPhrase('');
            Keyboard.dismiss();
            setClicked(false);
          }}>
          <Text style={[styles.x_icon, styles.p_1, styles.flex_1]}>x</Text>
        </TouchableOpacity>
      ) : (
        <View style={{justifyContent: 'center'}}>
          <Image
            source={search}
            resizeMode="contain"
            style={[styles.searchIcon]}
          />
        </View>
      )}
    </View>
  );
};
export default SearchBar;
