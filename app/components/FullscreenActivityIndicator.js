import React from 'react';
import { View, ActivityIndicator,Text } from 'react-native';

export default function FullscreenActivityIndicator({progress}) {
	return (
		<View style={{
      position: 'absolute',
      zIndex: 9999,
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
     }}>
			<ActivityIndicator size='large' color='#555555' />
      {progress != null && <Text>{progress}</Text>}
		</View>
	);
}
