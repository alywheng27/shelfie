import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "expo-router";

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)
    const router = useRouter()

    async function login(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            throw Error(error.message)
        }

        setUser(data.session)
        router.replace('/profile')
    }

    async function register(email, password) {
        const { data, error } = await supabase.auth.signUp({ email, password })

        if (error) {
            throw Error(error.message)
        }

        login(email, password)
    }

    async function logout() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw Error(error.message)
        }

        router.replace('/')
        setUser(null)
    }

    const checkAuthentication = async () => {
        try {
            const currentSession = await supabase.auth.getSession()
            console.table(currentSession.data.session)
            setUser(currentSession.data.session)

            const {
                data: { subscription },
            } = supabase.auth.onAuthStateChange((_event, session) => {
                console.table(session)
                setUser(session);
            });
        
            return () => subscription.unsubscribe();
        } catch (error) {
            setUser(null)
        } finally {
            setAuthChecked(true)
        }
      };
    
      useEffect(() => {
        checkAuthentication();
      }, []);

    return (
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
            { children }
        </UserContext.Provider>
    )
}