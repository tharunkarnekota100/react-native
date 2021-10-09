import React from 'react'
import {View,Text} from 'react-native'

const App = () => {
  const name = "Tharun"
  return (
    <View style={{
      flex :1,
      justifyContent : 'center',
      alignItems : 'center'
    }}>
      <Text style={{fontSize:30}}>{name}</Text>
    </View>
  )
}

export default App
