import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import { useUser } from '../../hooks/useUser'

const Profile = () => {
  const { user, logout } = useUser()

  return (
    <ThemedView style={styles.container} safe={true}>
        <Spacer />
        <ThemedText style={styles.headings} title={true}>
            {user && user.user.email}
        </ThemedText>
        <Spacer />

      <ThemedText>Time to start reading books...</ThemedText>

      <Spacer />
      <ThemedButton onPress={logout}>
        <Text style={{ color: '#f2f2f2' }}>Logout</Text>
      </ThemedButton>
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