import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const UserScreen = (props) => {
   
    const [count, setCount] = useState(0)

    const increase = ()=>{
        setCount(count + 1);
    }

  return (
    <View>
       <Text> User Screen </Text>
       
        <Text>{count}</Text>
        <Button title='count' onPress={increase} />
    </View>
  )
}

export default UserScreen
