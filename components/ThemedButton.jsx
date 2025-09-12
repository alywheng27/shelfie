import { StyleSheet, Pressable, useColorScheme } from 'react-native'
import { Colors } from '../constants/Color'

const ThemedButton = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Pressable style={(pressed) => [styles.btn, pressed && styles.btnPressed, style]} {...props} />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 6,
        marginVertical: 10,
    },
    btnPressed: {
        opacity: 0.8,
    }
})