import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Header from '../../components/Header';
import logo from '../../assets/ceap-logo.png';
import session from '../../assets/ceap-session.png';
import AnnouncementItem from './components/AnnouncementItem';
import tvIcon from '../../assets/ceap-tv.png';
import areolaIcon from '../../assets/ceap-icon-areola.png';
import caluzaIcon from '../../assets/ceap-icon-caluza.png';
import arreIcon from '../../assets/ceap-icon-arre.png';
import SessionItem from './components/SessionItem';
import MainContainer from '../../components/layout/MainContainer';

export default function Home() {
  const programs = [
    {
      title: 'Session 1',
      venue: 'Function Room 1',
      image: session,
      date: 'Sat, Aug 7 | 10:30 PM - 2:30 PM',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
      speakers: [
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
      ],
    },
    {
      title: 'Session 2',
      venue: 'Function Room 2',
      image: session,
      date: 'Sat, Aug 7 | 10:30 PM - 2:30 PM',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
      speakers: [
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
          name: 'Fr. Raymond Arre',
          position: 'CEAP Superintendent’s',
          image: arreIcon,
        },
      ],
    },
    {
      title: 'Session 3',
      venue: 'Function Room 3',
      image: session,
      date: 'Sat, Aug 7 | 10:30 PM - 2:30 PM',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
      speakers: [],
    },
  ];
  return (
    <MainContainer>
      <Header />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          marginBottom: 70,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingBottom: 20}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 24,
              }}>
              Announcement
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <AnnouncementItem image={logo} />
              <AnnouncementItem image={logo} />
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
              CEAP Conference and Expo
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 20,
              }}>
              <Image
                source={tvIcon}
                resizeMode="contain"
                style={{width: 30, height: 30, marginHorizontal: 10}}
              />
              <Text
                style={{color: '#FF4F6B', fontSize: 20, fontWeight: 'bold'}}>
                Sessions for Today
              </Text>
            </View>
            {programs.map((item, key) => {
              return <SessionItem key={key} item={item} />;
            })}
          </View>
        </ScrollView>
      </View>
    </MainContainer>
  );
}
