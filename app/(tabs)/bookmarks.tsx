import { View,StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Bookmarks() {
  return (
    <View style={styles.container}>
      <Text>Beookmarks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})