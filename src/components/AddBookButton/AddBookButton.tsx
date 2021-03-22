import React, { useState } from "react";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import "./AddBookButtonStyle.tsx";
import ModalFormAddBook from "../ModalFormAddBook/ModalFormAddBook";
import { useSelector, useDispatch } from "react-redux";
import AddBookButtonTypes from "../../types/AddBookButtonTypes/AddBookButtonTypes";
import Wrapper, { ContainerIcon } from "./AddBookButtonStyle";
import { toggleModalChecker } from "../../store/reducers/bookReducer";
const AddBookButton: React.FC<AddBookButtonTypes> = ({
  handleClose,
  setCheckModify,
  checkModify,
  book,
  setBook,
  idBookToModify,
}) => {
  const store = useSelector((state: any) => state.books.books);

  const dispatch = useDispatch();

  const checkStoreLength = store && store.length;

  const handleClick = () => {
    dispatch(toggleModalChecker(true));
  };

  return (
    <Wrapper>
      <ContainerIcon
        checkStoreLength
        className={checkStoreLength > 0 ? "allFill" : ""}
        color={"red"}
        onClick={handleClick}
      >
        <AddCircleRoundedIcon />
      </ContainerIcon>
      <ModalFormAddBook
        setBook={setBook}
        book={book}
        idBookToModify={idBookToModify}
        setCheckModify={setCheckModify}
        checkModify={checkModify}
        handleClose={handleClose}
      />
    </Wrapper>
  );
};

export default AddBookButton;
