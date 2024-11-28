import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcards = () => {
  return (
    <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text style={{color:'white'}}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text style={{color:'white'}}>Green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text style={{color:'white'}}>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text style={{color:'white'}}>Blue</Text>
            </View>
        </View>
    </View>
    
  )
}

export default Flatcards

const styles = StyleSheet.create({
    headingText:{
        flex:1,
        paddingHorizontal:10,
        fontSize:20,
        color:"white",
        paddingTop:50,

    },
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        // backgroundColor:"black",
        padding:10,
        gap:10

    },
    card:{
        
        width:"20%",
        height:100,
        borderRadius:4,
        justifyContent:'center',
        alignItems:"center",
        color:"white"


    },
    cardOne:{
        backgroundColor:"red",

    },
    cardThree:{
        backgroundColor:"blue"

    },
    cardTwo:{
        backgroundColor:"green"

    }
 
})