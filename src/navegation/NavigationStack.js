import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import Home2 from '../screens/Home2';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    const goToPage = (e) => {
        console.log(e);
    };
    return (
        <Stack.Navigator>
            <Stack.Screen navegate={goToPage} name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Home2" component={Home2} options={{ headerShown: false }} initialParams={{ lolasdwadasdwadsadwa: 2 }} />
        </Stack.Navigator>
    )
}