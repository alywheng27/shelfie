import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../../constants/Color'
import { StatusBar } from 'expo-status-bar'
import GuestOnly from '../../components/auth/GuestOnly'

const RootLayour = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <GuestOnly>
            {/* <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} /> */}
            <StatusBar value="auto" />
            <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
        </GuestOnly>
    )
}

export default RootLayour

const styles = StyleSheet.create({})