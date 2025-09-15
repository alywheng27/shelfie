import { FlatList, Pressable, StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { fetchBooks } from '../../services/books'
import { useEffect, useState } from 'react'
import { useBook } from '../../hooks/useBook'
import { Colors } from '../../constants/Color'

const Books = () => {
    const { books } = useBook()

    return (
        <ThemedView style={styles.container} safe={true}> 
            <Spacer />
            <ThemedText style={styles.headings} title={true}>
                Your reading list
            </ThemedText>
            <Spacer />

            <FlatList
                data={books}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({item}) => (
                    <Pressable>
                        <ThemedCard style={styles.card}>
                            <ThemedText style={styles.title}>{item.title}</ThemedText>
                            <ThemedText>Written by {item.author}</ThemedText>
                        </ThemedCard>
                    </Pressable>
                )}
            />
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
    },
    card: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 10,
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})