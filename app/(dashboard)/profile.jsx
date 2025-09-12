import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Profile = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
        <Spacer />
        <ThemedText style={styles.headings} title={true}>
            Your email
        </ThemedText>
        <Spacer />

      <ThemedText>Time to start reading books...</ThemedText>
    </ThemedView>
  )
}

export default Profile

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