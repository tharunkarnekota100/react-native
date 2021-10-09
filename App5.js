import React,{useState} from 'react'
import {View,Text,Button} from 'react-native'


const App = () => {
  const [name,setName] = useState("kalyan")
  return (
    <View style={{
      flex :1,
      justifyContent : 'center',
      alignItems : 'center'
    }}>
      
      <Button onPress={()=> alert('you clicked')} title="Click me bro!!"></Button>
    </View>
  )
}

export default App
