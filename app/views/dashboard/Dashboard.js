import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import upcoming from '../../assets/ceap-upcoming.png';
import UpcomingEventItem from './components/UpcomingEventItem';
import eventIcon from '../../assets/ceap-event.png';
import EventItem from './components/EventItem';
import SearchBar from '../../components/headers/SearchBar';
import {NavigationContext} from '@react-navigation/native';
import DashboardHeader from '../../components/headers/DashboardHeader';

export default function Dashboard() {
  const navigation = useContext(NavigationContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DashboardHeader />
        <View style={{paddingBottom: 20}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 24,
            }}>
            Upcoming Events
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <UpcomingEventItem
              image={upcoming}
              onPress={() =>
                navigation.navigate('UpcomingEventProfile', {image: upcoming})
              }
            />
            <UpcomingEventItem
              image={upcoming}
              onPress={() =>
                navigation.navigate('UpcomingEventProfile', {image: upcoming})
              }
            />
            <UpcomingEventItem
              image={upcoming}
              onPress={() =>
                navigation.navigate('UpcomingEventProfile', {image: upcoming})
              }
            />
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 12,
            }}>
            Events
          </Text>
          <EventItem image={eventIcon} />
        </View>
      </ScrollView>
    </View>
  );
}
