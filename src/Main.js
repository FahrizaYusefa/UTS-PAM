import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/home';
import Videoss from './Screen/video';
import Beranda from './Screen/beranda';
import Preview from './Screen/preview';

const Stack = createNativeStackNavigator();
export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Beranda">
                <Stack.Screen options={{ headerShown: false }} name="Beranda" component={Beranda} />
                <Stack.Screen options={{ title: 'Scan Pesan Rahasia (QR)' }} name="Scanner" component={Home} />
                <Stack.Screen options={{ title: 'Daftar Video' }} name="Preview" component={Preview} />
                <Stack.Screen options={{ title: 'Detail Video' }} name="Videoss" component={Videoss} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}