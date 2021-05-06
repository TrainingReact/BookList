import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import BookToDispatchWithoutKeyError from "../../types/BookToDispatchWithoutErrorKey/BookToDispatchWithoutErrorKey";

export const updateQuantityValueOnBooks: AsyncThunk<
  any,
  any,
  {}
> = createAsyncThunk(
  "books/updateQuantityValueOnBooks",
  async (book: BookToDispatchWithoutKeyError) => {
    return axios
      .patch(`http://localhost:4000/booksAddedToCart/${book?.id}`, {
        quantity: book.quantity,
      })
      .then((re: AxiosResponse) => {
        return re.data;
      });
  }
);
