import { Obj } from "../../components/ModalFormAddBook/MainModalForm/MainModalForm";

type AddBookButton = {
  setCheckClicked: React.Dispatch<React.SetStateAction<Boolean>>;
  checkClicked: Boolean;
  handleClose: any;
  setCheckModify: React.Dispatch<React.SetStateAction<Boolean>>;
  checkModify: Boolean;
  idBookToModify: number;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default AddBookButton;
