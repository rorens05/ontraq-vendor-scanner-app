import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Header from '../../components/Header';
import logo from '../../assets/ceap-logo.png'
import session from '../../assets/ceap-session.png'
import AnnouncementItem from './components/AnnouncementItem';
import tvIcon from '../../assets/ceap-tv.png'
import SessionItem from './components/SessionItem';

export default function Home() {
  return (
    <>
      <Header />
      <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, marginBottom: 70}}>
        <ScrollView>
          <View style={{paddingBottom: 20}}>
            <Text style={{color: '#000000', fontSize: 24, fontWeight: 'bold', marginBottom: 24}}>Announcement</Text> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <AnnouncementItem image={logo} />
              <AnnouncementItem image={logo} />
            </ScrollView>
          </View>
          <View>
            <Text style={{color: '#000000', fontSize: 24, fontWeight: 'bold', marginBottom: 12}}>CEAP Conference and Expo</Text> 
            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20}}>
              <Image source={tvIcon} resizeMode='contain' style={{width: 30, height: 30, marginHorizontal: 10}} />
              <Text style={{color: '#FF4F6B', fontSize: 20, fontWeight: 'bold'}}>Sessions for Today</Text> 
            </View>
              <SessionItem image={session} />
              <SessionItem image={session} />
              <SessionItem image={session} />
          </View>
        </ScrollView>
      </View>
    </>
  )
}
