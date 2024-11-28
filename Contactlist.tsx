import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const Contacts = [
        {
            uid: 1,
            name: 'Dhwani Gupta',
            Status: 'Expanding my vision',
            imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            uid: 2,
            name: 'Ayush Kumar Dev',
            Status: 'Expanding my vision',
            imageUrl: 'https://images.pexels.com/photos/6894003/pexels-photo-6894003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            uid: 3,
            name: 'Dhwani Gupta',
            Status: 'Expanding my vision',
            imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

        },
        {
            uid: 4,
            name: 'Ayush Kumar Dev',
            Status: 'Expanding my vision',
            imageUrl: 'https://images.pexels.com/photos/6894003/pexels-photo-6894003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
    ]
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {Contacts.map(({ uid, name, imageUrl, Status }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.imageCard}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{Status}</Text>
                        </View>

                    </View>
                ))}
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
    },
    container: {
        padding: 10,
        // backgroundColor:'#74B9FF',
        backgroundColor:'#3498DB',
        borderRadius:5,
        margin:10

    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        gap: 10,
        backgroundColor:'#2475B0',
        // opacity:0.8,
        paddingBottom:5,
        borderRadius:5,
        paddingHorizontal:10,
        marginBottom:5
    },
    imageCard: {
        width: 60,
        height: 60,
        borderRadius: 30,
        
    },
    userName: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    userStatus: {
        color: 'white'

    }

})