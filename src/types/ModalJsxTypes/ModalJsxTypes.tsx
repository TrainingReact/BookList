import { Obj } from "../../components/ModalFormAddBook/MainModalForm/MainModalForm";

type ModalJsxTypes = {
  book: Obj;
  handleAddBook: any;
  handleType: any;
  handleClose: any;
  checkModify: Boolean;
  setToggle: React.Dispatch<React.SetStateAction<Boolean>>;
  toggle: Boolean;
};

export default ModalJsxTypes;
