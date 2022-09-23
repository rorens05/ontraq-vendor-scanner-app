import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SponsorType from './components/SponsorType';

export default function Sponsor() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7F9', paddingHorizontal: 20, paddingTop: 20, marginBottom: 70 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Sponsors</Text>
        </View>
        <SponsorType label={'Major Sponsors'} />
        <SponsorType label={'Platinum Sponsors'} />
        <SponsorType label={'Gold Sponsors'} />
        <SponsorType label={'Silver Sponsors'} />
        <SponsorType label={'Exhibitors Sponsors'} />
      </ScrollView>
    </View>
  )
}
