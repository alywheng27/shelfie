import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import { Link } from 'expo-router'

// Colors
import { Colors } from '../../constants/Color'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'


const Register = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    const handleSubmit = () => {
        console.log('Register form submitted')
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <ThemedView style={styles.container}>
                    <ThemedText style={styles.title}>
                        Register for an account
                    </ThemedText>

                    <ThemedTextInput
                        style={{ width: '80%', marginBottom: 20 }}
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        value={email}
                    />

                    <ThemedTextInput
                        style={{ width: '80%', marginBottom: 20 }}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />

                    <ThemedButton onPress={handleSubmit}>
                        <Text style={{ color: '#f2f2f2' }}>Register</Text>
                    </ThemedButton>

                    <Spacer />
                    <Link href="/login" style={{ textAlign: 'center'}}>
                        <ThemedText>Already have an account?</ThemedText>
                    </Link>
                </ThemedView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
        marginTop: '70%',
    },
})