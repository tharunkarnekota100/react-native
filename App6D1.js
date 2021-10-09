import React,{useState} from 'react'
import {View,Text,Button,TextInput} from 'react-native'
import Display from './Display'

const App = () => {
  const [name,setName] = useState("")
  return (
    <View style={{
      flex :1,
      justifyContent : 'center',
      alignItems : 'center'
    }}>
      <Display name={name}/>
      <Button onPress={()=> alert('you clicked')} title="Click me bro!!"></Button>
      <TextInput 
        style={{
          height :40,
          width :300,
          border :'1px solid grey',
          fontSize :30
        }} 
        defaultValue={name}
        onChangeText={(inputt)=> setName(inputt)}></TextInput>
    </View>
  )
}

export default App
