import React, { useContext, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import logo from '../../assets/ceap-logo.png'
import upcoming from '../../assets/ceap-upcoming.png'
import UpcomingEventItem from './components/UpcomingEventItem';
import eventIcon from '../../assets/ceap-event.png'
import burgerIcon from '../../assets/BurgerIcon.png'
import EventItem from './components/EventItem';
import SearchBar from '../../components/SearchBar';
import { NavigationContext } from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useContext(NavigationContext);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, marginBottom: 70 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
            <Image source={logo} resizeMode='contain' style={{ width: 30, height: 30, marginHorizontal: 10 }} />
            <View style={{ flex: 1, marginTop: 5 }}>
              <SearchBar
                placeholder={'Search events here ...'}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
              />
            </View>
            <Image source={burgerIcon} resizeMode='contain' style={{ width: 30, height: 20, marginHorizontal: 10, tintColor: '#535353' }} />
          </View>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Upcoming Events</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <UpcomingEventItem image={upcoming} onPress={() => navigation.navigate('UpcomingEventProfile', { image: upcoming })} />
              <UpcomingEventItem image={upcoming} onPress={() => navigation.navigate('UpcomingEventProfile', { image: upcoming })} />
              <UpcomingEventItem image={upcoming} onPress={() => navigation.navigate('UpcomingEventProfile', { image: upcoming })} />
            </ScrollView>
          </View>
          <View>
            <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>Events</Text>
            <EventItem image={eventIcon} />
          </View>
        </ScrollView>
      </View>
    </>
  )
}
