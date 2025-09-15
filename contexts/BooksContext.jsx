import { createContext, useState } from 'react'
import { useUser } from '../hooks/useUser'
import { supabase } from '../lib/supabase'

export const BooksContext = createContext()

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([])
  const user = useUser()
  
  async function fetchBooks() {

  }

  async function fetchBookById(id) {

  }

  async function createBook(bookData) {
    if (!user) {
      throw new Error('User must be authenticated to create a book')
    }
    console.log(user.user.user.id)
    const { error, data } = await supabase
      .from("books")
      .insert({
        ...bookData,
        uid: user.user.user.id,
      })
      .select()
      .single()
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  }

  async function deleteBook(id) {

  }

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}