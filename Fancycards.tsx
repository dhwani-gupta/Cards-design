import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Fancycards() {
    return (
        <View >
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image

                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1024px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLable}>Pink City, Jaipur</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. </Text>
                    <Text style={styles.cardFooter}>12 minutes away</Text>


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
        height: 350,
        borderRadius:5,
        width: 370,
        margin: 10


    },
    cardElevated: {
        backgroundColor: '#ffffff',
    },
    cardBody: {
        flex:1,
        flexGrow:1,
        marginHorizontal:10,
        marginTop:5
    },
    cardImage: {
        height: 180,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    cardTitle: {
        color: "#000000",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:2

    },
    cardLable: {
        color: "#000000",
        fontSize:16,
        marginBottom:4,
        fontWeight:"bold",

    },
    cardDescription: {
        color: "#242B2E",
        fontSize:14,
        marginBottom:12,
        marginTop:6
    },
    cardFooter: {
        color: "#000000",
        fontWeight:"bold"
    }
})