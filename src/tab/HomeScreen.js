import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from '../navigation/HomeStack';

export default function HomeScreen() {
    return (
        <NavigationContainer independent>
            <NavigationStack />
        </NavigationContainer>
    )
}