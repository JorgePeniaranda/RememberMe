import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../tab/HomeScreen';
import SettingsScreen from '../tab/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Configuración" component={SettingsScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}