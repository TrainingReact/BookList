import React, { useState } from "react";
import AddBookButton from "../../components/AddBookButton/AddBookButton";
import ListBooksAdded from "../../components/ListBooksAdded/ListBooksAdded";
import { Obj } from "../../components/ModalFormAddBook/MainModalForm/MainModalForm";
import clearAllField from "../../utils/clearAllField";
import setError from "../../utils/setErrorFunc";
const Index = () => {
  const [checkClicked, setCheckClicked] = useState<Boolean>(false);
  const [checkModify, setCheckModify] = useState<Boolean>(false);
  const [idBookToModify, setIdBookToModify] = useState<number>(0);

  const [book, setBook] = useState<Obj>({
    id: 0,
    name: { value: "", error: "" },
    author: { value: "", error: "" },
    gender: { value: "", error: "" },
    img: { value: "", error: "" },
  });

  console.log(`some of this`);

  const handleClose = () => {
    let val = "";
    clearAllField(book, setBook);
    setCheckClicked(false);
    setCheckModify(false);
    setError(book, setBook, val);
  };

  return (
    <div>
      <AddBookButton
        idBookToModify={idBookToModify}
        handleClose={handleClose}
        checkClicked={checkClicked}
        setCheckClicked={setCheckClicked}
        setCheckModify={setCheckModify}
        checkModify={checkModify}
        book={book}
        setBook={setBook}
      />
      <ListBooksAdded
        book={book}
        setBook={setBook}
        setCheckModify={setCheckModify}
        setCheckClicked={setCheckClicked}
        setIdBookToModify={setIdBookToModify}
      />
    </div>
  );
};

export default Index;
