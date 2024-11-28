import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Actioncards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            whats new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.

          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>

            <Text style={styles.followLinks}>
              Read more
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>

            <Text style={styles.followLinks}>
              Follow me
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    color: "white",
  },
  card: {
    width: 370,
    height: 330,
    margin: 10,
    borderRadius: 5,
  },
  cardElevated: {
    backgroundColor: '#ff751a',
    elevation: 3
  },
  headingContainer: {
    // flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
    // padding:10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600'

  },
  cardImage: {
    height: 150,
  },
  bodyContainer: {
    padding: 10,
    // backgroundColor: 'red',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15
  },
  followLinks: {
    backgroundColor: 'white',
    padding: 10
  },
})