import { createContext, useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser'
import { supabase } from '../lib/supabase'

export const BooksContext = createContext()

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([])
  const user = useUser()
  
  async function fetchBooks() {
    try {
      const { error, data } = await supabase
        .from("books")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        throw new Error(error.message)
      }

      console.log(data)
      setBooks(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function fetchBookById(id) {

  }

  async function createBook(bookData) {
    try {
      if (!user) {
        throw new Error('User must be authenticated to create a book')
      }
  
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
      
      console.log(data)
      return data
    } catch (error) {
      console.log(error.message)
    }
    
  }

  async function deleteBook(id) {

  }

  useEffect(() => {
    if (user) {
      fetchBooks()
    } else {
      setBooks([])
    }
  }, [user])

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}