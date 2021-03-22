import { useState } from "react";
import AddBookButton from "../../components/AddBookButton/AddBookButton";
import ListBooksAdded from "../../components/ListBooksAdded/ListBooksAdded";
import { Obj } from "../../components/MainModalForm/MainModalForm";
import clearAllField from "../../utils/clearAllField";
import setError from "../../utils/setErrorFunc";
import { useDispatch } from "react-redux";
import { toggleModalChecker } from "../../store/reducers/bookReducer";
import { useSelector } from "react-redux";
const Index = () => {
  const [checkModify, setCheckModify] = useState<Boolean>(false);
  const [idBookToModify, setIdBookToModify] = useState<number>(0);

  const checkerModal = useSelector((state: any) => state.books.modalChecker);

  const dispatch = useDispatch();

  const [book, setBook] = useState<Obj>({
    id: 0,
    name: { value: "", error: "" },
    author: { value: "", error: "" },
    gender: { value: "", error: "" },
    img: { value: "", error: "" },
  });

  const handleClose = () => {
    let val = "";
    clearAllField(book, setBook);
    dispatch(toggleModalChecker(false));
    setCheckModify(false);
    setError(book, setBook, val);
  };

  return (
    <div>
      <AddBookButton
        idBookToModify={idBookToModify}
        handleClose={handleClose}
        setCheckModify={setCheckModify}
        checkModify={checkModify}
        book={book}
        setBook={setBook}
      />
      <ListBooksAdded
        checkerModal={checkerModal}
        book={book}
        setBook={setBook}
        setCheckModify={setCheckModify}
        setIdBookToModify={setIdBookToModify}
      />
    </div>
  );
};

export default Index;
