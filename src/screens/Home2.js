import { SafeAreaView, Button } from 'react-native'
import React from "react";
/* import PropTypes from 'prop-types' */

export default function Home2(props) {
    console.log(props);
    return (
        <SafeAreaView>
            <Button title='dawdawdaw' onPress={(e) => props.navegate} />
        </SafeAreaView>
    )
}