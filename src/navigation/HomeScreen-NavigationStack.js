import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/homeScreen/screens/Home';
import Inventario from '../screens/homeScreen/screens/Inventario';
import Calendario from '../screens/homeScreen/screens/Calendario';
import Alarmas from '../screens/homeScreen/screens/Alarmas';
import Notas from '../screens/homeScreen/screens/Notas';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    const goToPage = (page) => {
        navigation.navigate(page)
    };
    return (
        <Stack.Navigator>
            <Stack.Screen name="RememberMe" component={Home} />
            <Stack.Screen name="Calendario" component={Calendario} />
            <Stack.Screen name="Inventario" component={Inventario} />
            <Stack.Screen name="Alarmas" component={Alarmas} />
            <Stack.Screen name="Notas" component={Notas} />
        </Stack.Navigator>
    )
}