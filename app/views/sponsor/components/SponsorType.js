import React from 'react';
import { Text, View } from 'react-native';
import SponsorItem from './SponsorItem';

export default function SponsorType({ label, sponsors }) {
  return (
    <View style={{ paddingBottom: 24 }}>
      <Text style={{ color: '#D82E2E', fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>{label}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {sponsors.map((item, key) => {
          return (
            <SponsorItem key={key} item={item} label={label} />
          );
        })}
      </View>
    </View>
  );
}