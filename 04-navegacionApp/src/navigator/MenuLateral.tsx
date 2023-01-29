import React from "react";
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import {StackNavigator} from "./StackNavigator";
import {SettingsScreen} from "../screens/SettingsScreen";
import {Image, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {styles} from "../theme/appTheme";

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={ (props) => <MenuInterno {...props} />}
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',

        }}>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}}  component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{title:'Settings'}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ( { navigation } :  DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Parte del avatar*/}
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                uri:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    }} />
            </View>

            {/* Opciones de menu*/}
            <View style={ styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('StackNavigator')}>
                    <Text style={styles.menuText}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
