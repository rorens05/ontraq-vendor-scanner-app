import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SponsorType from './components/SponsorType';
import tfiLogo from '../../assets/ceap-tfi-logo.png'

export default function Sponsor() {
  const sponsors = [
    {
      name: 'TechFactors, Inc.',
      visited: true,
      image: tfiLogo,
      contactNumber: '09123123123',
      email: 'TFI@gmail.com',
      fb: 'TechFactors, Inc.',
      twitter: '@TFIph',
      instagram: '@TFIph',
      website: 'https://techfactors.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
    },
    {
      name: 'TechFactors, Inc.',
      visited: false,
      image: tfiLogo,
      contactNumber: '09999999999',
      email: 'TFI@gmail.com',
    },
    {
      name: 'TechFactors, Inc.',
      visited: false,
      image: tfiLogo,
      contactNumber: '09111111111',
      email: 'TFI@gmail.com',
    },
    {
      name: 'TechFactors, Inc.',
      visited: true,
      image: tfiLogo,
      contactNumber: '09090909090',
      email: 'TFI@gmail.com',
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7F9', paddingHorizontal: 20, paddingTop: 20, marginBottom: 70 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Sponsors</Text>
        </View>
        <SponsorType sponsors={sponsors} label={'Major Sponsors'} />
        <SponsorType sponsors={sponsors} label={'Platinum Sponsors'} />
        <SponsorType sponsors={sponsors} label={'Gold Sponsors'} />
        <SponsorType sponsors={sponsors} label={'Silver Sponsors'} />
        <SponsorType sponsors={sponsors} label={'Exhibitors Sponsors'} />
      </ScrollView>
    </View>
  )
}
