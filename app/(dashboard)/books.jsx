import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { fetchBooks } from '../../services/books'
import { useEffect, useState } from 'react'

const Books = () => {
    const [books, setBooks] = useState([])

    const getAllBooks = async () => {
        setBooks(await fetchBooks())
    }
    
    useEffect(() => {
        getAllBooks()
    }, [])

    return (
        <ThemedView style={styles.container} safe={true}> 
            <Spacer />
            <ThemedText style={styles.headings} title={true}>
                Your reading list
            </ThemedText>
            <Spacer />
        </ThemedView>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    headings: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})