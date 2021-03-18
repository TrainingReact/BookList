import getKeys from "../utils/getKeysFunc";
import { objKeys } from "../types/objKeysTypes/objKeysType";
import { Obj } from "../components/ModalFormAddBook/MainModalForm/MainModalForm";

const clearAllField = (
  book: Obj,
  setBook: React.Dispatch<React.SetStateAction<Obj>>
) => {
  getKeys(book).map((val: objKeys) => {
    if (val !== "id") {
      setBook((prevState: any) => ({
        ...prevState,
        [val]: {
          value: "",
          error: book[val].error,
        },
      }));
    }
  });
};

export default clearAllField;
