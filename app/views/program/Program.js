import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ProgramByDate from './components/ProgramByDate';
import session from '../../assets/ceap-session.png'
import areolaIcon from '../../assets/ceap-icon-areola.png'
import caluzaIcon from '../../assets/ceap-icon-caluza.png'
import arreIcon from '../../assets/ceap-icon-arre.png'
export default function Program() {
  const programs = [
    {
      title: 'Session 1',
      venue: 'Function Room 1',
      image: session,
      date: 'Sat, Aug 7 | 10:30 PM - 2:30 PM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
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
          image: caluzaIcon
        },
        {
          name: 'Fr. Raymond Arre',
          position: 'CEAP Superintendent’s',
          image: arreIcon
        },
      ]
    },
    {
      title: 'Session 2',
      venue: 'Function Room 2',
      image: session,
      date: 'Sat, Aug 7 | 10:30 PM - 2:30 PM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
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
          image: caluzaIcon
        },
        {
          name: 'Fr. Raymond Arre',
          position: 'CEAP Superintendent’s',
          image: arreIcon
        },
        {
          name: 'Fr. Raymond Arre',
          position: 'CEAP Superintendent’s',
          image: arreIcon
        },
      ]
    },
    {
      title: 'Session 3',
      venue: 'Function Room 3',
      image: session,
      date: 'Sat, Aug 7 | 10:30 PM - 2:30 PM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
      speakers: [
      ]
    },
  ]
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7F9', paddingHorizontal: 20, paddingTop: 20, marginBottom: 70 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Program</Text>
        </View>
        <ProgramByDate programs={programs} label={'August 3'} />
        <ProgramByDate programs={programs} label={'August 4'} />
        <ProgramByDate programs={programs} label={'August 5'} />
      </ScrollView>
    </View>
  )
}
