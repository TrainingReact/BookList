import { Book } from "../Book/Book";
import { BookState } from "../../types/BookStoreTypes/BookStoreTypes";

export interface BooksAddedToCartTypes {
  booksAdddedToCart?: Book[];
  status: string;
}
