import { supabase } from "../lib/supabase";

export const fetchBooks = async () => {
  let { data: books, error } = await supabase.from("books").select("*");
  //   console.log(JSON.stringify(books, null, 2));

  if (error) {
    throw new Error();
  }

  return books;
};
