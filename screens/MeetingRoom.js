import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function MeetingRoom() {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
    return (
        <View style={styles.container}>
            {/* Start Meeting Section */}
            <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter Name'
                        placeholderTextColor={'#767476'}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter Meeting Id'
                        placeholderTextColor={'#767476'}
                        value={roomId}
                        onChangeText={text => setRoomId(text)}
                    />
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        style={styles.startmeetingButton}
                        onPress={() => { }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Start Meeting</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1
    },
    startMeetingContainer: {

    },
    info: {
        width: '100%',
        backgroundColor: '#373538',
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#484648',
        padding: 12,
        justifyContent: 'center'
    },
    textInput: {
        color: 'white',
        fontSize: 18
    },
    startmeetingButton: {
        width: '80%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0470DC',
        height: 50,
        borderRadius: 15
    }
})