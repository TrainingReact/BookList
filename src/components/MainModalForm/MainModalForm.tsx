import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalJsx from "../ModalJsx/ModalJsx";
import MainModalFormPropsTypes from "../../types/MainModalFormPropsTypes/MainModalFormPropsTypes";
import Field from "../../types/FieldTypes/FieldTypes";
import { handleFormSubmit } from "../../utils/handleSubmitForm";

export interface Obj {
  id: number;
  name: Field;
  author: Field;
  gender: Field;
  img: Field;
  quantity: number;
  disponibility: number;
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
    handleFormSubmit(
      book,
      val,
      setBook,
      dispatch,
      checkerModalModify,
      idBookToModify,
      toggle
    );
  };

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isQuantity = e.currentTarget.name === "quantity";

    if (!isQuantity) {
      setBook({
        ...book,
        id: Math.random(),
        [e.currentTarget.name]: {
          value: String(e.currentTarget.value),
          error: "",
        },
      });
    } else {
      setBook({
        ...book,
        [e.currentTarget.name]:
          +e.currentTarget.value < 1 ? 1 : +e.currentTarget.value,
      });
    }
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
