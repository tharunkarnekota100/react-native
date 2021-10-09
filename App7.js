import React,{useState} from 'react'
import {View,Text,Button,TextInput,Image} from 'react-native'
import Display from './Display'

const App = () => {
  const [name,setName] = useState("")
  return (
    <View style={{
      flex :1,
      justifyContent : 'center',
      alignItems : 'center'
    }}>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2021/08/22/20/27/corner-ball-6566084_960_720.jpg'}} style={{width:200,height:200}} />
      <Text>hey everyone</Text>
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
