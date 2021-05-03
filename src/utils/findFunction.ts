import { Obj } from "../components/MainModalForm/MainModalForm";

const findFunction = (book: any, id: number) => {
  const bookFinded = book.find((val: Obj) => {
    return val.id === id;
  });

  return bookFinded;
};

export default findFunction;
