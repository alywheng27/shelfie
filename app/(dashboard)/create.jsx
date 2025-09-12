import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const Create = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
        <Spacer />
        <ThemedText style={styles.headings} title={true}>
            Add a new book
        </ThemedText>
        <Spacer />

    </ThemedView>
  )
}

export default Create

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