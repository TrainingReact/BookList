import setError from "./setErrorFunc";
import getKeys from "./getKeysFunc";
import clearAllField from "./clearAllField";
import {
  toggleModalChecker,
  toggleModalCheckerModify,
} from "../store/reducers/bookReducer";
import { updateBooks } from "../asyncCallThunkToolkit/Books/updateBooks";
import { addBooks } from "../asyncCallThunkToolkit/Books/addBooks";
import { Obj } from "../components/MainModalForm/MainModalForm";
import { Dispatch } from "redux";

export const handleFormSubmit = (
  book: Obj,
  val: string,
  setBook: React.Dispatch<React.SetStateAction<Obj>>,
  dispatch: Dispatch<any>,
  checkerModalModify: any,
  idBookToModify: number,
  toggle: Boolean
) => {
  setError(book, setBook, val);

  //this function return array of boolean to check if all field are fill
  const allFill = getKeys(book).every((key) => {
    if (key === "id" || key === "quantity" || key === "disponibility") {
      return true;
    } else {
      return book[key].value !== "";
    }
  });

  if (allFill) {
    if (checkerModalModify) {
      const bookToModifyWithoutErrorKey = {
        ...book,
        id: book.id,
        name: book.name.value,
        author: book.name.value,
        gender: book.name.value,
        img: book.name.value,
        quantity: book.quantity,
        disponibility: book.disponibility,
      };
      dispatch(updateBooks(bookToModifyWithoutErrorKey));
      dispatch(toggleModalCheckerModify(false));
      clearAllField(book, setBook, book?.quantity);
      dispatch(toggleModalChecker(false));
    } else {
      const bookToDispatchWithoutKeyError = {
        ...book,
        id: book.id,
        name: book.name.value,
        author: book.name.value,
        gender: book.name.value,
        img: book.name.value,
        quantity: book.quantity,
        disponibility: book.disponibility,
      };
      dispatch(addBooks(bookToDispatchWithoutKeyError));
      clearAllField(book, setBook);
      if (!toggle) {
        dispatch(toggleModalChecker(false));
      }
    }
  } else {
    alert(
      "u might made a mistake , check if u fill all the field and the quantity of the book must be superior of 0..."
    );
  }
};
