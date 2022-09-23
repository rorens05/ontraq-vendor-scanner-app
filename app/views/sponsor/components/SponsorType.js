import React from 'react';
import { Text, View } from 'react-native';
import SponsorItem from './SponsorItem';

export default function SponsorType({ label }) {
  return (
    <View style={{ paddingBottom: 24 }}>
      <Text style={{ color: '#D82E2E', fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>{label}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <SponsorItem visited={true} />
        <SponsorItem visited={false} />
        <SponsorItem visited={false} />
        <SponsorItem visited={true} />
      </View>
    </View>
  );
}