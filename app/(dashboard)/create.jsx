import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { useState } from 'react'
import { useBook } from '../../hooks/useBook'
import { useRouter } from 'expo-router'
import ThemedTextInput from './../../components/ThemedTextInput';
import ThemedButton from './../../components/ThemedButton';

const Create = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const { createBook } = useBook()
    const router = useRouter()

    const handleSubmit = async () => {
        if (!title.trim() || !author.trim() || !description.trim()) return

        setLoading(true)

        await createBook({ title, author, description })

        // reset fields
        setTitle("")
        setAuthor("")
        setDescription("")

        // redirect
        router.replace('/books')

        //reset loading state
        setLoading(false)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText style={styles.headings} title={true}>
                Add a new book
            </ThemedText>
            <Spacer />

            <ThemedTextInput
                style={styles.input}
                placeholder="Book Title"
                value={title}
                onChangeText={setTitle}
            />
            <Spacer />

            <ThemedTextInput
                style={styles.input}
                placeholder="Author"
                value={author}
                onChangeText={setAuthor}
            />
            <Spacer />

            <ThemedTextInput
                style={styles.multiline}
                placeholder="Book Description"
                value={description}
                onChangeText={setDescription}
                multiline={true}
            />
            <Spacer />

            <ThemedButton onPress={handleSubmit} disabled={loading}>
                <Text style={{ color: '#fff' }}>
                    {loading ? "Saving..." : "Create Book"}
                </Text>
            </ThemedButton>

        </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headings: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    }
})