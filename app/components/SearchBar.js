import React from "react";
import { TouchableOpacity, TextInput, View, Keyboard, Text, Image } from "react-native";
const search = require('../assets/search_icon.png');

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked, placeholder }) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        marginBottom: 10,
        marginTop: 5,
        height: 40,
      }}>
      <TextInput
        placeholderTextColor={'#C2C2C2'}
        placeholder={placeholder}
        style={{ padding: 5, flex: 1 }}
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        onFocus={() => {
          setClicked(true);
        }} />
      {clicked ? (
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setSearchPhrase('');
            Keyboard.dismiss();
            setClicked(false);
          }}>
          <Text style={{ color: '#ccc', padding: 5, flex: 1, textAlignVertical: 'center' }}>Cancel</Text>
        </TouchableOpacity>
      )
      :
      <View style={{ justifyContent: 'center' }}>
        <Image
          source={search}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: '#C2C2C2' }}
        />
      </View>
    }
    </View>
  );
};
export default SearchBar;