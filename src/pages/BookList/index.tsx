import { useEffect, useState } from "react";
import AddBookButton from "../../components/AddBookButton/AddBookButton";
import ListBooksAdded from "../../components/ListBooksAdded/ListBooksAdded";
import { Obj } from "../../components/MainModalForm/MainModalForm";
import clearAllField from "../../utils/clearAllField";
import setError from "../../utils/setErrorFunc";
import { useDispatch } from "react-redux";
import {
  toggleModalChecker,
  toggleModalCheckerModify,
} from "../../store/reducers/bookReducer";
import { getBooks } from "../../asyncCallThunkToolkit/Books/getBooks";

const Index = () => {
  const [idBookToModify, setIdBookToModify] = useState<number>(0);

  const dispatch = useDispatch();

  const [book, setBook] = useState<Obj>({
    id: 0,
    name: { value: "", error: "" },
    author: { value: "", error: "" },
    gender: { value: "", error: "" },
    img: { value: "", error: "" },
    quantity: { value: 0, error: "" },
  });

  const handleClose = () => {
    let val = "";
    clearAllField(book, setBook);
    dispatch(toggleModalChecker(false));
    dispatch(toggleModalCheckerModify(false));
    setError(book, setBook, val);
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      <AddBookButton
        idBookToModify={idBookToModify}
        handleClose={handleClose}
        book={book}
        setBook={setBook}
      />
      <ListBooksAdded
        book={book}
        setBook={setBook}
        setIdBookToModify={setIdBookToModify}
      />
    </div>
  );
};

export default Index;
