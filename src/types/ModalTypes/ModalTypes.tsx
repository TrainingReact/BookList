import { Obj } from "../../components/MainModalForm/MainModalForm";
type ModalProps = {
  handleClose: any;
  idBookToModify: number;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default ModalProps;
