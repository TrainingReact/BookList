import axios from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { Obj } from "../../components/MainModalForm/MainModalForm";

export const addBooksToCart: AsyncThunk<any, Obj, {}> = createAsyncThunk(
  "books/addBooksToCart",
  async (book: Obj) => {
    return axios
      .post("http://localhost:3000/booksAddedToCart", book)
      .then((re: any) => {
        return re.data;
      });
  }
);
