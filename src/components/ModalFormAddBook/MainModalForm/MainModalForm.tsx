import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./MainModalForm.css";
import { addBook, modifyBook } from "../../../store/reducers/bookReducer";
import ModalJsx from "./ModalJsx/ModalJsx";
import MainModalFormPropsTypes from "../../../types/MainModalFormPropsTypes/MainModalFormPropsTypes";
import getKeys from "../../../utils/getKeysFunc";
import setError from "../../../utils/setErrorFunc";
import clearAllField from "./../../../utils/clearAllField";
import Field from "../.../../../../types/FieldTypes/FieldTypes";

export interface Obj {
  id: number;
  name: Field;
  author: Field;
  gender: Field;
  img: Field;
}

const MainModalForm: React.FC<MainModalFormPropsTypes> = ({
  handleClose,
  setCheckClicked,
  setCheckModify,
  checkModify,
  book,
  idBookToModify,
  setBook,
}) => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const dispatch = useDispatch();

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
      if (checkModify) {
        dispatch(modifyBook({ book: book, id: idBookToModify }));
        setCheckModify(false);
        clearAllField(book, setBook);
        setCheckClicked(false);
      } else {
        dispatch(addBook(book));
        clearAllField(book, setBook);
        if (!toggle) {
          setCheckClicked(false);
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
      checkModify={checkModify}
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
