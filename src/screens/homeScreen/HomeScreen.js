import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from '../../navigation/HomeScreen-NavigationStack';

export default function HomeScreen() {
    return (
        <NavigationContainer independent>
            <NavigationStack />
        </NavigationContainer>
    )
}