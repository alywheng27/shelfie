import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Color'
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 

const ThemedView = ({ style, safe = false,  ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const inset = useSafeAreaInsets()

  if (safe) return (
    <View style={[{ 
      backgroundColor: theme.background,
      paddingTop: inset.top,
      paddingBottom: inset.bottom
    }, style]}
    {...props} />
  )

  return (
    <View style={[{ 
      backgroundColor: theme.background,
    }, style]}
    {...props} />
  )
}

export default ThemedView

const styles = StyleSheet.create({})