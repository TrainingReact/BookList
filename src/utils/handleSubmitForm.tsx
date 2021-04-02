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

  const allFill = getKeys(book).every((key) => {
    const check = key === "quantity";

    if (key === "id") {
      return true;
    } else {
      return check ? book.quantity.value > 0 : book[key].value !== "";
    }
  });

  if (allFill) {
    if (checkerModalModify) {
      dispatch(updateBooks({ book: book, id: idBookToModify }));
      dispatch(toggleModalCheckerModify(false));
      clearAllField(book, setBook);
      dispatch(toggleModalChecker(false));
    } else {
      dispatch(addBooks(book));
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
