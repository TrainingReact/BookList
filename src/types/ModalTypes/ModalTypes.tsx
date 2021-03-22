import { Obj } from "../../components/MainModalForm/MainModalForm";
type ModalProps = {
  handleClose: any;
  checkModify: Boolean;
  setCheckModify: React.Dispatch<React.SetStateAction<Boolean>>;
  idBookToModify: number;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default ModalProps;
