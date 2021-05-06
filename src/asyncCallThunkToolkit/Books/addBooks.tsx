import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { Obj } from "../../components/MainModalForm/MainModalForm";
import BookToDispatchWithoutKeyError from "../../types/BookToDispatchWithoutErrorKey/BookToDispatchWithoutErrorKey";

export const addBooks: AsyncThunk<
  any,
  BookToDispatchWithoutKeyError,
  {}
> = createAsyncThunk(
  "books/addBooks",
  async (book: BookToDispatchWithoutKeyError) => {
    return axios
      .post("http://localhost:4000/books", book)
      .then((re: AxiosResponse) => {
        return re.data;
      });
  }
);
