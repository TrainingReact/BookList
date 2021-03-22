import { Obj } from "../../components/MainModalForm/MainModalForm";

type MainModalFormPropsTypes = {
  handleClose: any;
  idBookToModify: number;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default MainModalFormPropsTypes;
