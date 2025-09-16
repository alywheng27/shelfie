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
    try {
      const { error, data } = await supabase
        .from("books")
        .select("*")
        .single()
        .eq('id', id)
        .order("created_at", { ascending: true });

      if (error) {
        throw new Error(error.message)
      }

      // console.log(data)
      return data
    } catch (error) {
      console.log(error.message)
    }
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

      const channel = supabase
        .channel("books-channel")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "books" },
          (payload) => {
            const newBooks = payload.new;
            setBooks((prev) => [...prev, newBooks]);
          }
        )
        // .on(
        //   "postgres_changes",
        //   { event: "UPDATE", schema: "public", table: "books" },
        //   (payload) => {
        //     const updatedBook = payload.new;
        //     setBooks((prev) =>
        //       prev.map((t) => (t.id === updatedBook.id ? updatedBook : t))
        //     );
        //   }
        // )
        // .on(
        //   "postgres_changes",
        //   { event: "DELETE", schema: "public", table: "books" },
        //   (payload) => {
        //     const deletedBook = payload.old;
        //     setBooks((prev) => prev.filter((t) => t.id !== deletedBook.id));
        //   }
        // )
        .subscribe((status) => {
          console.log("Subscription: ", status);
        });

      return () => {
        channel.unsubscribe();
        supabase.removeChannel(channel);
      };
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