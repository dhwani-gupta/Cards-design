import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native'
import React from 'react'

export default function Elevated() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView  horizontal={true} style={styles.container}>
        <View style={[styles.cards, styles.cardsElevated]}>
          <Text>Tap</Text>

        </View>
        <View style={[styles.cards, styles.cardsElevated]}>
          <Text>Tap</Text>

        </View>
        <View style={[styles.cards, styles.cardsElevated]}>
          <Text>Tap</Text>

        </View>
        <View style={[styles.cards,styles.cardsElevated]}>
          <Text>Tap</Text>
          
        </View>
        <View style={[styles.cards,styles.cardsElevated]}>
          <Text>Tap</Text>
          
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    color: "white",
    // paddingTop:50,

  },
  container: {
    padding: 8,
    gap:5
  },
  cards: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    margin:10,
    borderRadius:5
  },
  cardsElevated: {
    backgroundColor: "#CAD5E2",
    // elevation:4
    // shadowOffset:{
    //   width:10000,
    //   height:10000
    // },
    // shadowColor:"pink",
     

  },

})