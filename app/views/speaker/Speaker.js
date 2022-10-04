import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import SearchBar from '../../components/headers/SearchBar';
import areolaIcon from '../../assets/ceap-icon-areola.png';
import caluzaIcon from '../../assets/ceap-icon-caluza.png';
import arreIcon from '../../assets/ceap-icon-arre.png';
import SpeakerItem from './components/SpeakerItem';
const {width, height} = Dimensions.get('screen');

export default function Speaker() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const speakers = [
    {
      name: 'Fr. Odine Areola',
      position: 'CEAP Region 5 Trustee',
      image: areolaIcon,
      contactNumber: '09123123123',
      email: 'odineareola@gmail.com',
      fb: 'Fr. Odine Areola',
      instagram: '@fr.Odine',
      twitter: '@fr.Odine',
    },
    {
      name: 'Fr. Ramon Caluza',
      position: 'CEAP Region 1 Trustee',
      image: caluzaIcon,
    },
    {
      name: 'Fr. Raymond Arre',
      position: 'CEAP Superintendent’s',
      image: arreIcon,
    },
    {
      name: 'Fr. Odine Areola',
      position: 'CEAP Region 5 Trustee',
      image: areolaIcon,
    },
    {
      name: 'Fr. Ramon Caluza',
      position: 'CEAP Region 1 Trustee',
      image: caluzaIcon,
    },
    {
      name: 'Fr. Raymond Arre',
      position: 'CEAP Superintendent’s',
      image: arreIcon,
    },
    {
      name: 'Fr. Odine Areola',
      position: 'CEAP Region 5 Trustee',
      image: areolaIcon,
    },
    {
      name: 'Fr. Ramon Caluza',
      position: 'CEAP Region 1 Trustee',
      image: caluzaIcon,
    },
    {
      name: 'Fr. Raymond Arre',
      position: 'CEAP Superintendent’s',
      image: arreIcon,
    },
    {
      name: 'Fr. Odine Areola',
      position: 'CEAP Region 5 Trustee',
      image: areolaIcon,
    },
    {
      name: 'Fr. Ramon Caluza',
      position: 'CEAP Region 1 Trustee',
      image: caluzaIcon,
    },
    {
      name: 'Fr. Raymond Arre',
      position: 'CEAP Superintendent’s',
      image: arreIcon,
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F8F8F8D1',
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 70,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 24,
            }}>
            Speakers
          </Text>
        </View>
        <SearchBar
          placeholder={'Search Speaker here ...'}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {speakers
            .filter(item =>
              item?.name.toUpperCase().includes(searchPhrase.toUpperCase()),
            )
            .map((item, key) => {
              return <SpeakerItem key={key} item={item} />;
            })}
        </View>
      </ScrollView>
    </View>
  );
}
