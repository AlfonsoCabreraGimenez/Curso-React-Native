import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import {Pagina1Screen} from "../screens/Pagina1Screen";
import {Pagina2Screen} from "../screens/Pagina2Screen";
import {Pagina3Screen} from "../screens/Pagina3Screen";
import {styles} from "../theme/appTheme";
import {PersonaScreen} from "../screens/PersonaScreen";

export type RootStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: { id: number, name: string}
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName="" -> inicia a la app con esta página
            screenOptions={{
                headerStyle: {
                    elevation: 0, // no sirve para iOS,
                    shadowColor: 'transparent',
            },
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name="Pagina1Screen" options={{ title:"Pagina 1"}} component={ Pagina1Screen } />
            <Stack.Screen name="Pagina2Screen" options={{ title:"Pagina 2"}} component={ Pagina2Screen } />
            <Stack.Screen name="Pagina3Screen" options={{ title:"Pagina 3"}} component={ Pagina3Screen } />
            <Stack.Screen name="PersonaScreen" options={{ title:" Pag Persona"}} component={PersonaScreen} />
        </Stack.Navigator>
    )
}
