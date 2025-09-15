import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'

// Colors
import { Colors } from '../../constants/Color'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(null)

    const { login } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            await login(email, password)
        } catch (error) {
            setError(error.message)
        }
    }
    
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>
                    Login to Your Account
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

                <ThemedButton onPress={handleSubmit} style={{ width: '80%' }}>
                    <Text style={{ textAlign: 'center', color: '#f2f2f2' }}>Login</Text>
                </ThemedButton>

                <Spacer />
                {error && <Text style={styles.error}>{error}</Text>}

                <Spacer />
                <Link href="/register" style={{ textAlign: 'center'}}>
                    <ThemedText>Signup for new account.</ThemedText>
                </Link>
            </ThemedView>
            
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login

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
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth1: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    }
})