import { Obj } from "../../components/MainModalForm/MainModalForm";

type ListBooksAddedType = {
  setCheckClicked: React.Dispatch<React.SetStateAction<Boolean>>;
  setCheckModify: React.Dispatch<React.SetStateAction<Boolean>>;
  setIdBookToModify: React.Dispatch<React.SetStateAction<number>>;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default ListBooksAddedType;
