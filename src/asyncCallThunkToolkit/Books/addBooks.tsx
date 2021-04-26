import axios from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { Obj } from "../../components/MainModalForm/MainModalForm";

export const addBooks: AsyncThunk<any, Obj, {}> = createAsyncThunk(
  "books/addBooks",
  async (book: Obj) => {
    return axios.post("http://localhost:4000/books", book).then((re: any) => {
      return re.data;
    });
  }
);
