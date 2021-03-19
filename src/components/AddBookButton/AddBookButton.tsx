import React, { useState } from "react";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import "./AddBookButtonStyle.tsx";
import ModalFormAddBook from "../ModalFormAddBook/ModalFormAddBook";
import { useSelector } from "react-redux";
import AddBookButtonTypes from "../../types/AddBookButtonTypes/AddBookButtonTypes";
import Wrapper, { ContainerIcon } from "./AddBookButtonStyle";
const AddBookButton: React.FC<AddBookButtonTypes> = ({
  setCheckClicked,
  checkClicked,
  handleClose,
  setCheckModify,
  checkModify,
  book,
  setBook,
  idBookToModify,
}) => {
  const [checkOver, setCheckOver] = useState<Boolean>(false);

  const store = useSelector((state: any) => state.books.books);

  const checkStoreLength = store && store.length;

  const handleClick = () => {
    setCheckClicked(true);
  };

  const handleMouseOver = () => {
    setCheckOver(true);
  };

  const handleMouseOut = () => {
    setCheckOver(false);
  };

  return (
    <Wrapper>
      <ContainerIcon
        checkStoreLength
        className={checkStoreLength > 0 ? "allFill" : ""}
        color={"red"}
        onClick={handleClick}
      >
        <AddCircleRoundedIcon
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </ContainerIcon>
      <ModalFormAddBook
        setBook={setBook}
        book={book}
        idBookToModify={idBookToModify}
        setCheckModify={setCheckModify}
        checkModify={checkModify}
        handleClose={handleClose}
        setCheckClicked={setCheckClicked}
        checkClicked={checkClicked}
      />
    </Wrapper>
  );
};

export default AddBookButton;
