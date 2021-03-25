import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBooks,
  updateBooks,
  toggleModalChecker,
  toggleModalCheckerModify,
} from "../../store/reducers/bookReducer";
import ModalJsx from "../ModalJsx/ModalJsx";
import MainModalFormPropsTypes from "../../types/MainModalFormPropsTypes/MainModalFormPropsTypes";
import getKeys from "../../utils/getKeysFunc";
import setError from "../../utils/setErrorFunc";
import clearAllField from "../../utils/clearAllField";
import Field from "../../types/FieldTypes/FieldTypes";

export interface Obj {
  id: number;
  name: Field;
  author: Field;
  gender: Field;
  img: Field;
}

const MainModalForm: React.FC<MainModalFormPropsTypes> = ({
  handleClose,
  book,
  idBookToModify,
  setBook,
}) => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const dispatch = useDispatch();

  const checkerModalModify = useSelector(
    (state: any) => state.books.modalCheckerModify
  );

  let val = "required field";

  const handleAddBook = () => {
    setError(book, setBook, val);

    const allFill = getKeys(book).every((key) => {
      if (key === "id") {
        return true;
      } else {
        return book[key].value !== "";
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
      alert("fill in all fields M8");
    }
  };

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      id: Math.random(),
      [e.currentTarget.name]: {
        value: e.currentTarget.value,
        error: "",
      },
    });
  };

  return (
    <ModalJsx
      book={book}
      handleAddBook={handleAddBook}
      handleType={handleType}
      handleClose={handleClose}
      setToggle={setToggle}
      toggle={toggle}
    />
  );
};

export default MainModalForm;
