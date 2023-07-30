import { SafeAreaView, Button } from 'react-native'
import React from "react";
/* import PropTypes from 'prop-types' */

export default function Home(props) {
    const goToHome = (page) => {
        navigation.navigate(page);
    };
    return (
        <SafeAreaView>
            <Button title='settings' onPress={() => goToHome("Home2")} />
        </SafeAreaView>
    )
}