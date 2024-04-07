import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function search() {
  return (
    <View style={styles.container}>
      <Text>search</Text>
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