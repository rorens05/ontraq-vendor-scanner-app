import React from 'react';
import { Text, View } from 'react-native';
import ProgramItem from '../../home/components/SessionItem.js';

export default function ProgramByDate({ programs, label }) {
  return (
    <View style={{ paddingBottom: 24 }}>
      <Text style={{ color: '#D82E2E', fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>{label}</Text>
      <View>
        {programs.map((item, key) => {
          return (
            <ProgramItem key={key} item={item} />
          );
        })}
      </View>
    </View>
  );
}