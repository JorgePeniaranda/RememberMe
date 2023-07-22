import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import SettingsHome from "../screens/SettingsHome"

const Tab = createBottomTabNavigator();

export default function NavigationTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={HomeScreen}/>
            <Tab.Screen name="Configuración" component={SettingsHome}/>
        </Tab.Navigator>
    )
}