import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { Obj } from "../../components/MainModalForm/MainModalForm";

export const addBooksToCart: AsyncThunk<any, Obj, {}> = createAsyncThunk(
  "books/addBooksToCart",
  async (book: Obj) => {
    return axios
      .post("http://localhost:4000/booksAddedToCart", book)
      .then((re: AxiosResponse) => {
        return re.data;
      });
  }
);
