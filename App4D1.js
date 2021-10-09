import React,{useState} from 'react'
import {View,Text} from 'react-native'
import Display from './Display'

const App = () => {
  const [name,setName] = useState("kalyan")
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
