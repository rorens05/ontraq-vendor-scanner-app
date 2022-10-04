import React, {useState} from 'react';
import {Image, View} from 'react-native';
import SearchBar from './SearchBar';
import logo from '../../assets/ceap-logo.png';
import burgerIcon from '../../assets/BurgerIcon.png';
import styles from '../../styles';

export default function DashboardHeader({}) {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <View style={[styles.dashboard_header]}>
      <Image
        source={logo}
        resizeMode="contain"
        style={[styles.variant_30_30, styles.mx_3]}
      />

      <View style={[styles.flex_1, styles.mt_1]}>
        <SearchBar
          placeholder={'Search events here ...'}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
      </View>
      <Image
        source={burgerIcon}
        resizeMode="contain"
        style={[styles.variant_30_20, styles.mx_3, styles.icon_tint]}
      />
    </View>
  );
}
