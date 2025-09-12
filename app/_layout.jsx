import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Color'
import { StatusBar } from 'expo-status-bar'

const RootLayour = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
            {/* <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} /> */}
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground,
                },
                headerTintColor: theme.title,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                {/* First Stack.Screen is first to be loaded when the app is opened */}
                <Stack.Screen name="index" options={{ title: 'Home'}} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
            </Stack>
        </>
        
    )
}

export default RootLayour

const styles = StyleSheet.create({})