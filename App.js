import React from 'react';
import { View } from 'react-native';

function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#eeeeee',
      justifyContent: 'space-between',  
      flexDirection: 'column'     
    }}>

      <View style={{width: 50,height: 50,backgroundColor: 'green',margin: 5}} />

      <View style={{width: 50,height: 50,backgroundColor: 'red',margin: 5}} />

      <View style={{width: 50,height: 50,backgroundColor: 'black',margin: 5}} />

    </View>
  );
}

export default App;