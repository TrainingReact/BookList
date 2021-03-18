import { Obj } from "../../components/ModalFormAddBook/MainModalForm/MainModalForm";
type ModalProps = {
  checkClicked: Boolean;
  setCheckClicked: React.Dispatch<React.SetStateAction<Boolean>>;
  handleClose: any;
  checkModify: Boolean;
  setCheckModify: React.Dispatch<React.SetStateAction<Boolean>>;
  idBookToModify: number;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default ModalProps;
