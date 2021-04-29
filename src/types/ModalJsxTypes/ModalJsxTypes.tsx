import { Obj } from "../../components/MainModalForm/MainModalForm";

type ModalJsxTypes = {
  handleAddBook: any;
  handleType: any;
  handleClose: any;
  setToggle: React.Dispatch<React.SetStateAction<Boolean>>;
  toggle: Boolean;
  book: Obj;
};

export default ModalJsxTypes;
