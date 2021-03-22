import { Obj } from "../../components/MainModalForm/MainModalForm";

type ModalJsxTypes = {
  book: Obj;
  handleAddBook: any;
  handleType: any;
  handleClose: any;
  setToggle: React.Dispatch<React.SetStateAction<Boolean>>;
  toggle: Boolean;
};

export default ModalJsxTypes;
