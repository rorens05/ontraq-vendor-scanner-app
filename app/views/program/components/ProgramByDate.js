import React from 'react';
import { Text, View } from 'react-native';
import ProgramItem from '../../home/components/SessionItem.js';
import session from '../../../assets/ceap-session.png'

export default function ProgramByDate({ label }) {
  return (
    <View style={{ paddingBottom: 24 }}>
      <Text style={{ color: '#D82E2E', fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>{label}</Text>
      <View>
        <ProgramItem image={session} />
        <ProgramItem image={session} />
        <ProgramItem image={session} />
      </View>
    </View>
  );
}