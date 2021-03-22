import { Obj } from "../../components/MainModalForm/MainModalForm";

type AddBookButton = {
  handleClose: any;

  idBookToModify: number;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default AddBookButton;
