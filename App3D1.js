import React from 'react'
import {View,Text} from 'react-native'
import Display from './Display'

const App = () => {
  const name = "Tharun"
  return (
    <View style={{
      flex :1,
      justifyContent : 'center',
      alignItems : 'center'
    }}>
      <Display name={name}/>
      
    </View>
  )
}

export default App
