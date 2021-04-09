import getKeys from "../utils/getKeysFunc";
import { objKeys } from "../types/objKeysTypes/objKeysType";
import { Obj } from "../components/MainModalForm/MainModalForm";
const setError = (
  book: Obj,
  setBook: React.Dispatch<React.SetStateAction<Obj>>,
  val: any
) => {
  getKeys(book).forEach((key: objKeys) => {
    if (key !== "id" && key !== "quantity") {
      if (book[key].value === "") {
        setBook((prevState: any) => ({
          ...prevState,
          [key]: {
            value: book[key].value,
            error: val,
          },
        }));
      }
    } else {
      return null;
    }
  });
};

export default setError;
