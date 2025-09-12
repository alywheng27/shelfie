import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Color'
import { useColorScheme } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const DashboardLayour = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const insets = useSafeAreaInsets();

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: theme.navBackground,
                paddingTop: 10,
                height: 70 + insets.bottom,
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor,
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
            },
        }}>
            <Tabs.Screen 
                name="books" 
                options={{ 
                    title: 'Books',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'book' : 'book-outline'}
                            size={24} 
                            color={focused ? theme.iconColorFocused : theme.iconColor} 
                        />
                    )
                }
                }
                
            />
            <Tabs.Screen 
                name="create" 
                options={{ 
                    title: 'Create',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'create' : 'create-outline'}
                            size={24} 
                            color={focused ? theme.iconColorFocused : theme.iconColor} 
                        />
                    )
                }} 
            />
            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'person' : 'person-outline'}
                            size={24} 
                            color={focused ? theme.iconColorFocused : theme.iconColor} 
                        />
                    )
                }}                 
            />
        </Tabs>
    )
}

export default DashboardLayour