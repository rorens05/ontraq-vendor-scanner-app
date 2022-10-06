import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import upcoming from '../../assets/ceap-upcoming.png';
import UpcomingEventItem from './components/UpcomingEventItem';
import eventIcon from '../../assets/ceap-event.png';
import EventItem from './components/EventItem';
import {NavigationContext} from '@react-navigation/native';
import DashboardHeader from '../../components/headers/DashboardHeader';
import MainContainer from '../../components/layout/MainContainer';
import styles from '../../styles';

export default function Dashboard() {
  const navigation = useContext(NavigationContext);
  return (
    <MainContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DashboardHeader />
        <View style={styles.pb_5}>
          <Text style={[styles.h1, styles.my_5]}>Upcoming Events</Text>
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
          <Text style={[styles.h1, styles.my_5]}>Events</Text>
          <EventItem image={eventIcon} />
        </View>
      </ScrollView>
    </MainContainer>
  );
}
