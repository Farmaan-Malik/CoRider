import { View, Text,Image } from 'react-native'
import React from 'react'



const FourImageCircle = () => {
  return (
    
    <View
          style={{
            display: "flex",
            width: 48,
            height: 48,
            borderRadius: 50,
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
              source={require('@/assets/images/pfp1.png')}

            />
            <Image
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
              source={require('@/assets/images/pfp2.png')}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
              source={require('@/assets/images/pfp3.png')}

            />
            <Image
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
              source={require('@/assets/images/pfp4.png')}

            />
          </View>
        </View>

  )
}

export default FourImageCircle