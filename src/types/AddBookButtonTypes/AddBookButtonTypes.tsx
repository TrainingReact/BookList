import { Obj } from "../../components/MainModalForm/MainModalForm";

type AddBookButton = {
  handleClose: any;
  setCheckModify: React.Dispatch<React.SetStateAction<Boolean>>;
  checkModify: Boolean;
  idBookToModify: number;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default AddBookButton;
