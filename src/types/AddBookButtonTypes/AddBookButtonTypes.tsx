import { Obj } from "../../components/MainModalForm/MainModalForm";

type AddBookButton = {
  handleClose: any;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default AddBookButton;
