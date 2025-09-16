import { StyleSheet, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'
import { useBook } from '../../../hooks/useBook'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedButton from '../../../components/ThemedButton'
import { Colors } from '../../../constants/Color'

const BookDetails = () => {
    const [book, setBook] = useState({})

    const { id } = useLocalSearchParams()
    const { fetchBookById, deleteBook } = useBook()
    const router = useRouter()

    const loadBook = async () => {
        let bookData = await fetchBookById(id)
        setBook(bookData)
    }

    useEffect(() => {
      loadBook()
    }, [id])

    const handleDelete = async () => {
        await deleteBook(id)
        setBook(null)
        router.replace('/books')
    }
    
    if (book === null) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by <Text style={{ fontStyle: 'italic' }}>{book.author}</Text></ThemedText>
                <Spacer />

                <ThemedText title={true}>Book Description: </ThemedText>
                <Spacer height={10} />

                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>

            <ThemedButton style={styles.delete} onPress={handleDelete}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>
                    Delete Book
                </Text>
            </ThemedButton>
        </ThemedView>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {
        margin: 20,
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: 'center',
    },
})