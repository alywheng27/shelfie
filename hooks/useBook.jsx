import { useContext } from 'react'
import { BooksContext } from './../contexts/BooksContext';


export const useBook = () => {
    const context = useContext(BooksContext)

    if (!context) {
        throw new Error("useBook must be used within a BooksContext")
    }
    
    return context
}
