import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

export default function HomeScreen(props) {
    const {user} = props;
    return (
        <SafeAreaView>
            <Text style={styles.text}>¡Bienvenido, {user}!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
    },
});

HomeScreen.defaultProps = {
    user: "pepe",
}

HomeScreen.propTypes = {
    user: PropTypes.string,
}