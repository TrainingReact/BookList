import { Obj } from "../../components/MainModalForm/MainModalForm";

type MainModalFormPropsTypes = {
  handleClose: any;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default MainModalFormPropsTypes;
