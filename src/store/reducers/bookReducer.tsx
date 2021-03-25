import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import Field from "../../types/FieldTypes/FieldTypes";
import axios, { AxiosResponse } from "axios";
import { Obj } from "../../components/MainModalForm/MainModalForm";
interface Book {
  id: number;
  name: Field;
  author: Field;
  gender: Field;
  img: Field;
}

export interface BookState {
  books: Book[];
  modalChecker: boolean;
  modalCheckerModify: boolean;
  status: string;
}

const initialState = {
  books: [],
  modalChecker: false,
  modalCheckerModify: false,
  status: "",
} as BookState;

export const getBooks: AsyncThunk<
  AxiosResponse<any>,
  void,
  {}
> = createAsyncThunk("books/getBooks", async () => {
  return axios.get("http://localhost:3000/books").then((res) => {
    return res.data;
  });
});

export const addBooks: AsyncThunk<any, Obj, {}> = createAsyncThunk(
  "books/addBooks",
  async (book: Obj) => {
    return axios.post("http://localhost:3000/books", book).then((re: any) => {
      return re.data;
    });
  }
);

export const updateBooks: AsyncThunk<any, any, {}> = createAsyncThunk(
  "books/updateBooks",
  async (book: any) => {
    return axios
      .patch(`http://localhost:3000/books/${book?.id}`, book?.book)
      .then((re: any) => {
        return re.data;
      });
  }
);

export const deleteBooks: AsyncThunk<any, any, {}> = createAsyncThunk(
  "books/deleteBooks",
  async (id: any) => {
    return axios.delete(`http://localhost:3000/books/${id}`).then((re: any) => {
      return id;
    });
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    toggleModalChecker(state, action) {
      state.modalChecker = action.payload;
    },
    toggleModalCheckerModify(state, action) {
      state.modalCheckerModify = action.payload;
    },
  },
  extraReducers: {
    [getBooks.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [getBooks.fulfilled.toString()]: (state, action) => {
      state.books = action.payload;
      state.status = "success";
    },
    [getBooks.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
    [addBooks.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [addBooks.fulfilled.toString()]: (state, action) => {
      state.books.push(action.payload);
      state.status = "success";
    },
    [addBooks.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
    [updateBooks.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [updateBooks.fulfilled.toString()]: (state, action) => {
      state.books = state.books.map((val) => {
        return val.id === action.payload.id ? (val = action.payload) : val;
      });
      state.status = "success";
    },
    [updateBooks.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
    [deleteBooks.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [deleteBooks.fulfilled.toString()]: (state, action) => {
      console.log("action.payload.id", action.payload);
      state.books = state.books.filter((book) => {
        return book.id !== action.payload;
      });
      state.status = "success";
    },
    [deleteBooks.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const {
  toggleModalChecker,
  toggleModalCheckerModify,
} = bookSlice.actions;

export default bookSlice.reducer;
