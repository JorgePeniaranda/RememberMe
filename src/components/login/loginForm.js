import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function loginForm() {
    return (
        <View>
            <Text style={styles.text}>Usuario:</Text>
            <TextInput style={styles.text} />
            <Text style={styles.text}>Contraseña:</Text>
            <TextInput secureTextEntry style={styles.text} />
            <Button title='Send' onPress={() => console.log("yes")} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
    },
});