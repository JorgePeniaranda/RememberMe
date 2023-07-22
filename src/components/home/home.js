import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

export default function home(props) {
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

home.defaultProps = {
    user: "pepe",
}

home.propTypes = {
    user: PropTypes.string,
}