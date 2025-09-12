import { StyleSheet, useColorScheme, Image } from 'react-native'

// Images
import DarkLogo from '../assets/img/dark.jpg'
import LightLogo from '../assets/img/light.jpg'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    },
})