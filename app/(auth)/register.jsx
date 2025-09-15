import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import { Link } from 'expo-router'
import { useUser } from '../../hooks/useUser'

// Colors
import { Colors } from '../../constants/Color'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'


const Register = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)

    const { register } = useUser()
  
    const handleSubmit = async () => {
        setError(null)

        try {
            await register(email, password)
        } catch (error) {
            setError(error.message)
        }
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

                    <ThemedButton onPress={handleSubmit} style={{ width: '80%' }}>
                        <Text style={{ textAlign: 'center', color: '#f2f2f2' }}>Register</Text>
                    </ThemedButton>

                    <Spacer />
                    {error && <Text style={styles.error}>{error}</Text>}

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