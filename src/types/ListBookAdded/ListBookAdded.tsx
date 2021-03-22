import { Obj } from "../../components/MainModalForm/MainModalForm";

type ListBooksAddedType = {
  setIdBookToModify: React.Dispatch<React.SetStateAction<number>>;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default ListBooksAddedType;
