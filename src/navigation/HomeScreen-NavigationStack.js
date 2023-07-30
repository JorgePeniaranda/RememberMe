import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/homeScreen/screens/Home';
import Table from '../screens/homeScreen/screens/Table';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    const goToPage = (page) => {
        navigation.navigate(page)
    };
    return (
        <Stack.Navigator>
            <Stack.Screen name="RememberMe" component={Home} />
            <Stack.Screen name="Table" component={Table} />
        </Stack.Navigator>
    )
}