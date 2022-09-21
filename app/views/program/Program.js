import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ProgramByDate from './components/ProgramByDate';

export default function Program() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7F9', paddingHorizontal: 20, paddingTop: 20, marginBottom: 70 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Program</Text>
        </View>
        <ProgramByDate label={'August 3'} />
        <ProgramByDate label={'August 4'} />
        <ProgramByDate label={'August 5'} />
      </ScrollView>
    </View>
  )
}
