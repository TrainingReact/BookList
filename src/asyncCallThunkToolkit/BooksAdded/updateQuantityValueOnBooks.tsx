import axios from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

export const updateQuantityValueOnBooks: AsyncThunk<
  any,
  any,
  {}
> = createAsyncThunk("books/updateQuantityValueOnBooks", async (book: any) => {
  return axios
    .patch(`http://localhost:3000/booksAddedToCart/${book?.id}`, {
      quantity: {
        value: book?.value,
      },
    })
    .then((re: any) => {
      return re.data;
    });
});
