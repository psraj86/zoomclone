import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenuButtons = [
    { type: 'starred', name: 'Starred' },
    { type: 'contact', name: 'Peter Singh', photo: require('../assets/peter.jpg') },
    { type: 'contact', name: 'Jyoti', photo: require('../assets/jyoti.jpg') },
    { type: 'contact', name: 'Praveen Singh', photo: require('../assets/praveen.jpg') },
]
export default function ContactsMenu() {
    return (
        <View style={styles.container}>
            {contactsMenuButtons.map((contact, index) =>
                <View key={index} style={styles.row}>
                    {contact.type === 'starred' ? (
                        <View style={styles.starredIcon}>
                            <AntDesign name="star" size={30} color={"#efefef"} />
                        </View>) :
                        (
                            <Image source={contact.photo} style={styles.image} />
                        )
                    }

                    <Text style={styles.text}>{contact.name}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    starredIcon: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        fontSize: 18,
        color: 'white',
        paddingLeft: 15,
    },
    image: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        borderRadius: 20,
    }

})
