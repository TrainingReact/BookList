import axios from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { Obj } from "../../components/MainModalForm/MainModalForm";

export const updateQuantityBooks: AsyncThunk<any, any, {}> = createAsyncThunk(
  "books/updateBooks",
  async (book: Obj) => {
    return axios
      .patch(`http://localhost:4000/books/${book?.id}`, {
        quantity: book.quantity,
      })
      .then((re: any) => {
        return re.data;
      });
  }
);
