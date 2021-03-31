import { useSelector } from "react-redux";
import React from "react";
import {
  toggleModalChecker,
  toggleModalCheckerModify,
} from "../../store/reducers/bookReducer";
import { useDispatch } from "react-redux";
import ListBookAddedType from "../../types/ListBookAdded/ListBookAdded";
import getKeys from "../../utils/getKeysFunc";
import { objKeys } from "../../types/objKeysTypes/objKeysType";
import { ContMainListBookAdded } from "./ListBooksAddedStyle";
import MainListBookAdded from "./MainListBookAdded/MainListBookAdded";
import { deleteBooks } from "../../asyncCallThunkToolkit/Books/deleteBooks";
import { deleteBooksToCart } from "../../asyncCallThunkToolkit/BooksAdded/deleteBooksToCart";
const ListBooksAdded: React.FC<ListBookAddedType> = ({
  setIdBookToModify,
  book,
  setBook,
}) => {
  const store = useSelector((state: any) => state.books.books);

  const storeFromBooksCart = useSelector(
    (state: any) => state.booksAddedToCart
  );

  console.log(storeFromBooksCart);

  const dispatch = useDispatch();
  const lastItem = store && store.length;

  const handleDelete = (id: number) => {
    dispatch(deleteBooks(id));
    dispatch(deleteBooksToCart(id));

    if (store.length === 1)
      alert("you have read all the books! great keep it up!");
  };

  const handleModify = (id: number) => {
    getKeys(book).map((key: objKeys) => {
      let valueOfObjToModify: string = "";
      store.find((val: any) =>
        val.id === id ? (valueOfObjToModify = val[key].value) : null
      );
      if (key !== "id") {
        setBook((prevState) => ({
          ...prevState,
          [key]: {
            value: valueOfObjToModify,
            error: book[key].error,
          },
        }));
      }
    });

    setIdBookToModify(id && id);
    dispatch(toggleModalCheckerModify(true));
    dispatch(toggleModalChecker(true));
  };

  return (
    <ContMainListBookAdded>
      <MainListBookAdded
        handleDelete={handleDelete}
        handleModify={handleModify}
        lastItem={lastItem}
      />
    </ContMainListBookAdded>
  );
};

export default ListBooksAdded;
