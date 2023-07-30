import { SafeAreaView, Button } from 'react-native'
import React from "react";
/* import PropTypes from 'prop-types' */

export default function Home(props) {
    const goToHome = (page) => {
        props.navigation.navigate(page);
    };
    return (
        <SafeAreaView>
            <Button title='Table' onPress={() => goToHome("Table")} />
        </SafeAreaView>
    )
}