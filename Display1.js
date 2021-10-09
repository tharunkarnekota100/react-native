import React from 'react'
import {View,Text} from 'react-native'

const Display = ({name}) => {
    return (
        <View>
            <Text>Content from display component : {name}</Text>
        </View>
    )
}

export default Display
