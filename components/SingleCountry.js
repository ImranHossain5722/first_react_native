import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function SingleCountry({country}) {
  return (
    <View>
      <Text>Country: {country.name.common}</Text>
      <Image source={{
              uri:country.flags.png
          }}
          style={{width:100, height:100}}>
          
      </Image>
    </View>
  )
}

const style= StyleSheet.create({



})