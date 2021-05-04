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
import { Obj } from "../MainModalForm/MainModalForm";
import { deleteBooksToCart } from "../../asyncCallThunkToolkit/BooksAdded/deleteBooksToCart";
import findFunction from "../../utils/findFunction";

const ListBooksAdded: React.FC<ListBookAddedType> = ({ book, setBook }) => {
  const store = useSelector((state: any) => state.books.books);

  const storeFromCart = useSelector(
    (state: any) => state.booksAddedToCart.booksAddedToCart
  );

  const dispatch = useDispatch();

  const lastItem = store && store.length;

  const handleDelete = (id: number) => {
    dispatch(deleteBooks(id));

    const check = findFunction(storeFromCart, id);

    if (check) dispatch(deleteBooksToCart(id));

    if (store.length === 1) alert("you have read all the books");
  };

  const handleModify = (id: number) => {
    const bookToModify: Obj = findFunction(store, id);

    getKeys(book).forEach((key: objKeys) => {
      if (key !== "id" && key !== "quantity" && key !== "disponibility") {
        setBook((prevState) => ({
          ...prevState,
          [key]: {
            value: bookToModify[key],
            error: book[key].error,
          },
        }));
      } else {
        setBook((prevState) => ({
          ...prevState,
          id: bookToModify.id,
          quantity: bookToModify.quantity,
        }));
      }
    });

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
